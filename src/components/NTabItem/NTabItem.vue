<template>
  <li class="menu-item" v-on="$listeners">
    <slot />
  </li>
</template>

<script>
import NitrozenUuid from "./../../utils/NUuid";

export default {
  name: "nitrozen-tab-item",
  props: {
    id: {
      type: [Number, String],
      default: () => "nitrozen-tab-item" + NitrozenUuid(),
    },
  },
};
</script>
<style lang="less" scoped>
.menu-item {
  display: flex;
  justify-content: center;
  color: #514c51;
  font-family: 'Poppins', sans-serif;
  margin-right: 40px;
  padding: 20px 0px;
  font-size: 14px;
  font-weight: 400;
  // a.router-link-exact-active {
  //   color: #5c6bdd;
  //   border-bottom: 3px solid #5c6bdd;
  // }
  // a.router-link-active {
  //   color: #5c6bdd;
  //   border-bottom: 3px solid #5c6bdd;
  // }
}
</style>
