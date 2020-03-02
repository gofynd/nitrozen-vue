<template>
    <div class="nitrozen-toggle-container">
        <label class="switch">
            <input type="checkbox" @change="change" :checked="value" :value="value" />
            <span class="slider round"></span>
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
    props: ['value'],
    data() {
        return {
            selectedState: this.value
        };
    },
    methods: {
        change(event) {
            // console.log(this.value,'selectedState',this.selectedState)
            this.$emit('change', event);
        }
    }
};
</script>
