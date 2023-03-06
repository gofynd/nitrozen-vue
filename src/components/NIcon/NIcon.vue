<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path :id="name" :d="getSVG" :fill="color" />
    </svg>
</template>

<script>
import icons from '../../assets/icons.json'
export default {
    name: 'nitrozen-icon',
    props: {
        name: {
            type: String,
            required: true,
            default: 'info'
        },
        size: {
            type: Number,
            required: false,
            default: 32
        },
        color: {
            type: String,
            required: false,
            default: '#000000'
        }
    },
    computed: {
        getSVG() {
            return icons[this.$props.name];
        }
    }
}
</script>