<template>
  <div class="home" v-if="page_data">
    <div class="section">
      <slider :slides="page_data.top"></slider>
      <div class="announcement">
        <label>快讯</label>
        <span>今日上架的图书全部8折</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Slider from "../components/slider.vue"
  import HomePageData from "/mock/home.json"
export default {
  name: 'home',
  data () {
    return {
      page_data: null,
      selected: null
    }
  },
  created() {
      this.page_data = HomePageData;
  },
  mounted() {
      document.title = "教学系统首页";
  },
  components: {Slider}
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
