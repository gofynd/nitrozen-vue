<template>
  <div>
    <label class="nitrozen-container">
      <slot />
      <input :id="id" type="checkbox" @change="valueChange" :value="value" :disabled="disabled" />

      <!-- <input :id="id" type="checkbox" v-model="checkboxModel" @change="valueChange" :value="checkboxValue" :disabled="disabled">         -->
      <span :for="id" class="nitrozen-checkbox"></span>
    </label>
  </div>
</template>

<script>
import NitrozenUuid from "./../../utils/NUuid";
export default {
  name: "nitrozen-checkbox",
  props: {
    value: {
      type: [Array, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checkboxValue: {
      type: [Number, Array, Object, Boolean, String],
      default: true
    },
    id: {
      type: [Number, String],
      default: () => "nitrozen-checkbox" + NitrozenUuid()
    }
  },
  event: "change",
  methods: {
    valueChange: function(event) {
      let checkboxModel = this.value;
      if (Array.isArray(this.value)) {
        checkboxModel = [...this.value];
        let index = checkboxModel.indexOf(this.checkboxValue);
        if (index == -1) {
          checkboxModel.push(this.checkboxValue);
        } else {
          checkboxModel.splice(index, 1);
        }
        this.$emit("input", checkboxModel);
        this.$emit("change", checkboxModel);
      } else {
        checkboxModel = !checkboxModel;        
        this.$emit("change", event);
        this.$emit("input", checkboxModel);
      }
    }
  }
};
</script>

<style lang="less">
@import "./../../base/base.less";

/* The nitrozen-container */
.nitrozen-container {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 12px;
  line-height: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: @PrimaryFont;
  color: @TypographyPrimaryColor;
}

/* Hide the browser's default checkbox */
.nitrozen-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.nitrozen-checkbox {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: @WhiteColor;
  border: 1px solid @TypographyPrimaryColor;
  border-radius: 3px;
}

/* On mouse-over, add a grey background color */
.nitrozen-container:hover input ~ .nitrozen-checkbox {
  background-color: @WhiteColor;
}

/* When the checkbox is checked, add a blue background */
.nitrozen-container input:checked ~ .nitrozen-checkbox {
  background-color: @TypographyPrimaryColor;
}

/* Create the nitrozen-checkbox/indicator (hidden when not checked) */
.nitrozen-checkbox:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the nitrozen-checkbox when checked */
.nitrozen-container input:checked ~ .nitrozen-checkbox:after {
  display: block;
}

/* Style the nitrozen-checkbox/indicator */
.nitrozen-container .nitrozen-checkbox:after {
  left: 5px;
  top: 0px;
  width: 4px;
  height: 10px;
  border: 1px solid @WhiteColor;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

input[type="checkbox"]:disabled + .nitrozen-checkbox {
  opacity: 0.5;
  pointer-events: none;
  background: @DisabledColor;
}
</style>
