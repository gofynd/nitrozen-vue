<template>
  <div class="nitrozen-dropdown-container">
    <label v-if="label" class="nitrozen-dropdown-label">
      {{ label }} {{ required ? " *" : "" }}</label
    >
    <div class="nitrozen-select-wrapper" @click="toggle">
      <div
        class="nitrozen-select"
        ref="n_dropdown"
        v-bind:class="{ disabled: disabled }"
      >
        <div class="nitrozen-select__trigger">
          <span>{{ selectedText }}</span>
          <div class="nitrozen-dropdown-arrow"></div>
        </div>
        <div class="nitrozen-options">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NitrozenUuid from "./../../utils/NUuid";
export default {
  name: "nitrozen-dropdown",
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
    }
  },
  data: () => {
    return {
      selected: null
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
  methods: {
    selectItem(item) {
      this.selected = item;
      this.$emit("input", item.value); // v-model implementation
      this.$emit("change", item.value);
    },
    toggle() {
      if (this.disabled) return;
      this.$refs.n_dropdown.classList.toggle("nitrozen-dropdown-open");
    },
    documentClick(e) {
      // close dropdown on outside click
      const select = this.$refs.n_dropdown;
      if (!select.contains(e.target)) {
        select.classList.remove("nitrozen-dropdown-open");
      }
    }
  },
  created() {
    document.addEventListener("click", this.documentClick);
  },
  destroyed() {
    document.removeEventListener("click", this.documentClick);
  }
};
</script>
<style lang="less">
@import "./NDropdown.less";
</style>