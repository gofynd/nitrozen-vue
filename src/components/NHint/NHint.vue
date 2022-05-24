<template>
  
</template>

<script>
import introJS from "intro.js";
import pick from "lodash/pick";
export default {
  name: "nitrozen-hint",
  data() {
    return { intro: {} };
  },
  mounted() {
    this.intro = introJS();
    if(this.isHintActive){
      this.initializeSortHints();
    }
  },
  props: {
    steps: {
      type:Array,
      default:[],
    },
    hintType: {
      type:String,
      default:"introJs-hint",
    },
    dontShowAgain: {
      type:Boolean,
      default:true,
    },
    doneToNext: {
      type:Boolean,
      default:false,
    },
    showStepNumbers:{
      type:Boolean,
      default:false,
    },
    showProgress:{
      type:Boolean,
      default:true,
    },
    showBullets:{
      type:Boolean,
      default:false,
    },
    disableInteraction:{
      type:Boolean,
      default:false,
    },
    exitOnOverlayClick:{
      type:Boolean,
      default:false,
    },
    scrollToElement:{
      type:Boolean,
      default:false,
    },
    nextLabel:{
      type: String,
      default:"Next",
    },
    prevLabel:{
      type:String,
      default:"Previous",
    },
    skipLabel:{
      type:String,
      default:"x",
    },
    nextToDone:{
      type:Boolean,
      default:true,
    },
    isHintActive:{
      type:Boolean,
      default:true,
    }
  },
  methods: {
    initializeSortHints() {
        let stepOptions = pick(this.$props,
        [
        "showStepNumbers",
        "showProgress",
        "showBullets",
        "nextLabel",
        "prevLabel",
        "exitOnOverlayClick",
        "dontShowAgain",
        "disableInteraction",
        "nextToDone",
        "scrollToElement",
        "steps"
        ]);
        stepOptions["doneLabel"] = this.doneToNext? "Next":"Done";
        stepOptions["buttonClass"] = "custom-button";
        this.intro.setOptions(stepOptions);
        this.intro.onexit(()=>{this.inactiveHint();})
        this.intro.oncomplete(()=>{
          this.hideCheckbox();
          this.inactiveHint();
        }).start();
        console.log("disableInteraction ", this.disableInteraction)
      },
      hideCheckbox(){
        if(document.querySelector('input#introjs-dontShowAgain'))
        {
          let value = document.querySelector('input#introjs-dontShowAgain').checked;
          if(value)
          {
          localStorage.setItem(this.hintType, "shown")
          }
          document.cookie = "introjs-dontShowAgain" + '=; Path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;';  
          console.log("dont show again", document.cookie);
        }  
      },
      inactiveHint(){
        this.$emit("hintInactive");
      }
    },
  beforeDestroy() {
    this.intro.exit(true);
  },
};
</script>
<style scoped>
@import "./hints.less";

</style>