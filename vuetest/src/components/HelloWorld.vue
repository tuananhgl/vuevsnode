<template>
  <div class="hello">
    <div>
      <form @submit.prevent="submitForm(form)">
        <input type="text" v-model="form.title">
        <input type="text" v-model="form.content">
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="render-data">
      <b-list-group>
        <b-list-group-item v-for="(itemNote,index) in requestData" :key="index">{{itemNote.title}}</b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      query: {},
      form: {},
      requestData: {}
    }
  },
  methods: {
    submitForm: async function (val) {
      await axios.post('http://localhost:3000/notes', val)
      this.form = {}
    }
  },
  mounted: async function () {
    let requestData = await axios.get('http://localhost:3000/notes')
    this.requestData = requestData.data
  },
  watch: {
    requestData: async function () {
      let allData = await axios.get('http://localhost:3000/notes')
      this.requestData = allData.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
