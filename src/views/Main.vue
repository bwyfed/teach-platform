<template>
  <div class="main">
    <div class="tabs">
      <ul>
        <router-link :to="{ name: 'Home'}" tag="li">首页</router-link>
        <router-link :to="{ name: 'Courses'}" tag="li">课程库</router-link>
        <router-link :to="{ name: 'Notice'}" tag="li">公告</router-link>
      </ul>
    </div>
    Main容器：
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Main.vue msg'
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
