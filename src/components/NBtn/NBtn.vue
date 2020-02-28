<script>
import NButtonContent from './NBtnContent';
import strokeBtn from './../../directives/NStrokeBtn.js'
import flatBtn from './../../directives/NFlatBtn.js'

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
        large: {
            type: Boolean,
            default: false
        },
        focused: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String
        }
    },
    render(createElement) {
        const slotElement = createElement('n-button-content', {
            props: {
                showProgress: this.showProgress,
                icon: this.icon
            }
        }, this.$slots.default)

        let buttonAttrs = {
            staticClass: 'n-button ripple',
            class: [{
                'n-button-rounded': this.rounded,
                'n-button-primary': this.theme == 'primary',
                'n-button-secondary': this.theme == 'secondary',
                'n-button-large': this.large,
                'n-button-focused': this.focused
            }],
            attrs: {
                href: this.href,
                disabled: this.disabled,
                type: !this.href && (this.type || 'button')
            },
            on: {
                ...this.$listeners,
            }
        }
        let tag = 'button';
        if (this.href) {
            tag = 'a';
            buttonAttrs
        }
        // const slotElement = this.content;
        // const slotElement = createElement('slot');
        return createElement(tag, buttonAttrs, [slotElement])
    }
}
</script>

<style lang="less">
@import './NBtn.less';
</style>
