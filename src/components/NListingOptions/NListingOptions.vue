<template>
  <!-- test -->
  <div class="nitrozen-dropdown-container">
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
          'nitrozen-dropdown-open': showOptions,
        }"
      >
        <div class="nitrozen-select__trigger">
          <span
            v-if="searchable && !disabled"
            class="nitrozen-searchable-input-container"
          >
            <input
              type="search"
              v-model="searchInput"
              @search="searchInputChange"
              v-on:keyup="searchInputChange"
              :placeholder="searchInputPlaceholder"
            />
          </span>

          <span v-else-if="defaultCheckbox" class="nitrozen-default-checkbox">
            <nitrozen-checkbox
              :value="checboxSelected"
              :indeterminateValue="indeterminate"
              :defaultCheckbox="true"
            ></nitrozen-checkbox>
          </span>
          <span v-else>{{ selectedText }}</span>
          <div class="nitrozen-dropdown-arrow">
            <nitrozen-inline icon="dropdown_arrow_down"></nitrozen-inline>
          </div>
        </div>
        <div
          class="nitrozen-options"
          ref="nitrozen-select-option"
          v-on:scroll.passive="handleScroll"
          :class="{ 'nitrozen-dropup': dropUp }"
        >
          <span
            v-if="enable_select_all"
            v-show="!searchInput"
            class="nitrozen-option ripple"
            @click="selectItem('all', all_option)"
          >
            <slot :item="all_option" :selected="allSelected" name="option">
              <div class="nitrozen-option-container">
                <nitrozen-checkbox
                  :checkboxValue="allSelected"
                  :value="allSelected"
                  @change="setCheckedItem"
                  :ref="`multicheckbox-all`"
                >
                  <span
                    class="nitrozen-option-image"
                    :class="{
                      'nitrozen-dropdown-multicheckbox-selected': allSelected,
                    }"
                    >All</span
                  >
                </nitrozen-checkbox>
              </div>
            </slot>
          </span>
          <div
            v-if="enable_select_all"
            v-show="!searchInput"
            class="horizantal-divider"
          />
          <span
            v-for="(item, index) in items"
            :key="index"
            :data-value="item.value"
            class="nitrozen-option ripple"
            :class="{
              selected: item == selected,
              'nitrozen-option-group-label': item.isGroupLabel,
            }"
            @click="selectItem(index, item)"
          >
            <slot :item="item" :selected="item == selected" name="option">
              <div class="nitrozen-option-container">
                <template v-if="multiple && !item.isGroupLabel">
                  <nitrozen-checkbox
                    :checkboxValue="item.value"
                    @change="setCheckedItem"
                    v-model="selectedItems"
                    :ref="`multicheckbox-${index}`"
                  >
                    <span
                      class="nitrozen-option-image"
                      :class="{
                        'nitrozen-dropdown-multicheckbox-selected':
                          selectedItems.includes(item.value),
                      }"
                    >
                      <img
                        v-if="item.logo"
                        class="nitrozen-option-logo"
                        :src="item.logo"
                        alt="logo"
                      />
                      {{ item.text }}</span
                    >
                  </nitrozen-checkbox>
                </template>
                <template v-else>
                  <span
                    class="nitrozen-option-image"
                    :class="{
                      'nitrozen-option-child-label':
                        items.find((i) => i.isGroupLabel) && !item.isGroupLabel,
                    }"
                  >
                    <img
                      v-if="item.logo"
                      class="nitrozen-option-logo"
                      :src="item.logo"
                      alt="logo"
                    />
                    {{ item.text }}
                  </span>
                </template>
              </div>
            </slot>
          </span>
          <span v-if="searchable && items.length == 0" class="nitrozen-option">
            <div class="nitrozen-option-container" v-if="!add_option">
              No {{ label }} Found
            </div>
            <div
              class="nitrozen-option-container"
              v-else-if="add_option && searchInput.length"
            >
              <div class="nitrozen-dropdown-empty" @click="addOption">
                <nitrozen-inline icon="plus-btn"></nitrozen-inline>
                <p>Add {{ searchInput }}</p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NitrozenUuid from "./../../utils/NUuid";
