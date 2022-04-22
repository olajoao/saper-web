import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/TheHome.vue'

const routes = [
  {
    path: "/",
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router