<template>
  <div class="nitrozen-tag-dropdown-container">
    <label v-if="label" class="nitrozen-dropdown-label">
      {{ label }} {{ required ? " *" : "" }}
      <span class="nitrozen-tooltip-icon" v-if="tooltip != ''">
        <nitrozen-tooltip
          :tooltipText="tooltip"
          position="top"
        ></nitrozen-tooltip>
      </span>
    </label>
    <div class="nitrozen-select-wrapper" @click="toggle">
      <div
        class="nitrozen-select"
        ref="n_dropdown"
        v-bind:class="{
          disabled: disabled,
          'nitrozen-dropdown-open': showOptions
        }"
      >
        <div class="nitrozen-select__trigger"
            :class="{'tag-view-container': tagView }">
          <span v-if="searchable" class="nitrozen-searchable-input-container">
            <input
              type="search"
              v-model="searchInput"
              @search="searchInputChange"
              v-on:keyup="searchInputChange"
              :placeholder="searchInputPlaceholder"
            />
          </span>
          <span v-else-if="tagView">
            <nitrozen-chips
                class="chip-wrapper"
                v-for="(item, index) in items.filter((it)=>{ return selectedItems.includes(
                      it.value) })"
                :key="'flt_tag_' + index"
                > {{ item.text }}
                <nitrozen-inline
                    :icon="'cross'"
                    class="nitrozen-icon"
                    v-on:click="removeChip(item.value, $event)"
                ></nitrozen-inline>
            </nitrozen-chips>
          </span>
          <span v-else>{{ selectedText }}</span>
          <div class="nitrozen-dropdown-arrow">
            <nitrozen-inline icon="dropdown_arrow_down"></nitrozen-inline>
          </div>
        </div>
      </div>
      <div
          class="nitrozen-options"
          ref="nitrozen-select-option"
          v-on:scroll.passive="handleScroll"
          :class="{ 
            'nitrozen-dropup': dropUp,
            'nitrozen-dropdown-open': showOptions
          }"
        >
          <span
            v-for="(item, index) in items"
            :key="index"
            :data-value="item.value"
            class="nitrozen-option ripple"
            :class="{
              selected: item == selected,
              'nitrozen-option-group-label': item.isGroupLabel
            }"
            @click="selectItem(index, item)"
          >
            <template v-if="multiple && !item.isGroupLabel">
              <nitrozen-checkbox
                :checkboxValue="item.value"
                @change="setCheckedItem"
                v-model="selectedItems"
                :ref="`multicheckbox-${index}`"
              >
                <span
                  :class="{
                    'nitrozen-dropdown-multicheckbox-selected': selectedItems.includes(
                      item.value
                    )
                  }"
                >
                  {{ item.text }}
                </span>
              </nitrozen-checkbox>
            </template>
            <template v-else>
              <span
                :class="{
                  'nitrozen-option-child-label':
                    items.find(i => i.isGroupLabel) && !item.isGroupLabel
                }"
              >
                {{ item.text }}
              </span>
            </template>
          </span>
          <span v-if="searchable && items.length == 0" class="nitrozen-option">
            No {{ label }} Found
          </span>
        </div>
    </div>
  </div>
</template>
<script>
import NitrozenUuid from "./../../utils/NUuid";
import NitrozenInline from "./../NInline";
import NitrozenCheckbox from "./../NCheckbox";
import NTooltip from "./../NTooltip";
import NChips from "./../NChips";

