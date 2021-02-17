import Halamanutama from 'layouts/MainLayout.vue'
import Kustombaju from 'pages/kustombaju.vue'
import index from 'pages/index.vue'
import Produkbaju from 'pages/produkbaju.vue'
import Detailproduk from 'pages/detailproduk.vue'
import Kustomjahit from 'pages/Kustomjahit.vue'
import Celanadetail from 'pages/celanadetail.vue'
import Bajupriadetail from 'pages/bajupriadetail.vue'
import Bajuwanitadetail from 'pages/bajuwanitadetail.vue'
import Rokdetail from 'pages/rokdetail.vue'
import Tentang from 'pages/tentang.vue'
import Panduan from 'pages/panduan.vue'
const routes = [
  {
    path: '/',
    component: Halamanutama,
    children: [
      { 
        path: '', 
        component: index
      },
      { 
        path: 'kustombaju', 
        component: Kustombaju
      },
      { 
        path: 'kustombaju/kustomjahit', 
        component: Kustomjahit
      },
      { 
        path: 'kustombaju/kustomjahit/celanadetail', 
        component: Celanadetail
      },
      { 
        path: 'kustombaju/kustomjahit/bajupriadetail', 
        component: Bajupriadetail
      },
      { 
        path: 'kustombaju/kustomjahit/bajuwanitadetail', 
        component: Bajuwanitadetail
      },
      { 
        path: 'kustombaju/kustomjahit/rokdetail', 
        component: Rokdetail
      },

      { 
        path: 'produkbaju/details/:id', props:true,
        component:Detailproduk,
      },
      { 
        path: 'produkbaju', 
        component: Produkbaju,
      },
      { 
        path: 'tentang', 
        component: Tentang
      },
      { 
        path: 'panduan', 
        component: Panduan
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
