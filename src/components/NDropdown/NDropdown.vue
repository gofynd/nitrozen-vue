<template>
  <div class="nitrozen-dropdown-container">
    <label v-if="label" class="nitrozen-dropdown-label">{{ label }} {{ required ? " *" : "" }}</label>
    <div class="nitrozen-select-wrapper" @click="toggle">
      <div
        class="nitrozen-select"
        ref="n_dropdown"
        v-bind:class="{
          disabled: disabled,
          'nitrozen-dropdown-open': showOptions
        }"
      >
        <div class="nitrozen-select__trigger">
          <span v-if="searchable" class="nitrozen-searchable-input-container">
            <input
              v-model="searchInput"
              v-on:keyup="searchInputChange()"
              :placeholder="searchInputPlaceholder"
            />
            <span v-if="searchInput" @click="clearSearchInput">&#10005;</span>
          </span>
          <span v-if="!searchable">{{ selectedText }}</span>
          <div class="nitrozen-dropdown-arrow">
            <nitrozen-inline icon="dropdown_arrow_down"></nitrozen-inline>
          </div>
        </div>
        <div
          class="nitrozen-options"
          ref="nitrozen-select-option"
          v-on:scroll.passive="handleScroll"
          v-bind:class="{ 'nitrozen-dropup': dropUp }"
        >
          <span
            v-for="(item, index) in items"
            v-bind:key="index"
            :data-value="item.value"
            class="nitrozen-option ripple"
            v-bind:class="{ selected: item == selected }"
            @click="selectItem(index, item)"
          >
            <template v-if="multiple">
              <nitrozen-checkbox
                :checkboxValue="item.value"
                @change="setCheckedItem"
                v-model="selectedItems"
                :ref="`multicheckbox-${index}`"
              >{{ item.text }}</nitrozen-checkbox>
            </template>
            <template v-else>{{ item.text }}</template>
          </span>
          <span v-if="searchable && items.length == 0" class="nitrozen-option">No {{ label }} Found</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NitrozenUuid from "./../../utils/NUuid";
import NitrozenInline from "./../NInline";
import NitrozenCheckbox from "./../NCheckbox";

export default {
  name: "nitrozen-dropdown",
  components: {
    "nitrozen-inline": NitrozenInline,
    "nitrozen-checkbox": NitrozenCheckbox
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
    /**
     * selected value
     */
    value: {
      required: true
    }
  },
  data: () => {
    return {
      selected: null,
      selectedItems: [],
      searchInput: "",
      showOptions: false,
      dropUp: false,
      viewport: null,
      searchInputPlaceholder: ""
    };
  },
  computed: {
    selectedText: function() {
      if (!this.multiple) {
        this.selected = {};
        if (this.value) {
          this.selected = this.items.find(i => i.value == this.value);
          this.searchInput = this.selected.text;
        }
        if (this.selected) {
          return this.selected.text;
        } else if (this.label) {
          return `Choose ${this.label}`;
        }
        return "";
      } else {
        // this.selected = [];
        let tmp = [];
        let selected = {};
        if (this.value) {
          // this.selected = [...this.value];
          this.selectedItems = [...this.value];
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
          return tmp.toString();
        } else if (this.label) {
          return `Choose ${this.label}`;
        }
        return "";
      }
    }
  },
  mounted() {
    this.searchInputPlaceholder = `Search ${this.label}`;
    if (!this.multiple) {
      if (this.value) {
        let selected = this.items.find(i => i.value == this.value);
        this.searchInput = selected.text;
      }
    } else {
      if (this.value) {
        this.selectedItems = [...this.value];
        this.searchInput = "";
      }
    }
  },
  methods: {
    clearSearchInput() {
      this.searchInput = "";
      this.searchInputChange();
    },
    selectItem(index, item) {
      if (!this.multiple) {
        this.selected = item;
        if (item.text) {
          this.searchInput = item.text;
          this.searchInputChange();
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
    searchInputChange() {
      let obj = {
        text: this.searchInput,
        id: this.id
      };
      this.eventEmit(obj, "searchInputChange");
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
      if (!dropdown) return;
      const dropdownRect = dropdown.getBoundingClientRect();
      const topSpace = dropdownRect.top;
      const bottomSpace =
        this.viewport.height - dropdownRect.top - dropdown.offsetHeight;
      const dropdownOptionsHeight = dropdown.children[1].offsetHeight;
      if (dropdownOptionsHeight < bottomSpace) {
        this.dropUp = false;
      } else {
        this.dropUp = true;
      }
    },
    documentClick(e) {
      // close dropdown on outside click
      const select = this.$refs.n_dropdown;
      if (!select.contains(e.target)) {
        select.classList.remove("nitrozen-dropdown-open");
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
@import "./NDropdown.less";
.nitrozen-searchable-input-container {
  width: 100%;
  input {
    font-size: 14px;
    width: calc(100% - 20px);
    border: none;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
}
</style>