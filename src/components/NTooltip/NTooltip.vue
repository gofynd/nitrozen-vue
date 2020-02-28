<template>
<div class="tooltip">
    <!-- <img src="./../../assets/tooltip.svg"> -->
    <nitrozen-inline :icon="'info'"></nitrozen-inline>
    <span class="tooltiptext" v-bind:class="tooltipPositionClass">{{tooltipText}}</span>
</div>
</template>

<script>
import NitrozenInline from './../NInline';

export default {
    name: 'nitrozen-tooltip',
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
                'top': this.position == 'top',
                'right': this.position == 'right',
                'left': this.position == 'left',
                'bottom': this.position == 'bottom'
            }
        }
    }
}
</script>

<style lang="less">
@import './../../base/base.less';

.tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;

    .tooltiptext {
        visibility: hidden;
        width: 90px;
        background-color: @LabelColor;
        color: @WhiteColor;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        font-family: @PrimaryFont;
        position: absolute;
        z-index: 1;
    }

    &:hover {
        .tooltiptext {
            visibility: visible;
        }
    }
}

/* Position the tooltip */
.bottom {
    top: 100%;
    left: 50%;
    margin-left: -45px;
}

.top {
    bottom: 100%;
    left: 50%;
    margin-left: -45px;
}

.left {
    top: -5px;
    right: 105%;
}

.right {
    top: -5px;
    left: 105%;
}
</style>
