import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import CoinDetail from "@/views/CoinDetail";
import Error from "@/views/Error";

const history = createWebHistory();

export default createRouter({
  history,
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/coin/:id", name: "coin-detail", component: CoinDetail },
    { path: "/:catchAll(.*)", name: "Error", component: Error },
  ],
});