import NitrozenInline from "./../NInline";
import NitrozenCheckbox from "./../NCheckbox";
import NTooltip from "./../NTooltip";

export default {
  name: "nitrozen-listing-options",
  components: {
    "nitrozen-inline": NitrozenInline,
    "nitrozen-checkbox": NitrozenCheckbox,
    "nitrozen-tooltip": NTooltip,
  },
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-dropdown-" + NitrozenUuid(),
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
      },
    },
    /**
     * disabled dropdown
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * dropdown label
     */
    label: {
      type: String,
    },
    /**
     * multiselect value
     */
    multiple: {
      default: false,
    },
    placeholder: {
      type: String,
    },
    /**
     * dropdown selection required
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * searchable value
     */
    searchable: {
      default: false,
    },
    tooltip: {
      type: String,
      default: "",
    },
    /**
     * selected value
     */
    value: {
      required: true,
    },
    /**
     * Add if not present
     */
    add_option: {
      type: Boolean,
      default: false,
    },
    enable_select_all: {
      type: Boolean,
      default: false,
    },
    /**For default checkbox */
    defaultCheckbox: {
      type: Boolean,
      default: false,
    },
    itemsChecked: {
      type: Number,
      default: 0,
    },
    totalItems: {
      type: Number,
      default: 0,
    },
    dropdownOptions: {
      type: Array,
      defult: [],
    },
    selectedStatus: {
      type: [Array, Number],
      default: [],
    },

    // indeterminate: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data: () => {
    return {
      selected: null,
      selectedItems: [],
      searchInput: "",
      showOptions: false,
      dropUp: false,
      viewport: null,
      allSelected: false,
      allOptionsSelected: false,
      all_option: { text: "Select All", value: "all" },
      checboxSelected: false,
      indeterminate: false,
      checkDropdownStatus: "",
    };
  },
  watch: {
    totalItems() {
      console.log(this.totalItems);
      console.log(this.dropdownOptions);
    },
    itemsChecked() {
      this.checkedItems();
    },
    selectedStatus() {
      console.log(this.selectedStatus, "this.selectedStatus");
      this.$emit("checkDropdownStatus", this.selectedStatus);
      // let checkStatusObj = this.dropdownOptions.filter(
      //   (item) => item.value === this.selectedStatus
      // );
      // console.log(checkStatusObj);
      // this.checkDropdownStatus = checkStatusObj[0].value;
      // console.log(this.checkDropdownStatus);
      // if()
      // console.log(this.selectedStatus);
    },
    value() {
      if (Array.isArray(this.value)) {
        this.selectedItems = [...this.value];
      }
      if (!this.multiple && this.searchable) {
        const selected = this.items.find((i) => i.value == this.value);
        this.searchInput = selected ? selected.text : this.value;
      }
      this.setAllOptions();
    },
    items: {
      handler: function () {
        this.setAllOptions();
      },
    },
  },
  computed: {
    selectedText: function () {
      if (!this.multiple) {
        this.selected = {};
        if (this.value) {
          if (this.items.length) {
            this.selected = this.items.find((i) => i.value == this.value);
            this.searchInput = this.selected ? this.selected.text : "";
          }
        }
        if (this.selected && this.selected.text) {
          return this.selected.text;
        } else if (this.label) {
          return this.placeholder || `Choose ${this.label}`;
        }
        return "";
      } else {
        if (this.allOptionsSelected) {
          return `All ${this.selectedItems.length} ${this.label} selected`;
        }
        let tmp = [];
        let selected = {};
        if (this.value) {
          this.searchInput = "";
        }
        if (this.selectedItems.length) {
          this.selectedItems.forEach((ele) => {
            if (!selected[ele]) {
              selected[ele] = true;
            }
          });
          this.items.forEach((ele) => {
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

    searchInputPlaceholder: function () {
      if (this.enable_select_all && this.selectedItems.length) {
        if (this.selectedItems.length === this.getItems(this.items).length) {
          return `All ${this.label}(s) selected`;
        }
        return `${this.selectedItems.length} ${this.label}(s) selected`;
      }
      return this.placeholder || `Search ${this.label}`;
    },
  },
  mounted() {
    if (!this.multiple) {
      this.enable_select_all = false;
      if (this.value) {
        const selected = this.items.find((i) => i.value == this.value);
        this.searchInput = selected ? selected.text : "";
      }
    } else {
      if (this.value) {
        this.selectedItems = [...this.value];
        this.searchInput = "";
        this.setAllOptions(true);
      }
    }
  },
  methods: {
    checkedItems() {
      if (this.itemsChecked === 0) {
        this.checboxSelected = false;
        this.indeterminate = false;
      } else if (
        this.itemsChecked < this.totalItems ||
        this.itemsChecked > this.totalItems
      ) {
        this.checboxSelected = false;

        this.indeterminate = true;
      } else {
        this.checboxSelected = true;
        this.indeterminate = false;
      }
    },
    getItems(items) {
      return items
        .filter(function (item) {
          return !item.isGroupLabel;
        })
        .map((item) => item.value);
    },
    setAllOptions(mounted = false) {
      let items = [...this.items];
      if (mounted) {
        items = [...this.value];
      }
      if (this.multiple && this.enable_select_all) {
        this.allOptionsSelected =
          this.selectedItems.length === this.getItems(items).length &&
          this.enable_select_all;
        this.allSelected = this.allOptionsSelected;
      }
    },
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
        if (index === "all") {
          this.allSelected = !this.allSelected;
          if (this.allSelected) {
            this.selectedItems = this.getItems(this.items);
          } else {
            this.selectedItems = [];
          }
          const multicheckbox = this.$refs[`multicheckbox-${index}`];

          if (multicheckbox) multicheckbox.toggleAll(this.selectedItems);
          event.stopPropagation();
        } else {
          const multicheckbox = this.$refs[`multicheckbox-${index}`][0];
          if (multicheckbox) multicheckbox.toggle();
          event.stopPropagation();
          this.allSelected = this.allOptionsSelected;
        }
      }
    },
    addOption() {
      let value = this.searchInput;
      this.searchInput = "";
      this.$emit("addOption", value);
      this.eventEmit({}, "searchInputChange");
      this.calculateViewport();
    },
    setCheckedItem() {
      this.$emit("input", this.selectedItems); // v-model implementation
      this.$emit("change", this.selectedItems);
    },
    searchInputChange(e) {
      this.showOptions = true;
      this.searchInput = e.target.value;
      console.log(e.target.value);
      let obj = {
        id: this.id,
        text: this.searchInput,
      };
      if (!this.searchInput) {
        this.setAllOptions();
      }
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
    handleTABKey: function (event) {
      // TAB key detection
      if (event.keyCode == 9 && this.showOptions) {
        event.preventDefault();
        event.stopPropagation();
        this.showOptions = false;
      }
    },
  },
  created() {
    this.calculateViewport();
    if (typeof document !== "undefined") {
      document.addEventListener("click", this.documentClick);
      document.addEventListener("keydown", this.handleTABKey);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.calculateViewport);
      window.addEventListener("scroll", this.calculateViewport);
    }
  },
  destroyed() {
    document.removeEventListener("click", this.documentClick);
    document.removeEventListener("keydown", this.handleTABKey);
    window.removeEventListener("resize", this.calculateViewport);
    window.removeEventListener("scroll", this.calculateViewport);
  },
};
</script>
<style lang="less">
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
.horizantal-divider {
  height: 1px;
  width: 100%;
  background-color: lightgrey;
  margin: 5px 0;
}
</style>
