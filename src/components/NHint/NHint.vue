<template><div>afsdfsfds</div></template>

<script>
import introJS from "intro.js";

export default {
  name: "nitrozen-hint",
  data() {
    return { intro: {} };
  },
  mounted() {
    this.intro = introJS();
    this.initializeSortHints();
  },
  props: {
    steps: Array,
    hintType: String,
    dontShowAgain: {
      type:Boolean,
      default:false
    },
  },
  methods: {
    initializeSortHints() {
        this.stepOptions = {
          showStepNumbers: false,
          showProgress: true,
          showBullets: false,
          nextLabel: "Next",
          prevLabel: "Previous",
          skipLabel: "X",
          exitOnOverlayClick: false,
          dontShowAgain: this.dontShowAgain,
          disableInteraction: true,
          buttonClass: "custom-button",
          scrollToElement: false,
          nextToDone: true,
          steps: this.steps,
        };
        this.intro.setOptions(this.stepOptions);
        this.intro.start();
      }
    },
  beforeDestroy() {
    this.intro.exit(true);
  },
};
</script>
<style scoped>
@import "./hints.css";

</style>