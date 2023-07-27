<template>
    <div :style="avatarStyle" 
    :class="{
      'hover-bg': kind === 'image' && isClickable,
      'hover-svg': kind === 'default' && isClickable,
      'hover-initials': kind === 'initials' && isClickable
    }"
    aria-label="Avatar">
      <img v-if="image && kind === 'image'" :src="image" alt="User Avatar" :style="imageStyle" />
      <span v-else-if="initials && kind === 'initials'" class="textStyle"> {{ userInitials }}</span>
      <svg v-else viewBox="0 0 24 24"  class="custom-fill-color" xmlns="http://www.w3.org/2000/svg" :transform="iconScaleTransform">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M 10.78 10.84 C 11.5508 11.0561 12.3652 11.0631 13.1396 10.8604 C 13.914 10.6577 14.6204 10.2525 15.1865 9.68648 C 15.7525 9.12045 16.1577 8.41396 16.3604 7.63957 C 16.5631 6.86518 16.5561 6.05078 16.34 5.28001 C 16.1352 4.53403 15.7399 3.85415 15.1929 3.30715 C 14.6459 2.76014 13.966 2.36482 13.22 2.16001 C 12.4492 1.94392 11.6348 1.93688 10.8604 2.1396 C 10.086 2.34232 9.37956 2.7475 8.81353 3.31353 C 8.2475 3.87956 7.84232 4.58605 7.6396 5.36044 C 7.43688 6.13484 7.44392 6.94923 7.66 7.72001 C 7.86481 8.46598 8.26014 9.14586 8.80714 9.69286 C 9.35415 10.2399 10.034 10.6352 10.78 10.84 Z M 12 12 C 9.87827 12 7.84344 12.8429 6.34315 14.3432 C 4.84285 15.8434 4 17.8783 4 20 C 4 20.5304 4.21071 21.0391 4.58579 21.4142 C 4.96086 21.7893 5.46957 22 6 22 H 18 C 18.5304 22 19.0391 21.7893 19.4142 21.4142 C 19.7893 21.0391 20 20.5304 20 20 C 20 17.8783 19.1571 15.8434 17.6569 14.3432 C 16.1566 12.8429 14.1217 12 12 12 Z"
        ></path>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name:"nitrozen-avatar",
    props: {
      size: {
        type: String,
        default: "medium",
      },
      kind: {
        type: String,
        default: "default"
      },
      initials: {
        type: String,
        default: ""
      },
      image: {
        type: String,
      },
      isClickable: {
        type: Boolean,
        default:false
      }
    },
    computed: {
      avatarStyle() {
        const sizes = {
          small: "1.5rem",
          medium: "2rem",
          large: "2.5rem",
          xsmall : "1rem",
          xlarge: "3rem",
          xxlarge: "7.5rem"

        };
  
        const sizeValue = sizes[this.size] || sizes["medium"];
        return {
          width: sizeValue,
          height: sizeValue,
        };
      },
    iconScaleTransform() {
      const scaleFactor = 0.7;
      return `scale(${scaleFactor})`;
    },
    imageStyle() {
      return {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        objectFit:"cover"
      };
    },
    userInitials() {
      const names = this.initials.trim().split(" ");
      console.log("names :"+names);
      if (names.length >= 2) {
        return names[0][0].toUpperCase() + names[1][0].toUpperCase();
      } else {
        console.log(names[0])
        return names[0][0].toUpperCase() + names[0][1].toUpperCase();
      }
    },
    },
  };
  </script>
  
  <style lang="less" scoped>
  @import "./../../base/base.less";

  div[aria-label="Avatar"] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: @ColorSparkle20;
  }
  
/* Hover style for image with isClickable */
div[aria-label="Avatar"].hover-bg:hover img{
  // color: @WarningColor;
  filter: brightness(110%);
}

/* Hover style for default (SVG) */
div[aria-label="Avatar"].hover-svg:hover,
div[aria-label="Avatar"].hover-svg:hover svg path {
  fill: @ColorPrimary60;
}

/* Hover style for initials */
div[aria-label="Avatar"].hover-initials:hover {
  background: @ColorSparkle40;
}
  .custom-fill-color path {
  fill: @ColorPrimary50;
  }

  .textStyle{
    font-family: @PrimaryFont;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.08px;
    text-transform: none;
    color: @ColorSparkle60;
  }
  </style>
  