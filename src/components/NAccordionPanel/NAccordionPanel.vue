<template>
    <div class="accordion-section">
      <div class="accordion-header clearfix" @click="toggleSection">
        <jm-image
          v-if="image"
          :src="image"
          class="categories-image"
          :class="getImageWidthClass()"
        />
        <div class="header-content">
          <div v-if="iconType == 'chevron' ">
            <div :class="{ open: isOpen }">
              <img
                src="../../assets/jds-icons/chevron-up-p60-m-icon.svg"
                alt="Open Icon"
                class="arrow-icon"
              />
            </div>
          </div>
          <div v-else>
            <div v-if ="isOpen">
            <img
                src="../../assets/jds-icons/minus-icon.svg"
                alt="Open Icon"
                class="arrow-icon"
              />
            </div>
            <div v-else>
              <img
                src="../../assets/jds-icons/plus-icon.svg"
                alt="Open Icon"
                class="arrow-icon"
              />
            </div>
          </div>
          <div v-if="title" :class="getTitleSizeClass()" class="title">
            {{ title }}
          </div>
          <div v-if="description" class="description">
            <div
              v-for="(item, index) in description"
              :key="index"
              :class="getDescriptionSizeClass()"
            >
              {{ item.name }}<span v-if="index < description.length - 1">,</span>
            </div>
          </div>
        
        </div>
      </div>
      <div class="accordion-content" v-if="isOpen">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "nitrozen-accordion-panel",
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      titleSize: {
        type: String,
        default: "jm-heading-xxs",
      },
      descriptionSize: {
        type: String,
        default: "jm-body-xxs",
      },
      imageWidth: {
        type: [String, Number],
        default: "",
      },
      iconType:{
        type : String,
        options : ["plus","chevron"],
        default : "chevron"
      }
    },
    components: {
    },
    data() {
      return {
        isOpen: false,
        isRotated: false,
      };
    },
    methods: {
      toggleSection() {
        this.isOpen = !this.isOpen;
        this.isRotated = !this.isRotated;
      },
      getTitleSizeClass() {
        return `${this.titleSize}`;
      },
      getDescriptionSizeClass() {
        return `${this.descriptionSize}`;
      },
      getImageWidthClass() {
        return {
          "image-width-small": this.imageWidth === "small",
          "image-width-medium": this.imageWidth === "medium",
          "image-width-large": this.imageWidth === "large",
        };
      },
    },
  };
  </script>
  
  <style lang="less" scoped="true">
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }
  
  .accordion-content {
    min-height: 5rem !important;
  }
  .accordion-section {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .accordion-header {
    color: #333;
    padding: 5px;
    margin: 0;
    cursor: pointer;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .accordion-header:hover {
    color: #0c5273;
    border-bottom: 1px solid #67c3ef;
  }
  
  .title {
    margin-top: 25px;
    line-height: 1;
    margin-left: 85px;
    text-transform: capitalize;
  }
  
  .description {
    margin-right: 10px;
    display: flex;
  }
  
  @media only screen and (max-width:991px) {
    .description {
      display: none;
    }
  
    .image-width-small {
      width: 36px !important;
      height: 26px !important;
      border-radius: 8px;
      overflow: hidden;
    }
  
    .image-width-medium {
      width: 40px !important;
      height: 40px !important;
      border-radius: 8px;
      overflow: hidden;
    }
  
    .image-width-large {
      width: 48px !important;
      height: 48px !important;
      border-radius: 8px;
      overflow: hidden;
    }
  
    .title {
      margin-top: 10px;
      margin-left: 50px;
    }
  
    .arrow-icon {
      margin-top: 2px !important;
    }
  
    .accordion-content {
      padding-left: 25px !important;
    }
  }
  
  .accordion-content {
    padding-left: 40px;
    padding-top: 10px;
  }
  
  .header-content img {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-width: 75px;
  }
  
  .header-content .icon img {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-width: 25px;
  }
  
  .accordion-content-list {
    margin-left: 24px;
    padding-left: 24px !important;
  }
  
  .accordion-content-list .jm-list-content-title {
    font-family: "JioType", helvetica, arial, sans-serif;
    font-weight: 500;
    font-size: 15px;
    padding: 12px 0px;
    letter-spacing: -0.07px;
    line-height: 1.4285714286;
    color: rgba(0, 0, 0, 0.65);
    border-bottom: 1px solid #e0e0e0;
  }
  
  .accordion-content-list .jm-list-content-title:hover {
    border-bottom: 1px solid #67c3ef;
  }
  
  .collapse-toggle {
    float: right;
    margin-right: 20px;
  }
  
  .arrow-icon {
    float: right;
    margin-top: 20px;
    margin-right: 20px;
    width: 25px !important;
    height: auto;
    object-fit: contain;
    transition: transform 0.3s;
  }
  
  .open .arrow-icon {
    transform: rotate(180deg);
  }
  
  /* image */
  .categories-image {
    float: left;
  }
  
  .image-width-small {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .image-width-medium {
    width: 75px;
    height: 75px;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .image-width-large {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
  }
    .accordion-header{
      display: flex;
      align-items: center;
    }
    .header-content{
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 100%;
      .title{
        margin: unset !important;
        padding-left: 12px;
      }
      img{
        margin-right: unset !important;
        margin-top: unset !important;
      }
    }
      .accordion-content {
      padding-left: 0px;
      @media only screen and (max-width:991px) {
        padding-left: 0px !important;
      }
    }
    .header-content {
      margin-left: 24px;
  
      .title {
        font-weight: 500 !important;
        &.active{
          color: #141414;
        }
      }
    }
    .accordion-header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      padding:16px 4px;
    }
    .accordion-header:hover {
      color: #000;
      border-bottom: 1px solid #E0E0E0;
    }
    .title {
      margin-top: 0px;
      line-height: 0;
      margin-left: 0px;
    }
    .arrow-icon {
      margin-top: 0px;
      margin-right: 0px;
      margin-bottom: 0px;
      position: absolute;
      right: 4px;
      bottom: 12px;
    }
    .categories-image{
          width: 48px !important;
          height: 48px !important;
    }
    .collapse-toggle{
      margin-right: 0px;
    }
  </style>
  