import Vue from "vue";
import VueRouter from "vue-router";
import "@/assets/scripts/buttercms.js";
import App from "@/App.vue";
import Home from "@/components/Home.vue";
import Blog from "@/components/Blog.vue";
import BlogPost from "@/components/BlogPost.vue";
import Locations from "@/components/Locations.vue";
import Projects from "@/components/Projects.vue";
import Project from "@/components/Project.vue";
import Contact from "@/components/Contact.vue";
import "@/assets/scripts/filters.js";

// Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.config.devtools = true;

import Butter from "buttercms";
const butter = Butter("ec300bc1c5bd2d864c4ee6b04dfcea12e36c75b6");

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blog", name: "Blog", component: Blog },
  { path: "/blog/:slug", name: "BlogPost", component: BlogPost },
  { path: "/locations", name: "Locations", component: Locations },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/projects/:slug", name: "Project", component: Project }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  router,
  render: h => h(App)
}).$mount("#app");
