<template>
    <div class="j-search-box has-prefix has-suffix search-container"
    :class="{ 'disable-hover': disableHover }">
        <span class="input-icon input-icon-prefix" tabindex="-1">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.004 2a7 7 0 015.6 11.19l6.11 6.1a1.002 1.002 0 01-.325 1.639.999.999 0 01-1.095-.219l-6.1-6.11A7 7 0 1110.004 2zm0 12a5 5 0 100-10 5 5 0 000 10z"
                    fill="currentColor">
                </path>
            </svg>
        </span>
        <input type="search" :aria-label="label" :placeholder="label" v-model="searchText" class="hoverable" :style="{ paddingRight: showIcon ? '3em' :'1rem' }">
        <span class="input-icon input-icon-suffix clickable hoverable" tabindex="0"
        :style="{ width: showIcon ? '1.5em' : '0' }">
            <img v-if="icon && showIcon" :src="icon" class="icon-image"/>
        </span>
    </div>
</template>
<script>
export default {
    name: "nitrozen-search-box",
    props: {
        kind: {
        type: String,
        default: "normal"
      },
      disableHover: {
      type: Boolean,
      default: false,
    },
      suffix:{
        type: String,
        default:''
      },
      label:{
        type: String,
        default: "Search Jio"
      },
      icon: {
        type: String,
      },
    },
  data() {
    return{
      searchText: "",
      showIcon: true,
    }
  },
  watch: {
    searchText() {
      this.showIcon = this.searchText === "";
    },
  }
};

</script>
<style lang="less" scoped>
@import "./../../base/base.less";
.j-search-box input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 1em;
  width: 1em;
  background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%232e31a1' viewBox='0 0 24 24'><path d='M12 2a10 10 0 100 20 10 10 0 000-20zm3.71 12.29a1.002 1.002 0 01-.325 1.639 1 1 0 01-1.095-.219L12 13.41l-2.29 2.3a1 1 0 01-1.639-.325 1 1 0 01.219-1.095l2.3-2.29-2.3-2.29a1.004 1.004 0 011.42-1.42l2.29 2.3 2.29-2.3a1.004 1.004 0 011.42 1.42L13.41 12l2.3 2.29z'/></svg>");
  background-repeat: no-repeat;
  background-size: 1em;
  background-position: center;
  appearance: none;
}

.icon-image{
    width: 100%;
}
.j-search-box {
    position: relative;
    width: auto;
}

.j-search-box label{
    font-size: 1.2rem;
}

.j-search-box .input-icon.input-icon-prefix {
    color: @ColorPrimaryGrey80;
    left: @SpacingS;
}

.j-search-box .input-icon {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    line-height: 0;
    border-radius: @RadiusSmall;
    width: 1.5em;
    height: 100%;
    display: flex;
    justify-content: center;
    transform: none;
    z-index: auto;
}

.j-search-box input {
    font-family: @PrimaryFont;
    font-weight: 500;
    text-transform: none;
    font-size: 0.25rem;
    letter-spacing: -0.0044rem;
    line-height: 1.5;
    padding-right: 3em;
}


.j-search-box:not(.disable-hover):hover .input-icon-clear {
  display: none;
}

.j-search-box.has-prefix input {
    padding-left: 3em;
}


.j-search-box .input-icon svg {
    height: 100%;
    width: 100%;
}

.j-search-box .input-icon.input-icon-suffix {
    color: @ColorPrimary60;
    right: @SpacingS;
    display: flex;
    align-items: center;
    cursor: pointer;
}

// .search-container:hover .input-icon.input-icon-prefix svg path,
// .search-container:hover input::placeholder {
//   color: @DefaultColor;
// }

.j-search-box:not(.disable-hover):hover .input-icon.input-icon-prefix svg path,
.j-search-box:not(.disable-hover):hover input::placeholder {
  color: @DefaultColor;
}
.j-search-box input {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    border-radius: @RadiusPill;
    background-color: @ColorPrimaryGrey20;
    width: 100%;
    padding: @SpacingS @SpacingBase;
    padding-right: @SpacingS;
    color: @ColorPrimaryGrey100;
    outline: none;
    font-family: @PrimaryFont;
    font-weight: 500;
    text-transform: none;
    font-size: 1.5rem;
    letter-spacing: -0.08px;
    line-height: 1.5;
}
</style>