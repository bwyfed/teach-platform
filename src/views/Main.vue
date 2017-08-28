<template>
  <div class="main">
    <tabs></tabs>
    Main容器：
    <router-view></router-view>
  </div>
</template>

<script>
  import Tabs from '../components/tabs.vue'
export default {
    name: 'main',
    data () {
      return {
        msg: 'Main.vue msg'
      }
    },
    components: {Tabs}
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
