<template>
<div class="n-button-content" :class="{'disable-click':showProgress}">
    <div class="social-icon" v-if="icon">
        <nitrozen-icon v-if="icon" :name="icon" :size="getIconSize" :color="iconColor"/>
    </div>
    <slot v-if="!showProgress" />
    <div v-if="showProgress" class="n-btn-spin">
        <img class="n-btn-spinner" style="width: 50px;" src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/src/assets/loader-white.gif">
    </div>
</div>
</template>

<script>
import NIcon from './../NIcon/NIcon.vue';
export default {
    components: {
    'nitrozen-icon': NIcon,
  },
    name: 'nitrozen-button-content',
    props: {
        showProgress: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String
        },
        size: {
            type: String
        },
        iconColor:{
            type:String,
            default:"#FFFFFF"
        }
    },
    computed: {
    getIconSize(){
      let iconSize = {
        'small': 10,
        'medium': 14,
        'large': 18
      }
      return iconSize[this.size]
    }
  }
}
</script>

<style lang="less">
.n-button-content {
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
.social-icon{
    float: left;
    position: relative;
    // left: -20px;
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
