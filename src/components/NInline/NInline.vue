<template>
    <!-- <span v-on="$listeners">
        <img src="./../../assets/cross.svg" class="inline-svg" />
    </span> -->
    <span v-on="$listeners" v-html="getSVG" class="inline-svg"></span>
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
.inline-svg{
    height: 10px;
}
</style>
