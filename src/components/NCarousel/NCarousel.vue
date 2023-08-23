<template>
  <div class="carousel-container">
    <div class="carousel">
      <transition name="slide-fade" mode="out-in">
        <div :key="currentIndex" class="carousel-inner" :style="carouselStyle">
          <carousel-slide
            v-for="(item, index) in items"
            :key="index"
            :image="item"
            :alt="item.alt"
          />
        </div>
      </transition>
    </div>
    <carousel-controls
      :prev-text="prevButtonText"
      :next-text="nextButtonText"
      :prev-slide="prevSlide"
      :next-slide="nextSlide"
    />
    <div class="pagination">
      <carousel-pagination
        v-for="(item, index) in items"
        :key="index"
        :is-active="index === currentIndex"
        :index="index"
        :go-to-slide="goToSlide"
      />
  </div>
  </div>
</template>

<script>
import CarouselSlide from './CarouselSlide.vue';
import CarouselControls from './CarouselControls.vue';
import CarouselPagination from './CarouselPagination.vue';

export default {
  name: "nitrozen-carousel",
  components: {
    CarouselSlide,
    CarouselControls,
    CarouselPagination
  },
  props: {
    items: Array,
    prevButtonText: String,
    nextButtonText: String,
  },
  data() {
    return {
      currentIndex: 0,
      slideWidth: 100,
    };
  },
  computed: {
    carouselStyle() {
      return {
        width: `${this.slideWidth}%`,
        transform: `translateX(-${this.currentIndex * this.slideWidth}%)`,
      };
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
  },
};
</script>

<style scoped lang="less">
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
.pagination{
display: flex;
  justify-content: center;
  margin-top: 15px;
  position: absolute;
  bottom: 10px;
  left: 70rem;
  z-index: 100;
}
</style>
