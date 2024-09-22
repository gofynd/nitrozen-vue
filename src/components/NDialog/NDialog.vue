<template>
  <div v-show="isModalVisible" :id="id">
    <transition name="nitrozen-dialog-fade">
      <div class="nitrozen-dialog-backdrop" @click="backdropClick">
        <dialog
          ref="dialog"
          class="nitrozen-dialog"
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
              <nitrozen-inline
                v-if="showCloseButton"
                title="close"
                @click="close('close')"
                icon="cross-large"
              ></nitrozen-inline>
            </slot>
          </header>
          <section class="nitrozen-dialog-body" :id="id + '_desc'">
            <slot name="body"></slot>
          </section>
          <footer class="nitrozen-dialog-footer">
            <slot name="footer">
              <nitrozen-button
                v-if="positiveButtonLabel"
                :theme="`${theme || 'secondary'}`"
                v-flatBtn
                class="nitrozen-dialog-footer-button-margin"
                @click="close(positiveButtonLabel)"
                >{{ positiveButtonLabel }}</nitrozen-button
              >
              <nitrozen-button
                v-if="neutralButtonLabel"
                :theme="`${theme || 'secondary'}`"
                class="nitrozen-dialog-footer-button-margin"
                @click="close(neutralButtonLabel)"
                >{{ neutralButtonLabel }}</nitrozen-button
              >
              <nitrozen-button
                v-if="negativeButtonLabel"
                :theme="`${theme || 'secondary'}`"
                v-strokeBtn
                @click="close(negativeButtonLabel)"
                >{{ negativeButtonLabel }}</nitrozen-button
              >
            </slot>
          </footer>
        </dialog>
      </div>
    </transition>
  </div>
</template>
<script>
import NitrozenUuid from "./../../utils/NUuid";
import NitrozenButton from "./../NBtn";
import NitrozenInline from "./../NInline";
import { flatBtn, strokeBtn } from "./../../directives/index";
export default {
  name: "nitrozen-dialog",
  components: {
    NitrozenButton,
    NitrozenInline,
  },
  directives: {
    flatBtn,
    strokeBtn,
  },
  props: {
    /**
     * Unique identifier
     */
    id: {
      type: [Number, String],
      default: () => "nitrozen-dialog-" + NitrozenUuid(),
    },
    /**
     * title of dialog
     */
    title: {
      type: String,
    },
    /**
     * theme of button
     */
    theme: {
      type: String,
    },
  },
  data: () => {
    return {
      data: null,
      dismissible: true,
      isModalVisible: false,
      negativeButtonLabel: false,
      neutralButtonLabel: "Ok",
      positiveButtonLabel: false,
      showCloseButton: false,
    };
  },
  methods: {
    open(config = {}) {
      // background scroll disabled on nitrozen dialog open
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";

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
      if (config.showCloseButton != undefined) {
        this.showCloseButton = config.showCloseButton;
      }
      if (config.data != undefined) {
        this.data = config.data;
      }
      this.$emit("open");
      return this;
    },
    close(data) {
      // background scroll enable on nitrozen dialog close
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);

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
      if (this.dismissible && dialog && !dialog.contains(e.target)) {
        this.close(null);
      }
    },
    handleESCKey: function(event) {
      // ESC key detection
      if (event.keyCode == 27 && this.dismissible && this.isOpen()) {
        event.preventDefault();
        event.stopPropagation();
        this.close("close");
      }
    },
  },
  created() {
    if (typeof document !== "undefined") {
      document.addEventListener("keydown", this.handleESCKey);
    }
  },
  destroyed() {
    document.removeEventListener("keydown", this.handleESCKey);
  },
};
</script>
<style lang="less">
@import "./NDialog.less";
</style>
