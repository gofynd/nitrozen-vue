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
        fullwidth: {
            type: String,
            default: ''
        },
        state: {
            type: String,
            default: 'normal'
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
        iconRight: {
            type: String
        },
        iconColor: {
            type: String
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
                iconRight: this.iconRight,
                size:this.size,
                iconColor:this.iconColor,
                //flat: this.flat,
                //stroke: this.stroke,
            }
        }, this.$slots.default)

        let buttonAttrs = {
            staticClass: 'n-button',
            class: [{
                'n-button-rounded': this.rounded,
                'n-button-primary': this.theme == 'primary',
                'n-button-secondary': this.theme == 'secondary',
                'n-button-tertiary': this.theme == 'tertiary',
                'n-button-normal': this.state == 'normal',
                'n-button-destructive': this.state == 'destructive',
                'n-button-positive': this.state == 'positive',
                'n-button-large': this.size == 'large',
                'n-button-mid': this.size == 'medium',
                'n-button-small': this.size == 'small',
                'n-button-focused': this.focused,
                'n-button-add': this.theme == 'add',
                'n-button-delete': this.theme == 'delete',
                'n-button-fullwidth': this.fullwidth == 'fullwidth'
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
