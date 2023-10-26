import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Latest from "../views/Latest.vue";
import Blogs from "../views/Blogs.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/latest",
    name: "Latest",
    component: Latest,
  },
  {
    path: "/blogs/:id",
    name: "Blogs",
    component: Blogs,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  next();
});

export default router;
