import { createRouter, createWebHistory } from 'vue-router'
import ServicesView from '@/views/ServicesView.vue'
import HomeView from '@/views/HomeView.vue'
import PriceView from '@/views/PriceView.vue'
import SeoView from '@/views/SeoView.vue'
import DesignView from '@/views/DesignView.vue'
import SitesView from '@/views/SitesView.vue'
import SmmView from '@/views/SmmView.vue'
import AboutUsView from '@/components/AboutUs.vue'
import CooperationView from '@/components/Cooperation.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'HomeView',
        component: HomeView
      },
      {
        path: '/services',
        name: 'ServicesView',
        component: ServicesView
      },
      {
        path: '/price',
        name: 'PriceView',
        component: PriceView
      },{
        path: '/seo',
        name: 'SeoView',
        component: SeoView
      },{
        path: '/disign',
        name: 'DesignView',
        component: DesignView
      },{
        path: '/sites',
        name: 'SitesView',
        component: SitesView
      },{
        path: '/smm',
        name: 'SmmView',
        component: SmmView
      },{
        path: '/aboutus',
        name: 'AboutUsView',
        component: AboutUsView
      },{
        path: '/cooperation',
        name: 'CooperationView',
        component: CooperationView
      }
    ]

})

export default router