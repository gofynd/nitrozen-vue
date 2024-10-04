<script>
import NButtonContent from './../NBtn/NBtnContent';

export default {
    name: 'nitrozen-button-v2',
    components: {
        NButtonContent,
    },
    props: {
        href: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'button',
        },
        disabled: Boolean,
        content: String,
        rounded: {
            type: Boolean,
            default: false,
        },
        theme: {
            type: String,
            default: 'primary',
        },
        showProgress: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: 'medium',
        },
        focused: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
        },
        appearance: {
            type: String,
            default: 'default',
        },
    },
    render(createElement) {
        const slotElement = createElement(
            'n-button-content',
            {
                props: {
                    showProgress: this.showProgress,
                    icon: this.icon,
                },
            },
            this.$slots.default
        );

        let buttonAttrs = {
            staticClass: 'n-button-v2 ripple',
            class: [
                {
                    'n-button-v2-secondary': this.theme == 'secondary',
                    'n-button-v2-extra-small': this.size == 'extra-small',
                    'n-button-v2-small': this.size == 'small',
                    'n-button-v2-large': this.size == 'large',
                    'n-button-v2-extra-large': this.size == 'extra-large',
                    'n-button-v2-rounded': this.rounded,
                    'n-button-v2-focused': this.focused,
                    'n-button-v2-positive': this.appearance === 'positive',
                    'n-button-v2-negative': this.appearance === 'negative',
                    'n-button-v2-warning': this.appearance === 'warning',
                },
            ],
            attrs: {
                href: this.href,
                disabled: this.disabled,
                type: !this.href && (this.type || 'button'),
            },
            on: {
                ...this.$listeners,
            },
        };
        let tag = 'button';
        if (this.href) {
            tag = 'a';
            buttonAttrs;
        }
        return createElement(tag, buttonAttrs, [slotElement]);
    },
};
</script>

<style lang="less">
@import './NBtn.less';
</style>
