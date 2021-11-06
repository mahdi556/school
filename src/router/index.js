import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Teachers from '../views/Teachers.vue'
import Students from '../views/Students.vue'
import EachOne from '../views/Each.vue'
import Products from '../views/Products.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import c404 from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/single/:cat/:id',
    name: 'EachOne',
    component: EachOne
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: c404 },
  // ,{
  //   path:'*',
  //   component:'Home'
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
