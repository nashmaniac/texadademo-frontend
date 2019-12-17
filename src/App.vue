<template>
  <div id="app" class="container container-fluid">
    <div class="row">
      <div class="col-12 form-group">
        <navigation></navigation>
      </div>
      <div class="col-12 form-group">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import navigation from './components/navigation'


export default {
  name: 'app',
  components: {
    navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
