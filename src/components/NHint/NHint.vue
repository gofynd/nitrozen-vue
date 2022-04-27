<template></template>

<script>
import introJS from "intro.js";

export default {
  name: "nitrozen-hints",
  data() {
    return { intro: {} };
  },
  mounted() {
    this.intro = introJS();
    this.initializeSortHints();
  },
  props: {
    steps: Array,
    hintType: String
  },
  methods: {
    initializeSortHints() {
      console.log("hhhhh")
      const hadTour = localStorage.getItem("hadTour");
      if (!hadTour) {
        this.stepOptions = {
          showStepNumbers: false,
          showProgress: true,
          showBullets: false,
          nextLabel: "Next",
          prevLabel: "Previous",
          skipLabel: "X",
          exitOnOverlayClick: false,
          disableInteraction: true,
          buttonClass: "custom-button",
          scrollToElement: false,
          nextToDone: false,
          steps: this.steps,
        };
        this.intro.setOptions(this.stepOptions);
        this.intro.oncomplete(()=>{
          if(this.isFinalHint()){
            this.$emit("isFinalHint");
          }
        }).start();
      }
    },
    isFinalHint(){
      let hints = this.steps
      console.log({hints})
        if(hints.at(-1).finalHint){
          return true;
        }
      
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