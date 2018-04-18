// @flow
import Vue from 'vue'
import Router from 'vue-router'
import StudyDocLists from '@/components/StudyDocLists/StudyDocLists'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'StudyDocLists',
      component: StudyDocLists
    }
  ]
})
