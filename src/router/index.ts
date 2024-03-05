import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/",
      name: "HomePage",
      component: () =>
        import("../views/HomePage.vue")
    },
    {
      path: "/Informácie ",
      name: "InfoPage",
      component: () =>
        import("../views/InfoPage.vue")
    },
    {
      path: "/Dokumenti",
      name: "DokumentPage",
      component: () =>
        import("../views/DocumentPage.vue")
    },
    {
      path: "/Galéria",
      name: "GalleryPage",
      component: () =>
        import("../views/GalleryPage.vue")
    },
    {
      path: "/Kontakt",
      name: "ContactPage",
      component: () =>
        import("../views/ContactPage.vue")
    }
  ]
})

export default router
