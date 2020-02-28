<template>
<div class="n-button-content">
    <div class="social-icon" v-if="icon">
        <img v-if="icon == 'facebook'" src="./../../assets/facebook-icon.png">
        <img v-if="icon == 'bag'" src="./../../assets/Bag_Icon.svg">
        
    </div>
    <slot v-if="!showProgress" />
    <div v-if="showProgress" class="n-btn-spin">
        <img class="n-btn-spinner" style="width: 50px;" src="./../../assets/loader-white.gif">
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
    left: -35px;
    display: flex;
    img{
        background: white;
    }
    svg{
        height: 24px;
        width: 24px;
    }
}
</style>
