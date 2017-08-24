import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Main from '@/views/Main'
import Home from '@/views/Home'
import Courses from '@/views/Courses'
import Notice from '@/views/Notice'

import CourseDetail from '@/views/CourseDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {name: 'Home', path: 'home', component: Home},
        {name: 'Courses', path: 'courses', component: Courses},
        {name: 'Notice', path: 'notice', component: Notice}
      ]
    },
    {name: 'CourseDetail', path: '/course/:courseid', component: CourseDetail}
  ]
})
