<template>
    <div class="nitrozen-stepper" :id="id">
        <div class="nitrozen-stepper-container">
            <div v-for="(item,index) in elements" :key="index" class="nitrozen-stepper-group">
                <div class="nitrozen-flex-center">
                    <!-- current one -->
                    <div @click="stepperClicked(index)" v-if="index == data.activeIndex" class="nitrozen-circle-outer-container nitrozen-pointer">
                        <div class="nitrozen-circle-outer"></div>
                        <div class="nitrozen-circle-inner"></div>
                    </div>
                    
                    <!-- checked -->
                    <div @click="stepperClicked(index)" v-if="index != data.activeIndex && index <= data.maxActiveIndex" class="nitrozen-cirle-check-container nitrozen-pointer">
                        <div class="nitrozen-circle-outer"></div>
                        <div class="nitrozen-checkmark"></div>
                    </div>

                    <!-- disabled -->
                    <div @click="stepperClicked(index)" v-if="index <= elements.length-1 && index > data.maxActiveIndex" class="nitrozen-circle-outer-container">
                        <div class="nitrozen-circle-outer nitrozen-disabled"></div>
                        <div class="nitrozen-checkmark nitrozen-checkbox-hidden"></div>
                    </div>


                    <div v-if="index != elements.length-1 && index < data.maxActiveIndex" class="nitrozen-bar nitrozen-active"></div>
                    <div v-if="index != elements.length-1 && index > data.maxActiveIndex-1" class="nitrozen-bar nitrozen-disabled"></div>

                </div>
                <div v-if="!(index == data.activeIndex || index <= data.maxActiveIndex)" class="nitrozen-text nitrozen-text-disabled">{{ item.text }}</div>
                <div v-if="index == data.activeIndex || index <= data.maxActiveIndex" class="nitrozen-text">{{ item.text }}</div>

            </div>
        </div>
    </div>
</template>

<script>
import NitrozenUuid from './../../utils/NUuid';

export default {
    name: 'nitrozen-stepper',
    watch: {
        activeIndex(index){
            if((index <= this.maxActiveIndex)){
                this.data.activeIndex = index
            }
        },
        maxActiveIndex(maxIndex){
            if(this.activeIndex <= maxIndex){
                this.data.maxActiveIndex = maxIndex
            }
        }
    },
    data(){
        return {
            data : {
                activeIndex: this.activeIndex,
                maxActiveIndex: this.maxActiveIndex 
            }
        }
    },
    mounted(){

    },
    props: {
        activeIndex: {
            type: Number
        },
        maxActiveIndex:{
            type: Number
        },
        elements: {
            type: Array, // { text:""}
            default: () => {
                return [
                    {
                        text : "Step 1",
                    },
                    {
                        text : "Step 2",
                    },
                    {
                        text : "Step 3",
                    },
                    {
                        text : "Step 4",
                    },
                    {
                        text : "Step 5",
                    }
                ];
            }
        },
        id: {
            type: [Number, String],
            default: () => "nitrozen-stepper" + NitrozenUuid()
        }
    },
    methods:{
        stepperClicked(nextIndex){
            this.$emit("stepperClicked",{
                previousIndex:this.activeIndex,
                nextIndex:nextIndex
            })
            // this.data.activeIndex = nextIndex
        }
    }
}
</script>

<style lang="less">
@import './../../base/base.less';
    .nitrozen-stepper{
        width: 100%;
    }
    .nitrozen-stepper-group{
        display:flex;
        flex-direction: column;
        flex-grow:10;
        flex-basis:100%;
    }
    .nitrozen-stepper-group:last-child{
        flex-basis: auto;
        .nitrozen-text:last-child{
            left: calc(-50% + 12px);
            width: max-content;
        }
    }
    .nitrozen-pointer{
        cursor:pointer;
    }
    .nitrozen-stepper-container{
        display:flex;
    }
    .nitrozen-checkmark{
        display: inline-block;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        height: 11px;
        width: 3px;
        border-bottom: 2px solid @StepperCheckBoxColor;
        border-right: 2px solid @StepperCheckBoxColor;
        position: absolute;
        left: 10px;
        top: 4px;
    }
    .nitrozen-cirle-check-container{
        position:relative;
    }
    
    .nitrozen-circle-outer-container{
        position:relative;
    }
    .nitrozen-circle-inner{
        height: 11px;
        width: 11px;
        background-color: white;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left: 7px;
        top: 7px;
    }
    .nitrozen-circle-outer{
        height: 24px;
        width: 24px;
        background-color: @SecondaryColor;
        border-radius: 50%;
        display: inline-block;
    }
    .nitrozen-bar{
        flex-grow:1;
        height:5px;
        position:relative;
        top: -2px;
    }
    .nitrozen-active{
        background-color: @SecondaryColor;
    }
    .nitrozen-disabled{
        background-color: @StepperDisabledColor;
    }
    .nitrozen-checkbox-hidden{
        display: none;
    }
    .nitrozen-no-display{
        display: none;
    }
    .nitrozen-flex-center{
        display:flex;
        align-items: center;
    }
    .nitrozen-text{
        font-family: @PrimaryFont;
        color: @SecondaryColor;
        font-size: 16px;
        position:relative;
        left: calc(-50% + 12px);
        text-align: center;
        font-weight: 500;
    }
    .nitrozen-text-disabled{
        color: @TypographyPrimaryColor;
    }
    
    .nitrozen-hidden{
        display:none;
    }
</style>