export default {
  name: "nitrozen-tag-dropdown",
  components: {
    "nitrozen-inline": NitrozenInline,
    "nitrozen-checkbox": NitrozenCheckbox,
    "nitrozen-tooltip": NTooltip,
    "nitrozen-chips": NChips
  },
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-dropdown-" + NitrozenUuid()
    },
    /**
     * array of item in dropdown
     * @example `
     * {
     *    text: String,
     *    value: Object,
     * }
     * `
     */
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },
    /**
     * disbaled dropdown
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * dropdown label
     */
    label: {
      type: String
    },
    /**
     * multiselect value
     */
    multiple: {
      default: false
    },
    placeholder: {
      type: String
    },
    /**
     * dropdown selection required
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * searchable value
     */
    searchable: {
      default: false
    },
    tooltip: {
      type: String,
      default: ""
    },
    /**
     * selected value
     */
    value: {
      required: true
    },
    /**
     * tagView show selected item in tags
     */
    tagView: {
      type: Boolean,
      default: true
    }
  },
  data: () => {
    return {
      selected: null,
      selectedItems: [],
      searchInput: "",
      showOptions: false,
      dropUp: false,
      viewport: null
    };
  },
  watch: {
    value() {
      if (Array.isArray(this.value)) {
        this.selectedItems = [...this.value];
      }
      if (!this.multiple && this.searchable) {
        const selected = this.items.find(i => i.value == this.value);
        this.searchInput = selected ? selected.text : this.value;
      }
    }
  },
  computed: {
    selectedText: function() {
      if (!this.multiple) {
        this.selected = {};
        if (this.value) {
          if (this.items.length) {
            this.selected = this.items.find(i => i.value == this.value);
            this.searchInput = this.selected.text;
          }
        }
        if (this.selected && this.selected.text) {
          return this.selected.text;
        } else if (this.label) {
          return this.placeholder || `Choose ${this.label}`;
        }
        return "";
      } else {
        let tmp = [];
        let selected = {};
        if (this.value) {
          this.searchInput = "";
        }
        if (this.selectedItems.length) {
          this.selectedItems.forEach(ele => {
            if (!selected[ele]) {
              selected[ele] = true;
            }
          });
          this.items.forEach(ele => {
            if (selected[ele.value]) {
              tmp.push(ele.text);
            }
          });
          tmp = [...new Set(tmp)];
          return `${tmp.join(", ")}`;
        } else if (this.label) {
          return this.placeholder || `Choose ${this.label}`;
        }
        return "";
      }
    },
    searchInputPlaceholder: function() {
      return this.placeholder || `Search ${this.label}`;
    }
  },
  mounted() {
    if (!this.multiple) {
      if (this.value) {
        const selected = this.items.find(i => i.value == this.value);
        this.searchInput = selected ? selected.text : "";
      }
    } else {
      if (this.value) {
        this.selectedItems = [...this.value];
        this.searchInput = "";
      }
    }
  },
  methods: {
    selectItem(index, item) {
      if (item.isGroupLabel) {
        return;
      }

      if (!this.multiple) {
        this.selected = item;
        if (item.text) {
          this.searchInput = item.text;
        }
        this.$emit("input", item.value); // v-model implementation
        this.$emit("change", item.value);
      } else {
        const multicheckbox = this.$refs[`multicheckbox-${index}`][0];
        if (multicheckbox) multicheckbox.toggle();
        event.stopPropagation();
      }
    },
    setCheckedItem() {
      this.$emit("input", this.selectedItems); // v-model implementation
      this.$emit("change", this.selectedItems);
    },
    searchInputChange(e) {
      this.showOptions = true;
      this.searchInput = e.target.value;
      let obj = {
        id: this.id,
        text: this.searchInput
      };
      this.eventEmit(obj, "searchInputChange");
      this.calculateViewport();
    },
    toggle() {
      if (this.disabled) return;
      this.showOptions = !this.showOptions;
      if (this.showOptions) {
        this.calculateDropUpDown();
      }
    },
    /**
     * @description calclulate position of dropdwon
     */
    calculateDropUpDown() {
      const dropdown = this.$refs["n_dropdown"];
      const dropdownOptions = this.$refs["nitrozen-select-option"];

      if (!dropdown || !dropdownOptions) return;
      const dropdownRect = dropdown.getBoundingClientRect();
      const topSpace = dropdownRect.top;
      const bottomSpace =
        this.viewport.height - dropdownRect.top - dropdown.offsetHeight;
      const dropdownOptionsHeight = dropdownOptions.offsetHeight;
      if (dropdownOptionsHeight < bottomSpace) {
        this.dropUp = false;
        dropdownOptions.style.top=`0px`
      } else {
        this.dropUp = true;
        dropdownOptions.style.top=`-${dropdownOptionsHeight + 4}px`
      }
    },
    documentClick(e) {
      // close dropdown on outside click
      const select = this.$refs.n_dropdown;
      if (select && !select.contains(e.target)) {
        this.showOptions = false;
      }
    },
    calculateViewport() {
      const vw = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      const vh = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      this.viewport = { width: vw, height: vh };
      this.calculateDropUpDown();
    },
    eventEmit(event, type) {
      this.$emit(type, event);
    },
    handleScroll(event) {
      let elem = this.$refs["nitrozen-select-option"];
      this.$emit("scroll", elem);
    },
    removeChip(itemValue, $event) {
      $event.stopPropagation();
      this.selectedItems = this.selectedItems.filter((item)=> {
        return !(item === itemValue)
      })
    }
  },
  
  created() {
    this.calculateViewport();
    document.addEventListener("click", this.documentClick);
    window.addEventListener("resize", this.calculateViewport);
    window.addEventListener("scroll", this.calculateViewport);
  },
  destroyed() {
    document.removeEventListener("click", this.documentClick);
    window.removeEventListener("resize", this.calculateViewport);
    window.removeEventListener("scroll", this.calculateViewport);
  }
};
</script>
<style lang="less">
@import "./NTagDropdown.less";
.nitrozen-searchable-input-container {
  width: 100%;
  input {
    font-size: 14px;
    width: 100%;
    border: none;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
}
</style>