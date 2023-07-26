<template>
  <div class="jds-listblock">
    <h2 v-if="title">{{ title }}</h2>
    <ul :class="`jds-listblock-${spacing}`" :style="{ alignItems: verticalAlignment }">
      <li v-for="(item, index) in items" :key="index">
        <nitrozen-icon v-if="prefix" :name="prefix" ></nitrozen-icon>
        {{ item }}
        <nitrozen-icon v-if="suffix" :name="suffix" ></nitrozen-icon>
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
      default: "baseline",
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

.jds-listblock {
  /* Your styles for the container of the list block */
}

.jds-listblock-default {
  /* Your styles for default spacing between items */
}

.jds-listblock-s {
  /* Your styles for small spacing between items */
}

.jds-listblock-m {
  /* Your styles for medium spacing between items */
}

.jds-listblock-l {
  /* Your styles for large spacing between items */
}

</style>
