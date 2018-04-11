<template>
  <div id="app">
      <h1 class="title">{{ex}}</h1>
  </div>
</template>

<script>
export default {
  name: 'LoginVue',
  data () {
    return {
      ex: 'Canceled'
    }
  }
}
</script>

<style scoped>
  .title {
      display: block;
  }
</style>
