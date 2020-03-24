<template>
  <div v-if="isModalVisible">
    <transition name="nitrozen-dialog-fade">
      <div class="nitrozen-dialog-backdrop">
        <div
          class="nitrozen-dialog"
          role="dialog"
          :aria-labelledby="id + '_title'"
          :aria-describedby="id + '_desc'"
        >
          <header class="nitrozen-dialog-header" :id="id + '_title'">
            <slot name="header">
              {{ title }}
            </slot>
          </header>
          <section class="nitrozen-dialog-body" :id="id + '_desc'">
            <slot name="body"> </slot>
          </section>
          <footer class="nitrozen-dialog-footer">
            <slot name="footer">
              <nitrozen-button type="button" @click="close">
                Ok
              </nitrozen-button>
            </slot>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import NitrozenUuid from "./../../utils/NUuid";
export default {
  name: "nitrozen-dialog",
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-dialog-" + NitrozenUuid()
    },
    /**
     * title of dialog
     */
    title: {
      type: String
    }
  },
  data: () => {
    return {
      isModalVisible: false
    };
  },
  computed: {},
  methods: {
    open() {
      this.isModalVisible = true;
      this.$emit("open");
    },
    close() {
      this.isModalVisible = false;
      this.$emit("close");
    }
  }
};
</script>
<style lang="less">
@import "./NDialog.less";
</style>