// import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import EjerciciosPage from './views/EjerciciosPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/ejercicios',
      name: 'EjerciciosPage',
      component: EjerciciosPage
    },
  ]
})

createApp(App).use(router).mount('#app')
