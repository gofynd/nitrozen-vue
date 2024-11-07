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
      <img src="./../../assets/loader.gif" />
    </span>

    <div class="nitrozen-input-grp">
      <!-- Search Icon -->
      <span class="nitrozen-search-icon" v-if="showSearchIcon">
        <nitrozen-inline :icon="'search-black'"></nitrozen-inline>
      </span>

      <!-- Prefix -->
      <nitrozen-input-prefix
        v-if="showPrefix"
        class="nitrozen-input-prefix nitrozen-remove-right-border"
        v-bind:class="{ 'nitrozen-prefix-padding': !custom }"
      >
        <span v-if="custom"><slot /></span>
        <span v-else>{{ prefix }}</span>
      </nitrozen-input-prefix>

      <!-- Input -->
      <input
        v-if="type != 'textarea'"
        v-bind:class="{
          'nitrozen-search-input-padding': showSearchIcon,
          'nitrozen-remove-left-border': showPrefix,
          'nitrozen-remove-right-border': showSuffix,
        }"
        v-on:keyup="eventEmit($event, 'keyup')"
        v-on:change="eventEmit($event, 'change')"
        v-on:blur="eventEmit($event, 'blur')"
        v-on:focus="eventEmit($event, 'focus')"
        v-on:click="eventEmit($event, 'click')"
        v-on:keypress="eventEmit($event, 'keypress')"
        class="n-input input-text"
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
        v-bind:class="{ 'n-input-textarea': type == 'textarea' }"
        class="n-input input-text"
        :maxlength="maxlength"
        :disabled="disabled"
        :ref="id"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @input="valueChange"
      ></textarea>

      <!-- Suffix -->
      <nitrozen-input-suffix
        v-if="showSuffix"
        class="nitrozen-input-suffix nitrozen-remove-left-border"
        v-bind:class="{ 'nitrozen-suffix-padding': !custom }"
      >
        <span v-if="custom"><slot /></span>
        <span v-else>{{ suffix }}</span>
      </nitrozen-input-suffix>
    </div>
  </div>
</template>

<script>
import NInputPrefix from './NInputPrefix';
import NInputSuffix from './NInputSuffix';
import NTooltip from './../NTooltip';
import NitrozenInline from './../NInline';
import NitrozenUuid from './../../utils/NUuid';

export default {
  name: 'nitrozen-input',
  components: {
    'nitrozen-input-prefix': NInputPrefix,
    'nitrozen-input-suffix': NInputSuffix,
    'nitrozen-tooltip': NTooltip,
    'nitrozen-inline': NitrozenInline,
  },
  data() {
    return {
      loaderShow: false,
    };
  },
  computed: {
    length: function() {
      return this.value.length;
    },
  },
  props: {
    autocomplete: {
      type: String,
      default: null,
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
    showError: {
      type: Boolean,
      default: false,
    },
    hint: {
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
    valueChange: function(event) {
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
    eventEmit: function(event, type) {
      this.$emit(type, event);
    },
  },
  // render(createElement){
  //     let inputAttrs = {
  //         staticClass= "n-input input-text"
  //     }
  // }
};
</script>

<style lang="less">
@import './NInput.less';

textarea {
  resize: vertical;
}
</style>
