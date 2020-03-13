<template>
<div class="nitrozen-form-input">
     <label class="nitrozen-loader-div" v-if="loaderShow && search">
        <img src="./../../assets/loader.gif">
    </label>

    <label class="nitrozen-search-icon" v-if="showSearchIcon">
        <!-- <img src="./../../assets/search-black.svg"> -->
    <nitrozen-inline :icon="'search'"></nitrozen-inline>
    </label>
    
    <input v-if="type != 'textarea'" :type="type" :placeholder="placeholder" :id="id" @input="valueChange" :disabled="disabled" class="n-input input-text" v-bind:class="{'nitrozen-search-input-padding' : showSearchIcon}" :value="value"
     v-on:keyup="eventEmit($event,'keyup')"
     v-on:change="eventEmit($event,'change')"
     v-on:blur="eventEmit($event,'blur')"
     v-on:focus="eventEmit($event,'focus')"
     v-on:click="eventEmit($event,'click')"
     v-on:keypress="eventEmit($event,'keypress')"     
      />
    <textarea v-if="type == 'textarea'" @input="valueChange" :disabled="disabled" class="n-input input-text" v-bind:class="{'n-input-textarea' : type == 'textarea'}" :placeholder="placeholder" :value="value"></textarea>
    
    <label class="n-input-label n-input-hint" v-bind:class="{'n-input-textarea-label' : type == 'textarea'}" v-if="label">{{ label }}
        <div class="tooltip-icon" v-if="showTooltip">
            <nitrozen-tooltip :tooltipText="tooltipText"></nitrozen-tooltip>
        </div>
    </label>
    <!-- <label class="n-input-hint" v-if="hint">{{ hint }}</label> -->
   

    <!-- <div
            v-bind:class="[{ 'error-visible': showError && value == '' }]"
        >
            Field is required
        </div> -->
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
        NInputPrefix,
        NInputSuffix,
        'nitrozen-tooltip': NTooltip,
        'nitrozen-inline': NitrozenInline
    },
    data() {
        return {
            loaderShow: false
        }
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        showError: {
            type: Boolean,
            default: false
        },
        hint: {
            type: String,
            default: ''
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
            default: ''
        },
        id: {
            type: [Number, String],
            default: () => 'nitrozen-input' + NitrozenUuid()
        },
    },
    methods: {
        valueChange: function (event) {
            this.$emit('input', event.target.value);
            if (this.search) { // Do this with debouncing
                this.loaderShow = true;
            }
        },
        eventEmit: function(event,type){
            this.$emit(type, event);
        }
    }
    // render(createElement){
    //     let inputAttrs = {
    //         staticClass= "n-input input-text"
    //     }
    // }
}
</script>

<style lang="less">
@import './NInput.less';
</style>
