<script>
import NButtonContent from './NBtnContent';

export default {
    name: 'nitrozen-button',
    components: {
        NButtonContent
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
        state:{
            type:String
        },
        flat: {
            type: Boolean,
            default: false
        },
        stroke: {
            type: Boolean,
            default: false
        }
    },
    render(createElement) {
        const slotElement = createElement('n-button-content', {
            props: {
                showProgress: this.showProgress,
                icon: this.icon,
                size:this.size,
                iconColor:this.iconColor,
                flat: this.flat,
                stroke: this.stroke,
            }
        }, this.$slots.default)

        let buttonAttrs = {
            staticClass: 'n-button ripple',
            class: [{
                'n-button-rounded': this.rounded,
                'n-button-primary': this.theme == 'primary',
                'n-button-secondary': this.theme == 'secondary',
                'n-button-destructive': this.theme == 'destructive',
                'n-button-large': this.size == 'large',
                'n-button-mid': this.size == 'medium',
                'n-button-small': this.size == 'small',
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
        return createElement(tag, buttonAttrs, [slotElement])
    }
}
</script>
<style lang="less">
@import './NBtn.less';
</style>
