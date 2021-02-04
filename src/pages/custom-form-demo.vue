<template>
  <div style="display: flex">
    <div class="encloser">
      <nitrozen-custom-form-builder
        ref="form-builder"
        v-model="inputs"
        @change="formChanged"
      />
    </div>
    <div class="encloser">
      <nitrozen-custom-form
        ref="form"
        :inputs="inputs"
        v-model="response"
        @change="formResponseChanged"
      />
      <nitrozen-button v-flat-btn @click="submitFormResponse"
        >Submit</nitrozen-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "custom-form-demo",
  data() {
    return {
      inputs: [
        {
          display: "Name",
          key: "name",
          required: true,
          type: "text",
          tooltip: "Enter your name",
          default: "Nikhil Manapure",
        },
      ],
      response: {},
    };
  },
  methods: {
    formChanged(inputs) {
      // this.$forceUpdate();
      console.log(inputs);
    },
    formResponseChanged(response) {
      console.log(response);
    },
    submitFormResponse() {
      if (!this.$refs.form.isResponseValid()) {
        this.$refs.form.showValidationErrorsIfAny();
        console.error("InValid Response: ", this.response);
      } else {
        console.log("Valid Response finally: ", this.response);
      }
    },
  },
};
</script>
<style lang="less">
.form-title {
  font-size: 26px;
  font-weight: 500;
  color: #41434c;
  margin-bottom: 20px;
}

.encloser {
  padding: 40px;
  width: 100%;
}
</style>