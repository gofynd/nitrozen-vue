<template>
  <span class="loader-container">
    <nitrozen-inline class="loader" icon="loader"></nitrozen-inline>
    <span>loading...</span>
    </span>
</template>
<script>
import NitrozenInline from "./../NInline";
export default{
    name:'Dropdown-loader',
    components: { NitrozenInline },
}
</script>
<style lang="less" scoped>
.loader-container{
  display: flex;
  column-gap: 6px;
  align-items: center;
  width: 24px;
  padding: 4px;
  color:#9B9B9B;
  font-size: 14px;
}
.loader{
    animation: rotate 2s linear infinite;
    transform-origin: center;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>