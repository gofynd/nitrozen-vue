<template>
  <div class="nitrozen-form-input">
    <!-- Ai Icon-->

    <!-- Label -->
    <div class="n-input-label-container">
      <div class="n-input-inner-container">
        <label class="n-input-label" v-if="label" :for="id">
          {{ label }} {{ required ? ' *' : '' }}
          <span class="nitrozen-tooltip-icon" v-if="showTooltip">
            <nitrozen-tooltip :tooltipText="tooltipText" position="top"></nitrozen-tooltip>
          </span>
        </label>

      </div>
      <label class="n-input-label n-input-maxlength" v-if="maxlength">{{ length }}/{{ maxlength }}</label>
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
      <nitrozen-input-prefix v-if="showPrefix" class="nitrozen-input-prefix nitrozen-remove-right-border"
        v-bind:class="{ 'nitrozen-prefix-padding': !custom }">
        <span v-if="custom">
          <slot />
        </span>
        <span v-else>{{ prefix }}</span>
      </nitrozen-input-prefix>

      <!-- Input -->
      <input v-if="type != 'textarea'" v-bind:class="{
        'nitrozen-search-input-padding': showSearchIcon,
        'nitrozen-remove-left-border': showPrefix,
        'nitrozen-remove-right-border': showSuffix,
        'n-input-right-padding': enableAi,
      }" v-on:keyup="eventEmit($event, 'keyup')" v-on:change="eventEmit($event, 'change')"
        v-on:blur="eventEmit($event, 'blur')" v-on:focus="eventEmit($event, 'focus')"
        v-on:click="eventEmit($event, 'click')" v-on:keypress="eventEmit($event, 'keypress')" class="n-input input-text"
        :min="min" :max="max" :maxlength="maxlength" :type="type" :placeholder="placeholder"
        :autocomplete="autocomplete" :id="id" :ref="id" :disabled="disabled" :value="value" @input="valueChange">
      <div class="n-input-icon">
        <span class="nitrozen-ai-icon" v-if="enableAi && !showAiToolbar" v-on:click="openAiDialog">
          <nitrozen-inline :icon="'ai'"></nitrozen-inline>
        </span>
        <span class="nitrozen-ai-icon" v-if="enableAi && showAiToolbar" v-on:click="openAiDialog">
          <nitrozen-inline :icon="'cross-large'"></nitrozen-inline>
        </span>
      </div>
      </input>
      <!-- Textarea -->
      <textarea v-if="type == 'textarea'" v-on:keyup="eventEmit($event, 'keyup')"
        v-on:change="eventEmit($event, 'change')" v-on:blur="eventEmit($event, 'blur')"
        v-on:focus="eventEmit($event, 'focus')" v-on:click="eventEmit($event, 'click')"
        v-on:keypress="eventEmit($event, 'keypress')"
        v-bind:class="{ 'n-input-textarea': type == 'textarea', 'n-input-right-padding': enableAi, }"
        class="n-input input-text" :maxlength="maxlength" :disabled="disabled" :autocomplete="autocomplete" :ref="id"
        :id="id" :placeholder="placeholder" :value="value" @input="valueChange">
         <span class="nitrozen-ai-icon" v-if="enableAi" v-on:click="openAiDialog">
          <nitrozen-inline :icon="'ai'"></nitrozen-inline>
        </span>
      </textarea>

      <!-- Suffix -->
      <nitrozen-input-suffix v-if="showSuffix" class="nitrozen-input-suffix nitrozen-remove-left-border"
        v-bind:class="{ 'nitrozen-suffix-padding': !custom }">
        <span v-if="custom">
          <slot />
        </span>
        <span v-else>{{ suffix }}</span>
      </nitrozen-input-suffix>


    </div>
    <div class="n-input-ai-pop" v-if="showAiToolbar">
      <div class="n-input-ai-header">
        <div class="n-input-ai-header-title">
          <span class="nitrozen-ai-icon" v-if="enableAi" v-on:click="openAiDialog">
            <nitrozen-inline :icon="'ai'"></nitrozen-inline>
          </span> Generate {{ label }} with AI
        </div>
        <div>
          <span class="nitrozen-ai-icon" v-if="enableAi && showAiToolbar" v-on:click="closeAiDialog">
            <nitrozen-inline :icon="'cross-large'"></nitrozen-inline>
          </span>
        </div>
      </div>

      <div v-if="isGenerating || generatedResponse" class="n-input-ai-response">
        <div class="description-wrapper">
          <div :class="[isGenerating ? 'description-box-active' : 'description-box']">
            <p class="description-text">
              {{ isGenerating ? loadingDots : generatedResponse }}
            </p>
            <div v-if="isGenerating" class="generating-badge">
              <span class="icon">✨</span>
              <span>Generating</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="n-input-textarea-container">
          <textarea placeholder="e.g., Write a 100 words description for a cotton t-shirt" v-model="promptValue"
            class="n-input-ai-textarea n-input-right-padding">
        </textarea>
          <div>
            <span v-if="isGenerating" v-on:click="eventEmit({ prompt: promptValue }, 'stopGeneration')"
              :class="[promptValue.length == 0 ? 'n-submit-icon-disabled n-submit-icon' : 'n-submit-icon']">
              <nitrozen-inline :icon="'stop'"></nitrozen-inline>
            </span>
            <span v-else v-on:click="eventEmit({ prompt: promptValue }, 'generateResponse')"
              :class="[promptValue.length == 0 ? 'n-submit-icon-disabled n-submit-icon' : 'n-submit-icon']">
              <nitrozen-inline :icon="'submit'"></nitrozen-inline>
            </span>
          </div>
        </div>
      </div>
      <div class="n-input-ai-button-container" v-if="!isGenerating && generatedResponse.length > 0">
        <div class="n-input-ai-generated">
          <button class="n-input-ai-button n-input-ai-regenerate-button"
            v-on:click="eventEmit({ prompt: promptValue }, 'generateResponse')">Re-
            generate</button>
        </div>
        <div class="n-input-ai-generated">
          <button class="n-input-ai-button" v-on:click="useContent({ prompt: promptValue }, 'useContent')">Use
            Content</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NInputPrefix from './NInputPrefix';
