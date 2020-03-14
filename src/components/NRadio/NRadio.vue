<template>
  <div class="nitrozen-radio-group">
    <input
      :id="id"
      type="radio"
      @input="inputEvent"
      @change="changeEvent"
      v-model="nitrozenModel"
      :value="radioValue"
      :name="name"
      :disabled="disabled"
    />
    <label :for="id">
      <slot />
    </label>
  </div>
</template>

<script>
import NitrozenUuid from "./../../utils/NUuid";
export default {
  name: "nitrozen-radio",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    radioValue: {
      type: [String, Number],
      default: ""
    },
    id: {
      type: [Number, String],
      default: () => "nitrozen-radio" + NitrozenUuid()
    },
    name: {
      type: [Number, String],
      required: true,
      default: () => "nitrozen-radio-name"
    },
    value: {}
  },
  data() {
      return{
         nitrozenModel : this.value
      }
  },
  methods: {
    inputEvent: function(event) {
      this.$emit("input", event.target.value);
    },
    changeEvent: function(event){
      this.$emit("change", event.target.value);
    }
  }
};
</script>

<style lang="less">
@import "./../../base/base.less";

.nitrozen-radio-group {
  input[type="radio"]:checked,
  input[type="radio"]:not(:checked) {
    position: absolute;
    visibility: hidden;
  }
  input[type="radio"]:checked + label,
  input[type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: @TypographyPrimaryColor;
    font-family: @PrimaryFont;
    font-size: 12px;
  }
  input[type="radio"]:checked + label:before,
  input[type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border: 1px solid @TypographyPrimaryColor;
    border-radius: 100%;
    background: @WhiteColor;
  }
  input[type="radio"]:checked + label:after,
  input[type="radio"]:not(:checked) + label:after {
    content: "";
    width: 10px;
    height: 10px;
    background: @TypographyPrimaryColor;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
  }
  input[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  input[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  input[type="radio"]:disabled + label {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
