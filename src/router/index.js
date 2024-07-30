import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../components/HomePage";
import SidebarMenu from "@/components/SidebarMenu.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/sidebar",
        component: SidebarMenu,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
