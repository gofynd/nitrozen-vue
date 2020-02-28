<template>
<div id="button">

    <!-- Flat Button -->
    <div class="rounded">
        <nitrozen-button @click="someFunc" :content="`Primary Flat ${numberOfClick}`"></nitrozen-button>
        <div class="hover-new">
            <nitrozen-button :content="'Hover Flat'"></nitrozen-button>
        </div>
        <nitrozen-button :content="'Disabled Flat'" :disabled="true"></nitrozen-button>
    </div>

    <!-- Flat Stroke Button -->
    <div class="rounded">
        <nitrozen-button v-stroke-btn :content="'Primary Stroke'"></nitrozen-button>
        <div class="hover-new">
            <nitrozen-button v-stroke-btn :content="'Hover Stroke'"></nitrozen-button>
        </div>
        <nitrozen-button v-stroke-btn :content="'Disabled Stroke'" :disabled="true"></nitrozen-button>
    </div>

    <!-- Rounded Button -->
    <div class="rounded">
        <nitrozen-button :content="'Rounded'" :rounded="true"></nitrozen-button>
        <div class="hover-new">
            <nitrozen-button :content="'Hover'" :rounded="true"></nitrozen-button>
        </div>
        <nitrozen-button :content="'Disabled'" :rounded="true" :disabled="true"></nitrozen-button>
    </div>

    <!-- Rounded Stroke Button -->
    <div class="rounded">
        <nitrozen-button v-stroke-btn :content="'Rounded'" :rounded="true"></nitrozen-button>
        <div class="hover-new">
            <nitrozen-button v-stroke-btn :content="'Hover'" :rounded="true"></nitrozen-button>
        </div>
        <nitrozen-button v-stroke-btn :content="'Disabled'" :rounded="true" :disabled="true"></nitrozen-button>
    </div>

    <!-- <div class="rounded">
       <nitrozen-button :href="'https://google.com'" :content="'Href'"></nitrozen-button>
       <nitrozen-button :href="'https://google.com'" :content="'Disabled'" :disabled="true"></nitrozen-button>       
    </div> -->

    <!-- Secondary Flat Button -->
    <div class="rounded">
        <nitrozen-button :content="'Primary Stroke'" :theme="'secondary'"></nitrozen-button>
        <div class="hover-new">
            <nitrozen-button :content="'Hover Stroke'" :theme="'secondary'"></nitrozen-button>
        </div>
        <nitrozen-button :content="'Disabled Stroke'" :disabled="true" :theme="'secondary'"></nitrozen-button>
    </div>

    <!-- Secondary Stroke Button -->
    <!-- <div class="rounded">
       <nitrozen-button v-stroke-btn :content="'Primary'" :theme="'secondary'"></nitrozen-button>
       <div class="hover-new">
          <nitrozen-button v-stroke-btn :content="'Hover'" :theme="'secondary'"></nitrozen-button>         
       </div>
       <nitrozen-button v-stroke-btn :content="'Disabled'" :disabled="true" :theme="'secondary'"></nitrozen-button>
    </div> -->

    <!-- Secondary Rounded Button -->
    <div class="rounded">
        <nitrozen-button :content="'Rounded'" :theme="'secondary'" :rounded="true"></nitrozen-button>
        <div class="hover-new">
            <nitrozen-button :content="'Hover'" :theme="'secondary'" :rounded="true"></nitrozen-button>
        </div>
        <nitrozen-button :content="'Disabled'" :disabled="true" :rounded="true" :theme="'secondary'"></nitrozen-button>
    </div>

    <!-- Secondary Rounded Stroke Button -->
    <!-- <div class="rounded">
       <nitrozen-button v-stroke-btn :content="'Primary'" :rounded="true" :theme="'secondary'"></nitrozen-button>
       <div class="hover-new">
          <nitrozen-button v-stroke-btn :content="'Hover'" :rounded="true" :theme="'secondary'"></nitrozen-button>         
       </div>
       <nitrozen-button v-stroke-btn :content="'Disabled'" :rounded="true" :disabled="true" :theme="'secondary'"></nitrozen-button>
    </div> -->

    <div class="rounded">
        <nitrozen-toggle-btn></nitrozen-toggle-btn>
        <nitrozen-toggle-btn :curstate="true"></nitrozen-toggle-btn>
    </div>
</div>
</template>

<script>
export default {
    name: 'button',
    methods: {
        someFunc() {
            // console.log('in function')
            this.numberOfClick += 1;
        }
    }
}
</script>

<style lang="less">
.rounded {
    margin-top: 2%;
    display: flex;
    justify-content: space-around;
}

.hover-new {
    .n-button {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.09), 0 6px 20px 0 rgba(0, 0, 0, 0.09) !important;
    }
}
</style>
