<template>
    <div class="nitrozen-stepper">

        <div class="nitrozen-stepper-container">
            <div v-for="(item,index) in elements" :key="index" class="stepper-group">
                <div class="flex-center">
                    <div @click="circleClicked(index)" v-if="index == active_index" class="nitrozen-circle-outer-container">
                        <div class="nitrozen-circle-outer"></div>
                        <div class="nitrozen-circle-inner"></div>
                    </div>
                    
                    <div @click="circleClicked(index)" v-if="index < active_index" class="nitrozen-cirle-check-container">
                        <div class="nitrozen-circle-outer"></div>
                        <div class="checkmark"></div>
                    </div>

                    <div @click="circleClicked(index)" v-if="index <= elements.length-1 && index > active_index" class="nitrozen-circle-outer-container">
                        <div class="nitrozen-circle-outer disabled"></div>
                        <div class="checkmark checkbox-hidden"></div>
                    </div>


                    <div v-if="index != elements.length-1 && index < active_index" class="nitrozen-bar active"></div>
                    <div v-if="index != elements.length-1 && index >= active_index" class="nitrozen-bar disabled"></div>

                    <div v-if="index == elements.length-1 && index < active_index" class="nitrozen-bar active hidden"></div>
                    <div v-if="index == elements.length-1 && index >= active_index" class="nitrozen-bar disabled hidden"></div>
                </div>
                <div class="text">{{ item.text }}</div>
            </div>
        </div>
<!--         
        <div class="nitrozen-cirle-check-container">
            <div class="nitrozen-circle-outer"></div>
            <div class="checkmark"></div>
        </div>

        <div class="nitrozen-circle-outer-container">
            <div class="nitrozen-circle-outer"></div>
            <div class="nitrozen-circle-inner"></div>

        </div>
        <div class="nitrozen-circle-outer"></div>

        <div class="nitrozen-bar-active"></div>
        <div class="nitrozen-circle-disabled"></div>
         -->
    </div>
</template>

<script>
export default {
    name: 'nitrozen-stepper',
    props: {
        active_index: {
            type: Number,
            default: 3
        },
        elements: {
            type: Array, // { text:"", img_url:"",class:"" }
            default: () => {
                return [
                    {
                        text : "Step 1"
                    },
                    {
                        text : "Step 2 Step 2 Step 2 Step 2 Step 2 Step 2 Step 2Step 2Step 2"
                    },
                    {
                        text : "Step 3"
                    },
                    {
                        text : "Step 4"
                    },
                    {
                        text : "Step 5"
                    }
                ];
            }
        }
    },
    methods:{
        circleClicked(e){
            console.log(e)
        }
    }
}
</script>

<style lang="less">
@import './../../base/base.less';
    .nitrozen-stepper{
        width: 100%;
    }
    .stepper-group{
        display:flex;
        flex-direction: column;
        flex-grow:10;
        flex-basis:100%;
    }
    .nitrozen-stepper-container{
        display:flex;
    }
    .checkmark{
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
    .active{
        background-color: @SecondaryColor;
    }
    .disabled{
        background-color: @StepperDisabledColor;
    }
    .checkbox-hidden{
        display: none;
    }
    .nitrozen-no-display{
        display: none;
    }
    .flex-center{
        display:flex;
        align-items: center;
    }
    .text{
        font-family: @PrimaryFont;
        color: @SecondaryColor;
        font-size: 16px;
        position:relative;
        left:calc(-45%);
        text-align: center;
    }
    .hidden{
        visibility: hidden;
    }
</style>
