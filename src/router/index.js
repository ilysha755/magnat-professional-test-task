import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/views/Error.vue'
import HomeView from '@/views/HomeView.vue'
const routes = [
  { 
    path: '/',
    component: HomeView
  },
  { 
    path: '/error',
    component: NotFound
  },  
  {
  path: "/:catchAll(.*)",
  redirect: '/error' 
  },  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
