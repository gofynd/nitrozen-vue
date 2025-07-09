<template>
  <div class="loader-container">
    <div class="dropdown-loader"></div>
  </div>
</template>
<script>
export default {
  name: 'Dropdown-loader'
}
</script>
<style lang="less" scoped>
.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;

}

.dropdown-loader {
  width: 10px;
  margin: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l5 1s infinite linear alternate;
}

@keyframes l5 {
  0% {
    box-shadow: 15px 0 rgba(46, 49, 190, 1), -15px 0 rgba(46, 49, 190, 0.2);
    background: rgba(46, 49, 190, 1);
  }

  33% {
    box-shadow: 15px 0 rgba(46, 49, 190, 1), -15px 0 rgba(46, 49, 190, 0.2);
    background: rgba(46, 49, 190, 0.2);
  }

  66% {
    box-shadow: 15px 0 rgba(46, 49, 190, 0.2), -15px 0 rgba(46, 49, 190, 1);
    background: rgba(46, 49, 190, 0.2);
  }

  100% {
    box-shadow: 15px 0 rgba(46, 49, 190, 0.2), -15px 0 rgba(46, 49, 190, 1);
    background: rgba(46, 49, 190, 1);
  }
}</style>