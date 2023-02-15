<template>
    <transition name="nitrozen-alert">
        <div 
            class="n-alert"
            :class="[
                classes.container, 
                classNames,
                fullWidth && 'n-alert-full-width',
                buttonType === 'link' && 'n-alert-link-button-container',
                loader && 'n-alert-loader-container'
            ]"
            :style="{
                width: componentWidth,
                height: extendedAlert ? 'auto' : '48px'
            }">
            <div class="n-alert-content" :class="extendedAlert && 'n-alert-extended'">
                <div class="n-alert-icon-text-wrapper">
                    <img src="./../../assets/loader.gif" v-if="loader" class="n-alert-loader" />
                    <nitrozen-icon 
                        v-else
                        :color="iconColor" 
                        :name="alertIcon" 
                        :size="26.67" />
                    <div className="n-alert-label-text" v-if="labelText">{{labelText}}</div>
                    <slot></slot>
                </div>

                <div class="n-alert-button-container" v-if="displayButton && !loader">
                    <button 
                        v-if="buttonType === 'default' || buttonType === 'button'"
                        class="n-alert-button"
                        :class="[classes.button]"
                        @click="onButtonClick"
                    >
                        {{ buttonText }}
                    </button>
                    <a
                        v-else-if="buttonType === 'link'"
                        class="n-alert-link"
                        :class="[classes.buttonLabel]"
                        @click="onButtonClick"
                        :href="href"
                    >
                        {{ linkText || buttonText || "Click" }}
                    </a>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
/* Variables and constants imports */
import * as STATES from './states';
import {  
    ICON_COLORS, ICON_NAMES
} from './constants';

/* Component imports */
import NIcon from './../NIcon/NIcon.vue';