import NInputSuffix from './NInputSuffix';
import NTooltip from './../NTooltip';
import NitrozenInline from './../NInline';
import NitrozenUuid from './../../utils/NUuid';
import NitrozenDropdown from '../NDropdown'

export default {
  name: 'nitrozen-input',
  components: {
    'nitrozen-input-prefix': NInputPrefix,
    'nitrozen-input-suffix': NInputSuffix,
    'nitrozen-tooltip': NTooltip,
    'nitrozen-inline': NitrozenInline,
    'nitrozen-dropdown': NitrozenDropdown
  },
  data() {
    return {
      promptValue: "",
      showAiToolbar: false,
      loadingDots: '...',
      loaderShow: false,
      dotInterval: null,
    };
  },
  computed: {
    length: function () {
      return this.value.length;
    },
  },
  props: {
    isGenerating: {
      type: Boolean
    },
    generatedResponse: {
      type: String,
      default: ""
    },
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
    enableAi: {
      type: Boolean,
      default: false,
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
    isGenerating(newVal) {
      console.log("newval", newVal)
      if (newVal) {
        this.startDotLoader();
      } else {
        this.stopDotLoader();
      }
    },
    closeAiDialog() {
      this.showAiToolbar = false
      this.promptValue = ''
      this.$emit('close', {});
    },
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
    startDotLoader() {
      this.loadingDots = '';
      let dotCount = 0;
      this.dotInterval = setInterval(() => {
        dotCount = (dotCount + 1) % 4; // 0 to 3 dots
        this.loadingDots = '.'.repeat(dotCount);
      }, 200);
    },
    stopDotLoader() {
      clearInterval(this.dotInterval);
      this.loadingDots = '';
    },
    useContent(event, type) {
      this.showAiToolbar = false
      this.$emit(type, event);
    },
    closeAiDialog() {
      this.showAiToolbar = false
      this.$emit('close-dialog', {});
    },
    openAiDialog() {
      this.showAiToolbar = this.showAiToolbar ? false : true
    },
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
      if (type == 'generateResponse') {
        this.isGenerating = true
        setTimeout(() => {
          this.isGenerating = false
          this.generatedResponse = "Revitalize your summer wardrobe with our classic cotton polo tee. Crafted from premium cotton, it's breathable, easy to wash, and perfect for the season. Whether you're out or lounging, its relaxed fit and timeless style make it a must-have."
        }, 1000);

      }
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
