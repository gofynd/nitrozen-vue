<template>
  
</template>

<script>
import introJS from "intro.js";

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
      default:false
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
        this.stepOptions = {
          showStepNumbers: this.showStepNumbers,
          showProgress: this.showProgress,
          showBullets: this.showBullets,
          nextLabel: this.nextLabel,
          prevLabel: this.prevLabel,
          skipLabel: this.skipLabel,
          doneLabel: this.doneToNext? "Next":"Done",
          exitOnOverlayClick: this.exitOnOverlayClick,
          dontShowAgain: this.dontShowAgain,
          disableInteraction: this.disableInteraction,
          buttonClass: "custom-button",
          scrollToElement: this.scrollToElement,
          nextToDone: this.nextToDone,
          steps: this.steps,
        };
        this.intro.setOptions(this.stepOptions);
        this.intro.onexit(()=>{this.makeHintInactive();})
        this.intro.oncomplete(()=>{
          this.dontShowAginCheckbox();
          this.makeHintInactive();
        }).start();
      },
      dontShowAginCheckbox(){
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
      makeHintInactive(){
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