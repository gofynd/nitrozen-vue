<template>
  <div class="nitrozen-pagination-container" :id="id">
    <div class="nitrozen-pagination">
      <div class="nitrozen-pagination__left">
        <span class="nitrozen-pagination__count">{{ countsText }}</span>
      </div>
      <div class="nitrozen-pagination__right">
        <div class="nitrozen-pagination__select">
          <span class="nitrozen-pagination__select__label">Rows per page</span>
          <nitrozen-dropdown
            class="nitrozen-pagination-page-size"
            :items="pageSizes"
            v-model="selectedPageSize"
            @change="pageSizeChange"
          ></nitrozen-dropdown>
        </div>
        <nitrozen-button
          class="nitrozen-pagination__prev"
          title="Previous"
          @click="previous"
          :class="{ 'pagination-diabled': !showPrev }"
        >
          <nitrozen-inline icon="arrow-left-black"></nitrozen-inline>
        </nitrozen-button>
        <nitrozen-button
          class="nitrozen-pagination__next"
          title="Next"
          @click="next"
          :class="{ 'pagination-diabled': !showNext }"
        >
          <nitrozen-inline icon="arrow-right-black"></nitrozen-inline>
        </nitrozen-button>
      </div>
    </div>
  </div>
</template>
<script>
import NitrozenUuid from "./../../utils/NUuid";
import NitrozenButton from "./../NBtn";
import NitrozenDropdown from "./../NDropdown";
import NitrozenInline from "./../NInline";

const MODE_REGULAR = "regular";
const MODE_CURSOR = "cursor";

export default {
  name: "nitrozen-pagination",
  components: {
    NitrozenButton,
    NitrozenDropdown,
    NitrozenInline,
  },
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-pagination-" + NitrozenUuid(),
    },
    /**
     * kind of pagination
     */
    name: {
      type: String,
    },
    /**
     * mode of pagination, via
     * 'regular' - skip-limit counts or
     * 'cursor' - next-page and previous-page Ids
     */
    mode: {
      type: String,
      enum: [MODE_REGULAR, MODE_CURSOR],
      default: MODE_REGULAR,
    },
    /**
     * page size dropdown options
     */
    pageSizeOptions: {
      type: Array,
      default: () => {
        return [10, 20, 50, 100];
      },
    },
    /**
     * pagination config value
     * @example `
     * {
     *     limit: Number,
     *     total: Number,
     *     current: Number,
     *     prevPage: String,
           nextPage: String,
           currentPage: String,
           currentTotal: Number,
     *  }
     * `
     */
    value: {
      type: Object,
      required: true,
      default: () => {
        return {
          limit: 0,
          total: 0,
          current: 0,
          prevPage: "",
          nextPage: "",

          // currentPage is computed.
          // on prev-button press it will be set to prevPage value
          // on next-button press it will be set to nextPage value
          currentPage: "",

          // currentTotal is count of items in current page.
          // Used when total is not available.
          currentTotal: 0,
        };
      },
    },
  },
  created() {
    this.setDefaults();
  },
  data: () => {
    return {
      selectedPageSize : null
    };
  },
  computed: {
    pages: function() {
      if (this.value.limit > 0) {
        return Math.ceil(this.value.total / this.value.limit);
      }
      return 0;
    },
    pageSizes() {
      const po = this.pageSizeOptions.map((p) => {
        return { text: p, value: p };
      });
      if (!this.selectedPageSize) {
        this.selectedPageSize = this.value.limit
          ? this.value.limit
          : po.length > 0
          ? po[0].value
          : null;
      }
      return po;
    },
    firstRecord() {
      return this.value.limit * (this.value.current - 1) + 1;
    },
    lastRecord() {
      return this.value.limit * this.value.current < this.value.total
        ? this.value.limit * this.value.current
        : this.value.total;
    },
    countsText() {
      let txt = "";
      if (this.showTotal) {
        txt = ` ${this.firstRecord} - ${this.lastRecord}`;
        txt += ` of ${this.value.total}`;
        txt += ` ${this.name || ""}`;
      } else if (this.value.currentTotal) {
        txt = `Showing ${this.value.currentTotal} ${this.name}`;
      } else {
        txt = "";
      }
      return txt;
    },
    showTotal() {
      if (this.value.total) {
        return true;
      }
      return false;
    },
    showPrev() {
      if (this.value.total && this.value.current === 1) {
        return false;
      }
      if (this.mode === MODE_CURSOR && !this.value.prevPage) {
        return false;
      }
      return true;
    },
    showNext() {
      if (this.value.total && this.value.current >= this.pages) {
        return false;
      }
      if (this.mode === MODE_CURSOR && !this.value.nextPage) {
        return false;
      }
      return true;
    },
  },
  methods: {
    setDefaults() {
      if (!this.value.current) {
        // this.$set(this.value, "current", 1);
        this.value.current = 1;
      }
    },
    previous() {
      if (this.value.total) {
        if (this.value.current === 1) {
          return;
        }
        this.value.current--;
      } else if (this.mode === MODE_CURSOR) {
        if (!this.value.prevPage) return;
        this.value.nextPage = "";
        this.value.currentPage = this.value.prevPage;
      }
      this.change();
      this.$emit('previousClick');
    },
    next() {
      if (this.value.total) {
        if (this.value.current >= this.pages) {
          this.value.current = this.pages;
          return;
        }
        if (this.pages === 0) {
          this.value.current = 0;
          return;
        }
        this.value.current++;
      }
      if (this.mode === MODE_CURSOR) {
        if (!this.value.nextPage) return;
        this.value.prevPage = "";
        this.value.currentPage = this.value.nextPage;
      }
      this.change();
      this.$emit('nextClick');
    },
    pageSizeChange(size) {
      this.value.current = 1;
      this.value.limit = size;
      if (this.mode === MODE_CURSOR) {
        this.value.nextPage = "";
        this.value.prevPage = "";
        this.value.currentPage = "";
      }
      this.change();
    },
    change() {
      this.$emit("input", this.value);
      this.$emit("change", this.value);
    },
  },
};
</script>
<style lang="less">
@import "./NPagination.less";
</style>
