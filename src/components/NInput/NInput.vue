<template>
  <div class="nitrozen-form-input">
    <span class="nitrozen-loader-div" v-if="loaderShow && search">
      <img src="./../../assets/loader.gif" />
    </span>

    <span class="nitrozen-search-icon" v-if="showSearchIcon">
      <nitrozen-inline :icon="'search'"></nitrozen-inline>
    </span>

    <input
      v-if="type != 'textarea'"
      v-bind:class="{ 'nitrozen-search-input-padding': showSearchIcon }"
      v-on:keyup="eventEmit($event, 'keyup')"
      v-on:change="eventEmit($event, 'change')"
      v-on:blur="eventEmit($event, 'blur')"
      v-on:focus="eventEmit($event, 'focus')"
      v-on:click="eventEmit($event, 'click')"
      v-on:keypress="eventEmit($event, 'keypress')"
      class="n-input input-text"
      :maxlength="maxlength"
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :disabled="disabled"
      :value="value"
      @input="valueChange"
    />
    <textarea
      v-if="type == 'textarea'"
      v-on:keyup="eventEmit($event, 'keyup')"
      v-on:change="eventEmit($event, 'change')"
      v-on:blur="eventEmit($event, 'blur')"
      v-on:focus="eventEmit($event, 'focus')"
      v-on:click="eventEmit($event, 'click')"
      v-on:keypress="eventEmit($event, 'keypress')"
      v-bind:class="{ 'n-input-textarea': type == 'textarea' }"
      class="n-input input-text"
      :maxlength="maxlength"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="value"
      @input="valueChange"
    ></textarea>

    <div class="n-input-label-container">
      <label class="n-input-label" v-if="label">
        {{ label }}
        <span class="nitrozen-tooltip-icon" v-if="showTooltip">
          <nitrozen-tooltip :tooltipText="tooltipText"></nitrozen-tooltip>
        </span>
      </label>
      <label class="n-input-label n-input-maxlength" v-if="maxlength">{{ length }}/{{ maxlength }}</label>
    </div>
    <!-- <label class="n-input-label" v-if="hint">{{ hint }}</label> -->

    <!-- <div
            v-bind:class="[{ 'error-visible': showError && value == '' }]"
        >
            Field is required
    </div>-->
  </div>
</template>

<script>
import NInputPrefix from "./NInputPrefix";
import NInputSuffix from "./NInputSuffix";
import NTooltip from "./../NTooltip";
import NitrozenInline from "./../NInline";
import NitrozenUuid from "./../../utils/NUuid";

export default {
  name: "nitrozen-input",
  components: {
    NInputPrefix,
    NInputSuffix,
    "nitrozen-tooltip": NTooltip,
    "nitrozen-inline": NitrozenInline
  },
  data() {
    return {
      loaderShow: false
    };
  },
  computed: {
    length: function() {
      return this.value.length;
    }
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    },
    showError: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String,
      default: ""
    },
    search: {
      type: Boolean,
      default: false
    },
    showSearchIcon: {
      type: Boolean,
      default: false
    },
    showTooltip: {
      type: Boolean,
      default: false
    },
    tooltipText: {
      type: String,
      default: ""
    },
    id: {
      type: [Number, String],
      default: () => "nitrozen-input" + NitrozenUuid()
    },
    maxlength: {
      type: Number
    }
  },
  methods: {
    valueChange: function(event) {
      this.$emit("input", event.target.value);
      if (this.search) {
        // Do this with debouncing
        this.loaderShow = true;
      }
    },
    eventEmit: function(event, type) {
      this.$emit(type, event);
    }
  }
  // render(createElement){
  //     let inputAttrs = {
  //         staticClass= "n-input input-text"
  //     }
  // }
};
</script>

<style lang="less">
@import "./NInput.less";

textarea {
  resize: vertical;
}
</style>
