<template>
  <div class="nitrozen-pagination-container" v-if="value.total > 0">
    <div class="nitrozen-pagination">
      <div class="nitrozen-pagination__left">
        <span class="nitrozen-pagination__count">
          {{ firstRecord }} - {{ lastRecord }} / {{ value.total }}
          {{ name || "" }}
        </span>
      </div>
      <div class="nitrozen-pagination__right">
        <div class="nitrozen-pagination__select">
          <span class="nitrozen-pagination__select__label">Rows per page</span>
          <nitrozen-dropdown
            class="nitrozen-pagination-page-size"
            :items="pageSizes"
            v-model="selectedPageSize"
            @change="pageSizeChange"
          >
          </nitrozen-dropdown>
        </div>
        <nitrozen-button
          class="nitrozen-pagination__prev"
          title="Previous"
          @click="previous"
          :class="{'pagination-diabled' : value.current == 1}"
        >
          <nitrozen-inline icon="arrow-left-black"></nitrozen-inline>
        </nitrozen-button>
        <nitrozen-button
          class="nitrozen-pagination__next"
          title="Next"
          @click="next"
          :class="{'pagination-diabled' : value.current >= pages}"
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
export default {
  name: "nitrozen-pagination",
  components: {
    "nitrozen-button": NitrozenButton,
    "nitrozen-dropdown": NitrozenDropdown,
    "nitrozen-inline": NitrozenInline
  },
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-pagination-" + NitrozenUuid()
    },
    /**
     * kind of pagination
     */
    name: {
      type: String
    },
    /**
     * page size dropdown options
     */
    pageSizeOptions: {
      type: Array,
      default: () => {
        return [10, 20, 50, 100];
      }
    },
    /**
     * pagination config value
     * @example `
     * {
     *     limit: Number,
     *     total: Number,
     *     current: Number
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
          current: 0
        };
      }
    }
  },
  data: () => {
    return {};
  },
  computed: {
    pages: function() {
      if (this.value.limit > 0) {
        return Math.ceil(this.value.total / this.value.limit);
      }
      return 0;
    },
    pageSizes() {
      const po = this.pageSizeOptions.map(p => {
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
    }
  },
  methods: {
    previous() {
      if (this.value.current === 1) return;
      this.value.current--;
      this.change();
    },
    next() {
      if (this.value.current >= this.pages) {
        this.value.current = this.pages;
        return;
      }
      if (this.pages === 0) {
        this.value.current = 0;
        return;
      }
      this.value.current++;
      this.change();
    },
    pageSizeChange(size) {
      this.value.current = 1;
      this.value.limit = size;
      this.change();
    },
    change() {
      this.$emit("input", this.value);
      this.$emit("change", this.value);
    }
  }
};
</script>
<style lang="less">
@import "./NPagination.less";
</style>