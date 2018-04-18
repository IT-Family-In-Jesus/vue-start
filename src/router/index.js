// @flow
import Vue from 'vue'
import Router from 'vue-router'
import studyDocLists from '@/components/studyDocLists/studyDocLists'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'studyDocLists',
      component: studyDocLists
    }
  ]
})
