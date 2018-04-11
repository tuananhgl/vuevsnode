<template>
  <div id="loginpage">
      <h1 class="title">{{ex}}</h1>
      <br>
      <b-container class="bv-example-row">
        <b-col cols="5" align-h="center" style="display:block;margin: 0 auto;">
          <b-col>
              <b-form @submit.prevent="submitForm(form)">
                <b-form-group id="exampleInputGroup1" label="Username:" label-for="exampleInput1" description="We'll never share your username with anyone else.">
                  <b-form-input id="exampleInput1" type="text" v-model="form.username" required placeholder="Enter username">
                  </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2" label="Password:" label-for="exampleInput2" >
                  <b-form-input id="exampleInput2" type="password" v-model="form.password" required placeholder="Enter password">
                  </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
          </b-col>
        </b-col>
      </b-container>
      <br>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginVue',
  data () {
    return {
      ex: 'Login To System',
      form: {},
      checkInvalidUser: false
    }
  },
  methods: {
    submitForm: async function (value) {
      const userQuery = await axios.get('http://localhost:3000/user/' + value.username + '/' + value.password)
      if (userQuery.data.length > 0) {
        this.checkInvalidUser = !this.checkInvalidUser
      }
      if (this.checkInvalidUser) {
        alert('Login Successfully')
      }
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
