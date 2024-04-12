<script>
import { h, directive } from 'vue';
import NButtonContent from './NBtnContent.vue';
import strokeBtn from './../../directives/NStrokeBtn.js';
import flatBtn from './../../directives/NFlatBtn.js';

export default {
    name: 'nitrozen-button',
    components: {
        NButtonContent
    },
    directives: {
        strokeBtn,
        flatBtn
    },
    props: {
        href: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'button'
        },
        disabled: Boolean,
        content: String,
        rounded: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            default: 'primary'
        },
        showProgress: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'medium'
        },
        focused: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String
        },
        iconColor: {
            type: String
        },
        state: {
            type: String
        }
    },
    setup(props, { slots, attrs }) {
        const slotElement = h('n-button-content', {
            showProgress: props.showProgress,
            icon: props.icon
        }, slots.default && slots.default());

        let buttonAttrs = {
            class: [
                'n-button',
                'ripple',
                {
                    'n-button-rounded': props.rounded,
                    'n-button-primary': props.theme == 'primary',
                    'n-button-secondary': props.theme == 'secondary',
                    'n-button-large': props.size == 'large',
                    'n-button-mid': props.size == 'medium',
                    'n-button-focused': props.focused
                }
            ],
            // attrs: {
            href: props.href,
            disabled: props.disabled,
            type: !props.href && (props.type || 'button'),
            // },
            on: attrs,
            theme: props.theme
        };

        let tag = 'button';
        if (props.href) {
            tag = 'a';
            // Properly assign buttonAttrs when setting the tag to 'a'
            buttonAttrs = {
                ...buttonAttrs,
                href: props.href
            };
        }

        return () => {
            return h(tag, buttonAttrs, slotElement);
        }
    }


};
</script>

<style lang="less">
@import './NBtn.less';
</style>
