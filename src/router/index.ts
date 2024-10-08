import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: () =>
        import("../views/HomePage.vue")
    },
    {
      path: "/Informacie",
      name: "InfoPage",
      component: () =>
        import("../views/InfoPage.vue")
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
