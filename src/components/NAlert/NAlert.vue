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
            ]">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
/* Variables and constants imports */
import * as STATES from './states';

const iconTypes = {
    [STATES.ERROR]: 'alert-error',
    [STATES.INFO]: 'alert-info',
    [STATES.SUCCESS]: 'alert-success',
    [STATES.WARN]: 'alert-warn'
};

export default {
    name: 'nitrozen-alert',
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
            default: false
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
    data() {
        return {
            alertIcon: iconTypes[STATES.INFO],
            classes: {
                button: '',
                buttonLabel: '',
                container: '',
                icon: ''
            },
            componentWidth: 'fit-content',
        }
    },
    mounted() {
        this.setClasses();
        this.setIcon();
    },
    methods: {
        /**
         * Method to set the classnames based on the state provided in the props
         * 
         * @author Rushabh Mulraj Shah
         * @since 0.0.42
         */
        setClasses() {
            switch(this.state) {
                case 'error':
                    this.classes.button = 'n-alert-button-error';
                    this.classes.buttonLabel = 'n-alert-button-link-error';
                    this.classes.container = 'n-alert-error';
                    this.classes.icon = 'n-alert-icon-error';
                    break;
                case 'info':
                    this.classes.button = '';
                    this.classes.buttonLabel = 'n-alert-button-link-info';
                    this.classes.container = 'n-alert-info';
                    this.classes.icon = 'n-alert-icon-info';
                    break;
                case 'success':
                    this.classes.button = 'n-alert-button-success';
                    this.classes.buttonLabel = 'n-alert-button-link-success';
                    this.classes.container = 'n-alert-success';
                    this.classes.icon = 'n-alert-icon-success';
                    break;
                case 'warn':
                    this.classes.button = 'n-alert-button-warn';
                    this.classes.buttonLabel = 'n-alert-button-link-warn';
                    this.classes.container = 'n-alert-warn';
                    this.classes.icon = 'n-alert-icon-warn';
                    break;
                default:
                    this.classes.button = '';
                    this.classes.buttonLabel = 'n-alert-button-link-info';
                    this.classes.container = 'n-alert-info';
                    this.classes.icon = 'n-alert-icon-info';
                    break;
            }
        },

        /**
         * Method to set the icons to be displayed in an alert based on the state provided in the props
         * 
         * @author Rushabh Mulraj Shah
         * @since 0.0.42
         */
        setIcon() {
            if(this.state !== undefined) {
                this.alertIcon = iconTypes[this.state]; 
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
}
</style>
