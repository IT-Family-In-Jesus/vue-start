// @flow
import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '@/components/header/Header'
import StudyDocLists from '@/components/studyDocLists/StudyDocLists'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Header,
      children: [
        {
          path: '',
          redirect: 'study-doclists'
        },
        {
          path: 'study-doclists',
          name: 'study-doclists',
          component: StudyDocLists
        }
      ]
    }
  ]
})
