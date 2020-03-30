<template>
  <div class="nitrozen-dropdown-container">
    <label v-if="label" class="nitrozen-dropdown-label">
      {{ label }} {{ required ? " *" : "" }}</label
    >
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
              v-on:keyup="eventEmit(searchInput, 'searchInputChange')"
              :placeholder="searchInputPlaceholder"
            />
            <span @click="clearSearchInput">&#10005;</span>
          </span>
          <span v-if="!searchable">
            {{ selectedText }}
          </span>
          <div class="nitrozen-dropdown-arrow">
            <nitrozen-inline icon="dropdown_arrow_down"></nitrozen-inline>
          </div>
        </div>
        <div
          class="nitrozen-options"
          v-bind:class="{ 'nitrozen-dropup': dropUp }"
        >
          <span
            v-for="(item, index) in items"
            v-bind:key="index"
            :data-value="item.value"
            class="nitrozen-option "
            v-bind:class="{ selected: item == selected }"
            @click="selectItem(item)"
          >
            {{ item.text }}
          </span>
          <span v-if="searchable && items.length == 0" class="nitrozen-option">
            No {{ label }} Found
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NitrozenUuid from "./../../utils/NUuid";
import NitrozenInline from "./../NInline";
export default {
  name: "nitrozen-dropdown",
  components: {
    "nitrozen-inline": NitrozenInline
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
     * dropdown selection required
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * selected value
     */
    value: {
      required: true
    },
    /**
     * searchable value
     */
    searchable: {
      default: false
    }
  },
  data: () => {
    return {
      selected: null,
      searchInput: "",
      showOptions: false,
      dropUp: false,
      viewport: null,
      searchInputPlaceholder: ""
    };
  },
  computed: {
    selectedText: function() {
      if (this.value) {
        this.selected = this.items.find(i => i.value == this.value);
      }
      if (this.selected) {
        return this.selected.text;
      } else if (this.label) {
        return `Choose ${this.label}`;
      }
      return "";
    }
  },
  mounted(){
    this.searchInputPlaceholder = `Search ${this.label}`
  },
  methods: {
    clearSearchInput(){
      this.searchInput = ""
      this.eventEmit(this.searchInput, 'searchInputChange')
    },
    selectItem(item) {
      this.selected = item;
      if(item.text){
        this.searchInput = item.text
        this.eventEmit(this.searchInput, 'searchInputChange')
      }
      this.$emit("input", item.value); // v-model implementation
      this.$emit("change", item.value);
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
  },
  
};
</script>
<style lang="less">
@import "./NDropdown.less";
.nitrozen-searchable-input-container{
  width:100%;
  input{
    width:calc(100% - 20px);
    border: none;
  }
  input:focus, textarea:focus {
      outline: none;
  }
}
</style>