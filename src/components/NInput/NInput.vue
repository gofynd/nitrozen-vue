<template>
  <div class="nitrozen-form-input">
    <!-- Label -->
    <div class="n-input-label-container">
      <label class="n-input-label" v-if="label" :for="id">
        {{ label }} {{ required ? ' *' : '' }}
        <span class="nitrozen-tooltip-icon" v-if="showTooltip">
          <nitrozen-tooltip
            :tooltipText="tooltipText"
            position="top"
          ></nitrozen-tooltip>
        </span>
      </label>
      <label class="n-input-label n-input-maxlength" v-if="maxlength"
        >{{ length }}/{{ maxlength }}</label
      >
    </div>

    <!-- Input -->
    <span class="nitrozen-loader-div" v-if="loaderShow && search">
      <img :src="getLoader" />
    </span>

    <div class="nitrozen-input-grp">
      <!-- Search Icon -->
      <span class="nitrozen-search-icon" v-if="showSearchIcon">
        <nitrozen-inline :icon="'search-black'"></nitrozen-inline>
      </span>

      <!-- Prefix -->
      <nitrozen-input-prefix
        v-if="showPrefix"
        v-bind:class="{
          'nitrozen-prefix-padding': !custom,
          'n-texttype-position': typeof prefix === 'string',
          'n-svg-position': typeof prefix !== 'string',
          'nitrozen-input-prefix': true,
        }"
      >
        <span v-if="custom"><slot /></span>
        <span v-else>
          {{ prefix }}
        </span>
      </nitrozen-input-prefix>

      <!-- Input -->
      <input
        v-if="type != 'textarea'"
        v-bind:class="{
          'nitrozen-search-input-padding': showSearchIcon || showPrefix,
          'nitrozen-search-input-right-padding': showSuffix,
          'n-success-border': this.validationState == 'success',
          'n-error-border': this.validationState == 'error',
          'n-warning-border': this.validationState == 'warning',
          'n-input': true,
          'input-text': true,
          'n-input-default-border': !['success', 'error', 'warning'].includes(
            this.validationState
          ),
        }"
        v-on:keyup="eventEmit($event, 'keyup')"
        v-on:change="eventEmit($event, 'change')"
        v-on:blur="eventEmit($event, 'blur')"
        v-on:focus="eventEmit($event, 'focus')"
        v-on:click="eventEmit($event, 'click')"
        v-on:keypress="eventEmit($event, 'keypress')"
        :min="min"
        :max="max"
        :maxlength="maxlength"
        :type="type"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :id="id"
        :ref="id"
        :disabled="disabled"
        :value="value"
        @input="valueChange"
      />

      <!-- Textarea -->
      <textarea
        v-if="type == 'textarea'"
        v-on:keyup="eventEmit($event, 'keyup')"
        v-on:change="eventEmit($event, 'change')"
        v-on:blur="eventEmit($event, 'blur')"
        v-on:focus="eventEmit($event, 'focus')"
        v-on:click="eventEmit($event, 'click')"
        v-on:keypress="eventEmit($event, 'keypress')"
        v-bind:class="{
          'n-input-textarea': type == 'textarea',
          'n-success-border': this.validationState == 'success',
          'n-error-border': this.validationState == 'error',
          'n-warning-border': this.validationState == 'warning',
          'n-input': true,
          'input-text': true,
          'n-input-default-border': !['success', 'error', 'warning'].includes(
            this.validationState
          ),
        }"
        :maxlength="maxlength"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :ref="id"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @input="valueChange"
      ></textarea>

      <!-- Suffix -->
      <nitrozen-input-suffix
        v-if="showSuffix"
        v-bind:class="{
          'nitrozen-suffix-padding': !custom,
          'n-texttype-position': typeof suffix === 'string',
          'n-svg-position': typeof suffix !== 'string',
          'nitrozen-input-suffix': true,
        }"
      >
        <span v-if="custom"><slot /></span>
        <span v-else>{{ suffix }}</span>
      </nitrozen-input-suffix>
    </div>
    <div v-if="helperText" class="n-input-underinfo">
      <span class="n-helper-text">{{ helperText }}</span>
      <nitrozen-validation
        v-if="validationState"
        :isHidden="validationState ? false : true"
        :validationState="validationState"
        :label="validationMessage"
      ></nitrozen-validation>
    </div>
  </div>
</template>

<script>
import NInputPrefix from './NInputPrefix';
import NInputSuffix from './NInputSuffix';
import NTooltip from './../NTooltip';
import NitrozenInline from './../NInline';
import NitrozenUuid from './../../utils/NUuid';
import NitrozenValidation from './../NValidation';
import { LOADER_CDN_URL } from '../../common/constants'
export default {
  name: 'nitrozen-input',
  components: {
    'nitrozen-input-prefix': NInputPrefix,
    'nitrozen-input-suffix': NInputSuffix,
    'nitrozen-tooltip': NTooltip,
    'nitrozen-inline': NitrozenInline,
    'nitrozen-validation': NitrozenValidation,
  },
  data() {
    return {
      loaderShow: false,
    };
  },
  computed: {
    length: function () {
      return this.value.length;
    },
    getLoader(){
      return LOADER_CDN_URL
    }
  },
  props: {
    autocomplete: {
      type: String,
      default: 'off',
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Number, String],
      default: '',
    },
    validationState: {
      type: String,
      default: null,
    },
    validationMessage: {
      type: String,
      default: null,
    },
    helperText: {
      type: String,
      default: '',
    },
    search: {
      type: Boolean,
      default: false,
    },
    showSearchIcon: {
      type: Boolean,
      default: false,
    },
    showTooltip: {
      type: Boolean,
      default: false,
    },
    tooltipText: {
      type: String,
      default: '',
    },
    id: {
      type: [Number, String],
      default: () => 'nitrozen-input' + NitrozenUuid(),
    },
    maxlength: {
      type: Number,
    },
    showPrefix: {
      type: Boolean,
      default: false,
    },
    showSuffix: {
      type: Boolean,
      default: false,
    },
    prefix: {
      type: String,
    },
    suffix: {
      type: String,
    },
    custom: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    autofocus() {
      if (this.autofocus) {
        this.$refs[this.id].focus();
      }
    },
  },
  mounted() {
    if (this.autofocus) {
      this.$refs[this.id].focus();
    }
  },
  methods: {
    valueChange: function (event) {
      let value = event.target.value;
      if (this.type === 'number') {
        value = Number(event.target.value);
      }

      this.$emit('input', value);
      if (this.search) {
        // Do this with debouncing
        this.loaderShow = true;
      }
    },
    eventEmit: function (event, type) {
      this.$emit(type, event);
    },
  },
};
</script>

<style lang="less">
@import './NInput.less';

textarea {
  resize: vertical;
}
</style>
