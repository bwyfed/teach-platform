<template>
  <div class="main">
    {{msg}}{{$route.params.courseid}}
  </div>
</template>

<script>
  export default {
    name: 'coursedetail',
    data () {
      return {
        msg: 'CourseDetail msg'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
