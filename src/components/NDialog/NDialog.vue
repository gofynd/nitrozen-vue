<template>
  <div v-show="isModalVisible">
    <transition name="nitrozen-dialog-fade">
      <div class="nitrozen-dialog-backdrop" @click="backdropClick">
        <div
          ref="dialog"
          class="nitrozen-dialog"
          role="dialog"
          :aria-labelledby="id + '_title'"
          :aria-describedby="id + '_desc'"
        >
          <header
            class="nitrozen-dialog-header"
            v-show="title"
            :id="id + '_title'"
          >
            <slot name="header">
              {{ title }}
            </slot>
          </header>
          <section class="nitrozen-dialog-body" :id="id + '_desc'">
            <slot name="body"> </slot>
          </section>
          <footer class="nitrozen-dialog-footer">
            <slot name="footer">
              <nitrozen-button
                v-if="neutralButtonLabel"
                theme="secondary"
                @click="close(neutralButtonLabel)"
              >
                {{ neutralButtonLabel }}
              </nitrozen-button>
              <nitrozen-button
                v-if="negativeButtonLabel"
                @click="close(negativeButtonLabel)"
              >
                {{ negativeButtonLabel }}
              </nitrozen-button>
              <nitrozen-button
                v-if="positiveButtonLabel"
                @click="close(positiveButtonLabel)"
              >
                {{ positiveButtonLabel }}
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
      data: null,
      dismissible: true,
      isModalVisible: false,
      negativeButtonLabel: false,
      neutralButtonLabel: "Ok",
      positiveButtonLabel: false
    };
  },
  methods: {
    open(config = {}) {
      this.isModalVisible = true;
      if (config.height != undefined)
        this.$refs["dialog"].style.height = config.height;
      if (config.width != undefined)
        this.$refs["dialog"].style.width = config.width;
      if (config.positiveButtonLabel != undefined) {
        this.positiveButtonLabel = config.positiveButtonLabel;
      }
      if (config.negativeButtonLabel != undefined) {
        this.negativeButtonLabel = config.negativeButtonLabel;
      }
      if (config.neutralButtonLabel != undefined) {
        this.neutralButtonLabel = config.neutralButtonLabel;
      }
      if (config.dismissible != undefined) {
        this.dismissible = config.dismissible;
      }
      if (config.data != undefined) {
        this.data = config.data;
      }
      this.$emit("open");
      return this;
    },
    close(data) {
      this.isModalVisible = false;
      this.$emit("close", data);
      return this;
    },
    isOpen() {
      return this.isModalVisible;
    },
    backdropClick(e) {
      // close dialog on outside click
      const dialog = this.$refs["dialog"];
      if (this.dismissible && !dialog.contains(e.target)) {
        this.close(null);
      }
    }
  }
};
</script>
<style lang="less">
@import "./NDialog.less";
</style>