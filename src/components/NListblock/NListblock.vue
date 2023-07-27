<template>
  <div class="jds-listblock">
    <h2 v-if="title">{{ title }}</h2>
    <ul :class="`jds-listblock-${spacing}`" :style="{ alignItems: verticalAlignment }">
      <li v-for="(item, index) in items" :key="index">
        <span class="listblock-prefix"><nitrozen-icon v-if="prefix" :name="prefix" size="24"></nitrozen-icon></span>
        <span class="listblock-content">{{ item }}</span>
        <span class="listblock-suffix"><nitrozen-icon v-if="suffix" :name="suffix" size="24" ></nitrozen-icon></span>
      </li>
    </ul>
  </div>
</template>

<script>
import NIcon from '../NIcon/NIcon.vue';
export default {
  name: "Listblock",
  components: {
    'nitrozen-icon': NIcon,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    prefix: {
      type: String,
      default: "",
    },
    suffix: {
      type: String,
      default: "",
    },
    verticalAlignment: {
      type: String,
      default: "center",
    },
    spacing: {
      type: String,
      default: "default",
      validator: (value) => ["default", "s", "m", "l"].includes(value),
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>

.jds-listblock ul {
  /* Your styles for the container of the list block */
  list-style: none;
  margin: 0;
  padding: 0;
}
.jds-listblock li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.jds-listblock-default {

}

.jds-listblock-s .listblock-content {
  margin-left: 8px;
}

.jds-listblock-m .listblock-content{
  margin-left: 12px;
}

.jds-listblock-l .listblock-content{
  /* Your styles for large spacing between items */
   margin-left: 16px;
}

.listblock-prefix{
display: flex;
    align-content: center;
    align-items: center;
    flex: 0 0 auto;
}
.listblock-content{
  font-size: 18px;
    display: flex;
    flex-grow: 0.1;
    flex-direction: column;
}
.listblock-suffix{
      display: flex;
    align-content: center;
    align-items: center;
    flex: 0 0 auto;
}



</style>
