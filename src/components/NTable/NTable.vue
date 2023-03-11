<template>
  <div class="n-table-container">
    <table class="n-table">
      <thead class="n-table-top">
        <tr>
          <th v-if="checkAble" :style="{ backgroundColor: `${headerBackground}` }"
            :class="[condensed && 'n-table-condensed']" class="n-table-head-data">
            <n-checkbox :value="allChecked" @change="getAllSelectedItems($event, tableRow)" class="table-checkbox" />
          </th>
          <th :style="{
            backgroundColor: `${headerBackground}`,
            width: headerItem.width ? headerItem.width : 'auto',
          }" :class="[condensed && 'n-table-condensed']" class="n-table-head-data"
            v-for="(headerItem, headerIndex) in tableHeader" :key="headerIndex">
            <div class="n-table-data">
              <div>
                {{ headerItem.value }}
              </div>
              <div v-if="headerItem.sortable" @click="sortTableHeader(headerIndex)" :class="[
                !clickedHeaderItems.includes(headerIndex)
                  ? 'n-table-icon-left'
                  : 'n-table-icon-down',
              ]">
                <slot v-if="customIcons" />
                <n-icon v-else name="chevron_down" color="#ffff" :size="20" />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="n-body">
        <tr class="n-table-row" :class="[isZebra && rowIndex % 2 === 1 && 'n-zebra-table']"
          v-for="(rowItem, rowIndex) in tableRow" :key="rowIndex"
          @click="$emit('onRowClick', rowIndex)"
          >
          <th v-if="checkAble" class="n-table-body-data" :class="[
            columnBorder && index !== 0 && 'n-table-left-border',
            condensed && 'n-table-condensed',
          ]" 
          >
            <n-checkbox :value="rowItem.isChecked" @change="getCheckedRow($event, rowIndex)" class="table-checkbox" />
          </th>
          <td class="n-table-body-data" :class="[
            columnBorder && headerIndex !== 0 && 'n-table-left-border',
            condensed && 'n-table-condensed',
          ]" v-for="(headerItem, headerIndex) in tableHeader" :key="headerIndex">
            {{ rowItem[headerItem.name] }}
          </td>
        </tr>
      </tbody>
    </table>
    <footer v-if="isFooter" :class="[!condensed ? 'n-table-footer' : 'n-table-footer-condensed']">
      {{ footer }}
    </footer>
</div>
</template>
<script>
import NIcon from "../NIcon/NIcon.vue";
import NCheckbox from "../NCheckbox";
export default {
  components: { NIcon, NCheckbox },
  name: "nitrozen-table",

  data() {
    return {
      clickedHeaderItems: [],
      isSorted: false,
      allChecked: false,
      checkedItems: [],
      checkAllItems: [],
    };
  },

  props: {
    tableHeader: {
      type: Array,
      default: () => [],
      required: true,
    },
    tableRow: {
      type: Array,
      default: () => [],
      required: true,
    },
    footer: {
      type: String,
      default: "Default Footer",
    },
    headerBackground: {
      type: String,
      default: "var(--ColorPrimary50, #3535f3)",
    },
    customIcons: {
      type: Boolean,
      default: false,
    },
    checkAble: {
      type: Boolean,
      default: false,
    },
    isZebra: {
      type: Boolean,
      default: false,
    },
    columnBorder: {
      type: Boolean,
      default: false,
    },
    condensed: {
      type: Boolean,
      default: false,
    },
    isFooter: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    getCheckedRow(e, rowIndex) {
      const checked = e.target.checked;
      const rowItem = this.tableRow[rowIndex];
      rowItem.isChecked = checked;
      if (!checked) {
        this.checkedItems.splice(rowIndex, 1);
      } else {
        this.checkedItems.push(rowItem);
      }
      this.checkSingleBox();
      this.$emit("getSingleChecked", this.checkedItems);
    },
    getAllSelectedItems(e, val) {
      const checked = e.target.checked;
      this.checkAllContent(checked, val);
      this.$emit("getAllItems", this.checkAllItems);
    },

    checkAllContent(status, row) {
      if (status) {
        this.checkAllItems = [...this.tableRow];
        row.forEach((element) => {
          this.$set(element, "isChecked", status);
        });
      } else {
        this.checkAllItems = [];
        row.forEach((element) => {
          this.$set(element, "isChecked", status);
        });
      }
    },

    checkSingleBox() {
      const row = this.tableRow;
      let count = 0;
      const size = row.length;
      row.forEach((element) => {
        if (element.isChecked) {
          count++;
        }
      });
      count === size ? (this.allChecked = true) : (this.allChecked = false);
    },

    sortTableHeader(headerIndex) {
      // create a temp arr
      let tempClickedIds = [...this.clickedHeaderItems];
      // if not exists then that means its clicked
      if (!tempClickedIds.includes(headerIndex)) {
        tempClickedIds.push(headerIndex);
        this.$emit("click", headerIndex);
      } else {
        // if exists then find by index and remove that array element
        let indexPos = tempClickedIds.indexOf(headerIndex);
        if (indexPos > -1) {
          tempClickedIds.splice(indexPos, 1);
          // this.$emit('click', headerIndex)
        }
      }

      this.clickedHeaderItems = [...tempClickedIds];
      console.log(this.clickedHeaderItems);
    },
  },

  mounted() {
    if (this.allChecked && this.checkAble) {
      this.checkAllContent(this.allChecked, this.tableRow);
    } else {
      this.checkAllContent(this.allChecked, this.tableRow);
    }
  },
};
</script>
<style scoped lang="less">
@import "../../base/variable.less";
.n-table-container {
  border: 0.1rem solid @ColorPrimaryGrey40;
  border-radius: @RadiusMedium;
  overflow: auto;
  font-family: @PrimaryFont;

  .n-table {
    width: 100%;
    table-layout: auto;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: left;
    background-color: @ColorWhite;

    .n-table-top {
      border-radius: 0.8rem;
      color: @WhiteColor;
    }

    .n-table-head-data {
      font-size: 1.6rem;
      padding: @SpacingM;
      position: relative;

      .n-table-data {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .n-table-icon-left {
          transform: rotate(-90deg);
          transition: transform 0.1s linear;
        }

        .n-table-icon-down {
          transform: rotate(0deg);
          transition: transform 0.1s linear;
        }
      }

      .table-checkbox {
        position: absolute;
        top: 33%;
        transform: translateY(-50%);
      }
    }

    .n-table-body-data {
      padding: @SpacingM;
      border-top: 0.1rem solid @ColorPrimaryGrey40;
      position: relative;

      .table-checkbox {
        position: absolute;
        top: 33%;
        transform: translateY(-50%);
      }
    }

    .n-table-left-border {
      border-left: 0.1rem solid @ColorPrimaryGrey40;
    }

    .n-zebra-table {
      background-color: @ColorPrimaryGrey20;
    }

    .n-table-condensed {
      padding: @SpacingS;
    }
  }

  .n-table-row {
    font-size: 1.4rem;
    overflow: hidden;
  }
}

.n-table-footer {
  padding: @SpacingM;
  border-top: 0.1rem solid @ColorPrimaryGrey40;
  font-size: 1.6rem;
}

.n-table-footer-condensed {
  padding: @SpacingS;
  border-top: 0.1rem solid @ColorPrimaryGrey40;
  font-size: 1.4rem;
}
</style>