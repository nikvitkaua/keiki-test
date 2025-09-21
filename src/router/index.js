import Vue from "vue";
import Router from "vue-router";

import LoginPage from "@/views/LoginPage.vue";
import FactsPage from "@/views/FactsPage.vue";
import FactPage from "@/views/FactPage.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        { path: "/login", name: "Login", component: LoginPage },
        { path: "/facts", name: "Facts", component: FactsPage },
        { path: "/fact/:id", name: "Fact", component: FactPage, props: true },
        { path: "*", redirect: "/login" },
    ],
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem("auth") === "true";

    if (to.path !== "/login" && !isAuthenticated) {
        next("/login");
    } else if (to.path === "/login" && isAuthenticated) {
        next("/facts");
    } else {
        next();
    }
});

export default router;
