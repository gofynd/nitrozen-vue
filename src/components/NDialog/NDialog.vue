<template>
  <div v-show="isModalVisible">
    <transition name="nitrozen-dialog-fade">
      <div class="nitrozen-dialog-backdrop">
        <div
          ref="dialog"
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
              <nitrozen-button type="button" @click="close('')">
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
    open(config = {}) {
      this.isModalVisible = true;
      if (config.height)
        this.$refs["dialog"].style.height = `${config.height}px`;
      if (config.width) this.$refs["dialog"].style.width = `${config.width}px`;
      this.$emit("open");
      return this;
    },
    close(data) {
      this.isModalVisible = false;
      this.$emit("close", data);
      return this;
    }
  }
};
</script>
<style lang="less">
@import "./NDialog.less";
</style>