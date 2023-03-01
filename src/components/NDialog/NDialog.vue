<template>
  <div  :id="id">
    <transition name="nitrozen-dialog-fade">
      <div class="nitrozen-dialog-backdrop" @click="backdropClick">
        <!-- :class="{ 'nitrozen-wrapper-width-s': size === 's' }" -->
        <!-- :class="{ 'nitrozen-dialog-size': size = 's' ? 'nitrozen-wrapper-width-s' : 'nitrozen-wrapper-width-m'}" -->
        <div
        ref="dialog"     
          class="nitrozen-dialog"
          :class="{ 'nitrozen-wrapper-width-s': size === 's' }"
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
             <span class="nitrozen-title"> {{ title }} </span> 
              <nitrozen-icon v-if="showCloseButton" 
              class="nitrozen-closebtn"
              name="close" 
              color="#000093"
              @click="close('close')"
            />
            </slot>
          </header>
          <section class="nitrozen-dialog-body" :id="id + '_desc'">
            <slot name="body"></slot>
          </section>
          <footer class="nitrozen-dialog-footer">
            <slot name="footer">
              <nitrozen-button
                v-if="kind === 'dialog' || kind === 'acknowledgement'"
                :theme="`${theme || 'secondary'}`"
                strokeBtn
                rounded = true
                class="nitrozen-dialog-footer-button-margin"
                @click="close(neutralButtonLabel)"
                >{{ neutralButtonLabel }}</nitrozen-button
              >
              <nitrozen-button
                v-if = "kind === 'dialog'"
                :theme="`${theme || 'secondary'}`"
                v-flatBtn
                rounded = true
                class="nitrozen-dialog-footer-button-margin"
                @click="close(positiveButtonLabel)"
                >{{ positiveButtonLabel }}</nitrozen-button
              >
            </slot>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import NitrozenUuid from "./../../utils/NUuid";
import NitrozenButton from "./../NBtn";
import NitrozenInline from "./../NInline";
import NIcon from '../NIcon'
import { flatBtn, strokeBtn } from "./../../directives/index";
export default {
  name: "nitrozen-dialog",
  components: {
    NitrozenButton,
    NitrozenInline,
    'nitrozen-icon': NIcon
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
    kind: {
      type: String,
      default: 'dialog',
      validator(value){
        return ["dialog" , "acknowledgement" , "informational"].includes(value)
      }
    },
    size: {
      type: String,
      default: 'm',
      validator(value){
        return ['s', 'm'].includes(value)
      }
    },
  },
  data: () => {
    return {
      data: null,
      dismissible: true,
      isModalVisible: false,
      negativeButtonLabel: false,
      neutralButtonLabel: "ok",
      positiveButtonLabel: "cancel",
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
