<template>
    <transition name="nitrozen-alert">
        <div class="n-alert">
            Sample alert
        </div>
    </transition>
</template>

<script>
/* Variables and constants imports */
import * as STATES from './states';

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
    }
}
</script>

<style lang="less" scoped>

</style>
