<template>
<div class="n-icbutton-content" :class="{'disable-click':showProgress}">
    <slot v-if="!showProgress" />
    <div v-if="showProgress" class="n-btn-spin">
        <img class="n-btn-spinner" style="width: 12px;" src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/src/assets/loader-white.gif">
    </div>
</div>
</template>

<script>
import NitrozenInline from "../NInline";
export default {
    name: 'icon-button-content',
    components: {
        "nitrozen-inline": NitrozenInline,
    },
    props: {
        showProgress: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String
        }
    }
}
</script>

<style lang="less">
.n-icbutton-content {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
}
.n-btn-spinner{
  text-align:center;
}

.n-btn-spin{
  display: flex;
  justify-content: center;
}
.disable-click {
    pointer-events: none;
}
</style>
