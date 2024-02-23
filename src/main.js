import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { Icon } from "@iconify/vue";
import dayjs from "dayjs"
import App from "./App.vue";
// import './function'
// import "./style.css";
import "../src/assets/css/index.css";

import Navbar from "./components/Navbar.vue"; 
import Dashboard from "./components/Dashboard.vue";
import Overview from "./components/Overview.vue"
import MyGlobal from "./function";

console.log(MyGlobal, "<><><");

const routes = [
  {
    path: "/",
    component: Dashboard
  },{
    path : '/overview',
    component: Overview
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Registrasikan komponen global
const app = createApp(App);
app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.$MyGlobal = MyGlobal
app.component("Icon", Icon);
app.component("Navbar", Navbar);
app.use(router);
app.mount("#app");
