<template>
<div class="n-button-content" :class="'nitrozenButtonClass'">
    <div class="social-icon" v-if="icon">
        <nitrozen-icon v-if="icon" :name="icon" :size="getIconSize" :color="iconColor"/>
    </div>
    <slot/>
    <div v-if="showProgress" class="n-btn-spin">
        <img class="n-btn-spinner" src="https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/loader.gif">
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
        },
        flat: {
            type: Boolean
        },
        stroke: {
            type: Boolean
        },
        theme: {
            type: String
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
    },
    nitrozenButtonClass() {
            return {
                'disable-click':this.showProgress,
                'n-flat-button': this.flat == true,
                'n-flat-button-primary': this.flat == true && this.theme == 'primary',
                'n-flat-button-secondary': this.flat == true && this.theme == 'secondary',
                'n-button-stroke': this.stroke == true,
                'n-button-stroke-primary': this.stroke == true && this.theme == 'primary',
                'n-button-stroke-secondary': this.stroke == true && this.theme == 'secondary',
        }
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
    gap: 10px;
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
