import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Checkout from "../views/Checkout.vue";
import Confirmacion from "../views/Confirmacion.vue";
import EquiposyAccesorios from "../views/EquiposyAccesorios.vue";
import Error404 from "../views/Error404.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/confirmacion",
    name: "Confirmacion",
    component: Confirmacion,
  },
  {
    path: "/equiposyaccesorios",
    name: "EquiposyAccesorios",
    component: EquiposyAccesorios,
  },
  {
    path: "/*",
    name: "Error404",
    component: Error404,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
