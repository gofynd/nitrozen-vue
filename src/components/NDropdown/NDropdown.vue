<template>
  <div class="dropdown-container">
    <label v-if="label" class="label">
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
          <div class="arrow"></div>
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
export default {
  name: "nitrozen-dropdown",
  props: {
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
      this.selected = this.items.find(i => i.value == this.value);
      if (this.selected) {
        return this.selected.text;
      } else {
        return `Choose ${this.label}`;
      }
    }
  },
  methods: {
    selectItem(item) {
      this.selected = item;
      this.$emit("input", item.value); // v-model implementation
    },
    toggle() {
      if (this.disabled) return;
      this.$refs.n_dropdown.classList.toggle("open");
    },
    documentClick(e) {
      // close dropdown on outside click
      const select = this.$refs.n_dropdown;
      if (!select.contains(e.target)) {
        select.classList.remove("open");
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