import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'
import Car from '../views/Car.vue'
import Seller from '../views/Seller.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/order',
    name: 'Order',
    component: Order
  },

  {
    path: '/seller',
    name: 'Seller',
    component: Seller
  },

  {
    path: '/car',
    name: 'Car',
    component: Car
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
