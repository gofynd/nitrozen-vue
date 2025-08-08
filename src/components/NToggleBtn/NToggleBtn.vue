<template>
    <div class="nitrozen-toggle-container">
        <label class="nitrozen-switch">
            <input :id="id" type="checkbox" @change="change" :disabled="disabled" :checked="value" :value="value" />
            <span class="nitrozen-slider nitrozen-round" :class="{ 'nitrozen-disabled': disabled }"></span>
        </label>
    </div>
</template>
<style lang="less">
@import './NToggleBtn.less';
</style>
<script>
export default {
    name: 'nitrozen-toggle-btn',
    // props: {
    //     curstate: {
    //         default: false,
    //         type: Boolean
    //     }
    // },
    props: {
        id: {
            type: String,
            default: 'toggleBtn',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        value: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            selectedState: this.value
        };
    },
    methods: {
        change(event) {
            // console.log(this.value,'selectedState',this.selectedState)
            this.$emit("input", event.target.checked);
            this.$emit('change', event);
        }
    }
};
</script>
