<template>
    <!-- <span v-on="$listeners">
        <img src="./../../assets/cross.svg" class="nitrozen-inline-svg" />
    </span> -->
    <span v-on="$attrs" v-html="getSVG" class="nitrozen-inline-svg"></span>
</template>

<script>
import __SVG from './../../utils/svgs';
export default {
    name: 'nitrozen-inline',
    props: {
        icon: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            basePath: './../../assets/'
        }
    },
    computed: {
        getSVG() {
            return __SVG[this.icon];
        }
    }
}
</script>

<style lang="less">
.nitrozen-inline-svg{
    height: 10px;
}
</style>
