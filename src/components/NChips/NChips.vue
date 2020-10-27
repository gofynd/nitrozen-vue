<template>
<transition name="nitrozen-chip">
    <div :ref="chipId" @click="setBackground" class="nitrozen-chip ripple" :class="[chipClasses]" tabindex="0" v-on="$listeners">
        <slot class="nitrozen-icon" />

        <transition name="nitrozen-input-action">
            <span :ref="iconId" class="nitrozen-icon" v-on:click="spliceElement(chipId)" v-if="!disable && deletable">
                <nitrozen-inline :icon="'cross'"></nitrozen-inline>
            </span>
            <span :ref="iconId" class="nitrozen-icon" v-if="!disable && inProgress">
                <nitrozen-tooltip :tooltipText="'Info Text'"></nitrozen-tooltip>
            </span>
        </transition>
    </div>
</transition>
</template>

<script>
import NitrozenInline from './../NInline/index';
import NitrozenUuid from './../../utils/NUuid';
import NitrozenTooltip from './../NTooltip/index';

export default {
    name: 'nitrozen-chips',
    components: {
        'nitrozen-inline':NitrozenInline,
        'nitrozen-tooltip':NitrozenTooltip
    },
    props: {
        disable: {
            type: Boolean,
            default: false
        },
        deletable: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            default: 'primary'
        },
        inProgress: {
            type: Boolean,
            default: false
        },
        error: {
            type: Boolean,
            default: false
        },
        iconId: {
            type: [Number, String],
            default: () => 'nitrozen-icon' + NitrozenUuid()
        },
        chipId: {
            type: [Number, String],
            default: () => 'nitrozen-chip' + NitrozenUuid()
        },
        multiSelect: {
            type: Boolean,
            default: false
        },
        state: {
            type: String,
            default: 'none'
        }
    },
    computed: {
        chipClasses() {
            return {
                'nitrozen-disabled': this.disable,
                'nitrozen-inprogress': this.inProgress,
                'nitrozen-error': this.error,
                'nitrozen-chip-error': this.state == 'error',
                'nitrozen-chip-success': this.state == 'success',
                'nitrozen-chip-progress': this.state == 'progress',
                'nitrozen-chip-selected': this.state == 'selected'
            }
        }
    },
    methods: {
        spliceElement: function (id) {
            this.$refs[id].parentElement.style.display = "none";
            this.$emit("remove");
        },
        setBackground: function(){
            if(this.multiSelect){
                let flag = this.$refs[this.chipId].classList.contains('nitrozen-primary-active-chip') || this.$refs[this.chipId].classList.contains('nitrozen-secondary-active-chip')            
                if(!flag){
                    if(this.theme == 'primary'){
                        this.$refs[this.chipId].classList.add('nitrozen-primary-active-chip'); 
                    }
                    else{
                        this.$refs[this.chipId].classList.add('nitrozen-secondary-active-chip');                        
                    }
                }
                else{
                    this.$refs[this.chipId].classList.remove('nitrozen-primary-active-chip');                    
                    this.$refs[this.chipId].classList.remove('nitrozen-secondary-active-chip');                    
                }
            }
        }
    }
}
</script>

<style lang="less">
@import './../../base/base.less';

.nitrozen-chip {
    height: 39px;
    padding: 0 12px;
    margin: 0 8px 0 0;
    display: inline-block;
    cursor: default;
    border-radius: 39px;
    border: 1px solid @ChipBorderColor;
    color: @TypographyPrimaryColor;
    // transition: .3s $md-transition-stand-timing;
    // transition-property: background-color, color, opacity, transform, box-shadow;
    // will-change: background-color, color, opacity, transform, box-shadow;
    font-size: @BaseFontSize + 2;
    line-height: 39px;
    vertical-align: middle;
    white-space: nowrap;
    font-family: @PrimaryFont;
    cursor: pointer;
    box-sizing: border-box;
    &:focus {
        outline: none;
        //   text-decoration: underline;
    }

    &:hover {
        box-shadow: 0 0 16px @BoxShadow;
        background: @HoverColor;
    }

    &.nitrozen-chip-enter-active,
    &.nitrozen-chip-leave-active {
        opacity: 0;
        transform: transformZ(0) scale(.8);
    }

    &.nitrozen-chip-enter-to {
        opacity: 1;
        transform: transformZ(0) scale(1);
    }
    &.nitrozen-disabled {
        cursor: default;
        opacity: 0.4;
        pointer-events: none;
    }

    &.nitrozen-inprogress {
        border: 1px dashed @ProcessingColor;
    }
    &.nitrozen-error{
        border: 1px solid @ErrorColor;
    }
    &.nitrozen-primary-active-chip{
        background: @PrimaryColor;
        color: @WhiteColor;
        border-color: @PrimaryColor;
    }
    &.nitrozen-secondary-active-chip{
        background: @SecondaryColor;
        color: @WhiteColor;
        border-color: @SecondaryColor;
    }
    &.nitrozen-chip-error{
        background: @ErrorColor;
        color: @WhiteColor;
        border: 1px solid @ErrorColor;
    }
    &.nitrozen-chip-success{
        background: @SuccessColor;
        color: @WhiteColor;
        border-color: @SuccessColor;
    }
    &.nitrozen-chip-progress{
        background: @ProgressColor;
        color: @WhiteColor;
        border-color: @ProgressColor;
    }
    &.nitrozen-chip-selected{
        background: @SecondaryColor;
        color: @WhiteColor;
        border-color: @SecondaryColor;
    }
    .nitrozen-icon {
        padding-left: 12px;
    }
}
</style>
