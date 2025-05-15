<template>
  <div class="nitrozen-form-input">
    <!-- Ai Icon-->

    <!-- Label -->
    <div class="n-input-label-container">
      <div class="n-input-inner-container">
        <span class="nitrozen-ai-icon" v-if="enableAi" v-on:click="openAiDialog">
          <nitrozen-inline :icon="'ai'"></nitrozen-inline>
        </span>
        <label class="n-input-label" v-if="label" :for="id">
          {{ label }} {{ required ? ' *' : '' }}
          <span class="nitrozen-tooltip-icon" v-if="showTooltip">
            <nitrozen-tooltip :tooltipText="tooltipText" position="top"></nitrozen-tooltip>
          </span>
        </label>

      </div>
      <label class="n-input-label n-input-maxlength" v-if="maxlength">{{ length }}/{{ maxlength }}</label>
    </div>
    <div class="n-input-ai-pop" v-if="showAiToolbar">
      <div class="n-input-ai-header">Generate {{ label }} with AI</div>
      <div class="n-input-ai-input">
        <label>
          Describe
        </label>
        <textarea v-model="promptValue" class="n-input input-text n-input-textarea">
        </textarea>
        <div class="n-input-ai-input-note">
          Note: Consider adding more details for better results
        </div>
      </div>
      <div class="n-input-ai-dropdown-container">
        <nitrozen-dropdown placeholder="Choose an option" label="Length" v-model="selectedLength"
          :items="lengthOptions">
        </nitrozen-dropdown>
        <nitrozen-dropdown placeholder="Choose an option" label="Tone" :items="aiTones" v-model="selectedTone">
        </nitrozen-dropdown>
      </div>
      <div v-if="isGenerating || generatedResponse" class="preview-divider">
        <div class="line"></div>
        <span>Preview</span>
        <div class="line"></div>
      </div>
      <div v-if="isGenerating || generatedResponse" class="n-input-ai-response">
        <div class="description-wrapper">
          <label class="description-label">Description</label>
          <div class="description-box">
            <p class="description-text">
              {{ generatedResponse }}
            </p>
            <div class="generating-badge">
              <span class="icon">✨</span>
              <span>Generating</span>
            </div>
          </div>
        </div>
      </div>
      <div class="n-input-ai-button-container">
        <button class="n-input-ai-button" v-if="!isGenerating && generatedResponse.length == 0"
          v-on:click="eventEmit({ prompt: promptValue, length: selectedLength, tone: selectedTone }, 'generateResponse')">Fill
          With AI</button>
        <button class="n-input-ai-stop-button" v-if="isGenerating"
          v-on:click="eventEmit({ prompt: promptValue, length: selectedLength, tone: selectedTone }, 'stopGeneration')">
          <nitrozen-inline :icon="'stop'"></nitrozen-inline> Stop</button>
        <div class="n-input-ai-generated" v-if="!isGenerating && generatedResponse.length > 0">
          <button class="n-input-ai-regenerate-button"
            v-on:click="eventEmit({ prompt: promptValue, length: selectedLength, tone: selectedTone }, 'generateResponse')">Re-Generate</button>
          <button class="n-input-ai-use-content-button"
            v-on:click="useContent({ prompt: promptValue, length: selectedLength, tone: selectedTone }, 'useContent')">Use
            Content</button>
        </div>
      </div>
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
      }" v-on:keyup="eventEmit($event, 'keyup')" v-on:change="eventEmit($event, 'change')"
        v-on:blur="eventEmit($event, 'blur')" v-on:focus="eventEmit($event, 'focus')"
        v-on:click="eventEmit($event, 'click')" v-on:keypress="eventEmit($event, 'keypress')" class="n-input input-text"
        :min="min" :max="max" :maxlength="maxlength" :type="type" :placeholder="placeholder"
        :autocomplete="autocomplete" :id="id" :ref="id" :disabled="disabled" :value="value" @input="valueChange" />

      <!-- Textarea -->
      <textarea v-if="type == 'textarea'" v-on:keyup="eventEmit($event, 'keyup')"
        v-on:change="eventEmit($event, 'change')" v-on:blur="eventEmit($event, 'blur')"
        v-on:focus="eventEmit($event, 'focus')" v-on:click="eventEmit($event, 'click')"
        v-on:keypress="eventEmit($event, 'keypress')" v-bind:class="{ 'n-input-textarea': type == 'textarea' }"
        class="n-input input-text" :maxlength="maxlength" :disabled="disabled" :autocomplete="autocomplete" :ref="id"
        :id="id" :placeholder="placeholder" :value="value" @input="valueChange"></textarea>

      <!-- Suffix -->
      <nitrozen-input-suffix v-if="showSuffix" class="nitrozen-input-suffix nitrozen-remove-left-border"
        v-bind:class="{ 'nitrozen-suffix-padding': !custom }">
        <span v-if="custom">
          <slot />
        </span>
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
      selectedLength: 'Short',
      selectedTone: 'Product Expert',
      showAiToolbar: false,
      loaderShow: false,
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
    lengthOptions: {
      type: Array,
      default: () => [{ text: 'Short', value: 'Short' }]
    },
    aiTones: {
      type: Array,
      default: () => [{ text: 'Product Expert', value: 'Product Expert' }]
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
    useContent(event, type) {
      this.showAiToolbar = false
      this.$emit(type, event);
    },
    openAiDialog: function () {
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
