import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Locations from '@/components/Locations.vue';
import Contact from '@/components/Contact.vue';
import Projects from '@/components/Projects.vue';

// Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '', component: Home },
  { path: '/about', component: About },
  { path: '/locations', component: Locations },
  { path: '/contact', component: Contact },
  { path: '/projects/:id', name: 'Projects', component: Projects}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  router,
  render: h => h(App)
}).$mount("#app");
