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
                v-if="secondaryButtonLabel"
                :theme="'secondary'"
                class="nitrozen-dialog-footer-button-margin"
                @click="close(secondaryButtonLabel)"
                >{{ secondaryButtonLabel }}</nitrozen-button
              >
              <nitrozen-button
                v-if="primaryButtonLabel"
                @click="close(primaryButtonLabel)"
                :appearance="`${type === 'destructive' ? 'negative' : ''}`"
                >{{ primaryButtonLabel }}</nitrozen-button
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
import NitrozenButtonV2 from "./../NBtn2";
import NitrozenInline from "./../NInline";
export default {
  name: "nitrozen-dialog-v2",
  components: {
    'nitrozen-button':NitrozenButtonV2,
    NitrozenInline,
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
        * Type of dialog type = [destructive,dialog]*  of dialog
     */
    type: {
      type: String,
      default:'dialog'
    },
  },
  data: () => {
    return {
      data: null,
      dismissible: true,
      isModalVisible: false,
      primaryButtonLabel: false,
      secondaryButtonLabel: false,
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
      if (config.secondaryButtonLabel != undefined) {
        this.secondaryButtonLabel = config.secondaryButtonLabel;
      }
      if (config.primaryButtonLabel != undefined) {
        this.primaryButtonLabel = config.primaryButtonLabel;
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
@import "./NDialog2.less";
</style>