export default {
    name: 'nitrozen-alert',
    components: {
        'nitrozen-icon': NIcon
    },
    props: {
        alertWidth: {
            type: String,
            default: ''
        },
        buttonText: {
            type: String,
            default: ''
        },
        buttonType: {
            type: String,
            default: 'default',
            validator: function(value) {
                return ['button', 'default', 'link'].includes(value);
            }
        },
        classNames: {
            type: String,
            default: ''
        },
        displayButton: {
            type: Boolean,
            default: false
        },
        extendedAlert: {
            type: Boolean,
            default: false
        },
        fullWidth: {
            type: Boolean,
            default: true
        },
        href: {
            type: String,
            default: ''
        },
        labelText: {
            type: String,
            default: ''
        },
        linkText: {
            type: String,
            default: ''
        },
        loader: {
            type: Boolean,
            default: false
        },
        state: {
            type: String,
            default: STATES.INFO,
            validator: function(value) {
                return [STATES.ERROR, STATES.INFO, STATES.SUCCESS, STATES.WARN].includes(value);
            }
        }
    },
    computed: {
        classes() {
            return this.setClasses(this.state);
        },
        componentWidth() {
            if(this.alertWidth !== undefined) {
                return this.alertWidth;
            } else if(!this.alertWidth && this.fullWidth) {
                return '100%';
            } else if(!this.alertWidth && !this.fullWidth) {
                return 'fit-content';
            } else {
                return 'fit-content';
            }
        },
        alertIcon() {
            return this.setIcon(this.state);
        },
        iconColor() {
            return ICON_COLORS[this.state];
        }
    },
    methods: {
        /**
         * Method to handle click of the button.
         * The function will simply emit the native event with the
         * key name 'click'.
         * 
         * @author Rushabh Mulraj Shah
         * @since 0.0.42
         * @param {Object} event The native event fired by the browser.
         */
        onButtonClick(event) {
            this.$emit('click', event);
        },

        /**
         * Method to set the classnames based on the state provided in the props
         * 
         * @author Rushabh Mulraj Shah
         * @since 0.0.42
         * @param {string} state The state property received as a prop
         */
        setClasses(state) {        
            switch(state) {
                case 'error':
                    return {
                        button: 'n-alert-button-error',
                        buttonLabel: 'n-alert-button-link-error',
                        container: 'n-alert-error',
                        icon: 'n-alert-icon-error'
                    }
                case 'info':
                    return {
                        button: '',
                        buttonLabel: 'n-alert-button-link-info',
                        container: 'n-alert-info',
                        icon: 'n-alert-icon-info'
                    }
                case 'success':
                    return {
                        button: 'n-alert-button-success',
                        buttonLabel: 'n-alert-button-link-success',
                        container: 'n-alert-success',
                        icon: 'n-alert-icon-success'
                    }
                case 'warn':
                    return {
                        button: 'n-alert-button-warn',
                        buttonLabel: 'n-alert-button-link-warn',
                        container: 'n-alert-warn',
                        icon: 'n-alert-icon-warn'
                    }
                default:
                    return {
                        button: '',
                        buttonLabel: 'n-alert-button-link-info',
                        container: 'n-alert-info',
                        icon: 'n-alert-icon-info'
                    }
            }
        },

        /**
         * Method to set the icons to be displayed in an alert based on the state provided in the props
         * 
         * @author Rushabh Mulraj Shah
         * @since 0.0.42
         * @param {string} state The state property received as a prop
         */
        setIcon(state) {
            if(state !== undefined) {
                let selectedState = ICON_NAMES[state];
                return selectedState !== undefined ? selectedState : ICON_NAMES[STATES.INFO]; 
            } else {
                return ICON_NAMES[STATES.INFO];
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "./../../base/base.less";

.n-alert {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.8rem;
    cursor: default;
    border-radius: 1.6rem;
    border: 0.1rem solid @LabelColor;
    color: @TypographyPrimaryColor;
    font-size: @BaseFontSize + 2;
    font-family: @PrimaryFont;

    &:focus {
        outline: none;
    }

    &.n-alert-full-width {
        width: 100%;

        .n-alert-label-text,
        .n-alert-text {
            font-size: @BaseFontSize + 6;
        }
    }

    &.n-alert-link-button-container {
        .n-alert-label-text,
        .n-alert-text {
            font-size: @BaseFontSize + 4;
        }
    }

    &.n-alert-info {
        background: @ColorPrimary20;
        border: 0.1rem solid @ColorPrimary50;

        .n-alert-button {
            background: @ColorPrimary50;
        }
    }

    &.n-alert-success {
        background: @Bubbles;
        border: 0.1rem solid @SuccessColor;
    }

    &.n-alert-warn {
        background: @ColorFeedbackWarning20;
        border: 0.1rem solid @ColorFeedbackWarning50;
    }

    &.n-alert-error {
        background: @ColorFeedbackError20;
        border: 0.1rem solid @ColorFeedbackError50;
    }

    &.n-alert-loader-container {
        background: @ColorPrimary20 !important;
        border: 0.1rem solid @ColorPrimary50;
    }

    .n-alert-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        column-gap: 8rem;
        width: 100%;
        align-items: center;

        &.n-alert-extended {
            flex-direction: column;
            align-items: unset;
            justify-content: center;
            row-gap: 1.2rem;

            .n-alert-button-container {
                display: flex;
                justify-content: flex-end;
            }
        }
    }

    .n-alert-icon-text-wrapper {
        display: flex;
        align-items: center;
        column-gap: 0.4rem;
    }

    .n-alert-loader {
        height: 2.4rem;
    }

    .n-alert-button-container {
        .n-alert-button {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 25rem;
            padding: 0.4rem 1.2rem;
            color: @WhiteColor;
            font-weight: 700;
            border: none;
            cursor: pointer;

            &:disabled {
                cursor: not-allowed;
                pointer-events: none;
            }

            &.n-alert-button-success {
                background-color: @SuccessColor;
            }

            &.n-alert-button-warn {
                background-color: @ColorFeedbackWarning50;
            }

            &.n-alert-button-error {
                background-color: @ColorFeedbackError50;
            }
        }

        .n-alert-link {
            cursor: pointer;
            font-weight: 700;
            text-decoration: none;

            &.n-alert-button-link-info {
                color: @ColorPrimary50;
            }

            &.n-alert-button-link-success {
                color: @SeaGreen;
            }

            &.n-alert-button-link-warn {
                color: @WarningColor;
            }

            &.n-alert-button-link-error {
                color: @ErrorColor;
            }
        }
    }
}
</style>
