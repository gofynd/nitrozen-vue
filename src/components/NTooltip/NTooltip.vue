<template>
<div class="nitrozen-tooltip">
    <!-- <img src="./../../assets/nitrozen-tooltip.svg"> -->
    <nitrozen-inline :icon="'info'"></nitrozen-inline>
    <span class="nitrozen-tooltiptext" v-bind:class="tooltipPositionClass">{{tooltipText}}</span>
</div>
</template>

<script>
import NitrozenInline from './../NInline';

export default {
    name: 'nitrozen-nitrozen-tooltip',
    components: {
        'nitrozen-inline': NitrozenInline
    },
    props: {
        position: {
            type: String,
            default: 'bottom'
        },
        tooltipText: {
            type: String,
            default: ''
        }
    },
    computed: {
        tooltipPositionClass: function () {
            return {
                'nitrozen-tooltip-top': this.position == 'top',
                'nitrozen-tooltip-right': this.position == 'right',
                'nitrozen-tooltip-left': this.position == 'left',
                'nitrozen-tooltip-bottom': this.position == 'bottom'
            }
        }
    }
}
</script>

<style lang="less">
@import './../../base/base.less';

.nitrozen-tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;

    .nitrozen-tooltiptext {
        visibility: hidden;
        min-width: 150px;
        max-width: 300px;
        background-color: @LabelColor;
        color: @WhiteColor;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        font-family: @PrimaryFont;
        position: absolute;
        z-index: 1;
    }

    &:hover {
        .nitrozen-tooltiptext {
            visibility: visible;
        }
    }
}

/* Position the nitrozen-tooltip */
.nitrozen-tooltip-bottom {
    top: 100%;
    left: 50%;
    margin-left: -45px;
}

.nitrozen-tooltip-top {
    bottom: 100%;
    left: 50%;
    margin-left: -45px;
}

.nitrozen-tooltip-left {
    top: -5px;
    right: 105%;
}

.nitrozen-tooltip-right {
    top: -5px;
    left: 105%;
}
</style>
