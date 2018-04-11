<template>
  <div id="loginpage">
      <h1 class="title">{{ex}}</h1>
      <br>
      <b-container class="bv-example-row">
        <b-col cols="5" align-h="center" style="display:block;margin: 0 auto;">
          <b-col>
              <b-form @submit.prevent="submitForm(form)">
                <b-form-group id="exampleInputGroup1" label="Email address:" label-for="exampleInput1" description="We'll never share your email with anyone else.">
                  <b-form-input id="exampleInput1" type="email" v-model="form.email" required placeholder="Enter email">
                  </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup1" label="Password:" label-for="exampleInput1" >
                  <b-form-input id="exampleInput1" type="password" v-model="form.email" required placeholder="Enter password">
                  </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
          </b-col>
        </b-col>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'LoginVue',
  data () {
    return {
      ex: 'Login To System',
      form: {}
    }
  },
  methods: {
    submitForm: async function (val) {
    }
  }
}
</script>

<style scoped>
  #loginpage {
    font-family: monospace !important;
  }
  .title {
      display: block;
      font-family: monospace;
  }
</style>
