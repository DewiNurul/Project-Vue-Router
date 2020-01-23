import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../views/Navbar.vue'
import Dashboard from '../views/Dashboard.vue'
import Sidebar from '../views/Sidebar.vue'
import Data_Kantin from '../views/Data_Kantin.vue'
import Data_Makanan from '../views/Data_Makanan.vue'
import Pembelian from '../views/Pembelian.vue'
import Footer from '../views/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    components:  {default: Dashboard, header: Navbar, sidebar: Sidebar, footer: Footer},

  },
  {
    path: '/data_kantin',
    name: 'data_kantin',
    components:  {default: Data_Kantin, header: Navbar, sidebar: Sidebar, footer: Footer},
  },
    
    {
      path: '/data_makanan',
      name: 'data_makanan',
      components:  {default: Data_Makanan, header: Navbar, sidebar: Sidebar, footer: Footer},
      
    },
    {
      path: '/pembelian',
      name: 'pembelian',
      components:  {default: Pembelian, header: Navbar, sidebar: Sidebar, footer: Footer},
      
    },
]

const router = new VueRouter({
  routes
})

export default router
