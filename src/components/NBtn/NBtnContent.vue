<template>
<div class="n-button-content" :class="{'disable-click':showProgress}">
    <div class="social-icon" v-if="icon">
        <img v-if="icon == 'facebook'" src="./../../assets/facebook-icon.png">
        <!-- <img v-if="icon == 'bag'" src="./../../assets/Bag_Icon.svg"> -->
    </div>
    <slot v-if="!showProgress" />
    <div v-if="showProgress" class="n-btn-spin">
        <img class="n-btn-spinner" style="width: 50px;" src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/src/assets/loader-white.gif">
    </div>
</div>
</template>

<script>
export default {
    name: 'nitrozen-button-content',
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
.n-button-content {
    display: flex;
    align-items: center;
    height: 100%;
}
.n-btn-spinner{
  text-align:center;
}

.n-btn-spin{
  display: flex;
  justify-content: center;
}
.social-icon{
    float: left;
    position: relative;
    left: -20px;
    display: flex;
    img{
        background: white;
    }
    svg{
        height: 24px;
        width: 24px;
    }
}
.disable-click {
    pointer-events: none;
}
</style>
