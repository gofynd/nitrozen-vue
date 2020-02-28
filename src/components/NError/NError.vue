<template>
<div class="error-visible">
    <slot />    
</div>
</template>

<script>
export default {
name: 'nitrozen-error'    
}
</script>

<style lang="less">
@import './../../base/base.less';
 .error-visible{
     width: 100%;
     color: @ErrorColor;
     font-family: @PrimaryFont;
     font-size: @BaseFontSize;
     padding-top: 5px;
 }
</style>
