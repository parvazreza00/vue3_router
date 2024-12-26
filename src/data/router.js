import { createRouter, createWebHistory } from "vue-router";
// import Home from "../components/Home.vue";
// import About from "../components/About.vue";
// import Contact from "../components/Contact.vue";
// import Blog from "../components/Blog.vue";
// import RightSideBar from "../components/RightSideBar.vue";

const About = () => import("../components/About.vue");
const Contact = () => import("../components/Contact.vue");


const routers = [
    {
        path: "/",
        component: () => import("../components/Home.vue"),
        name:"home"
    },
    {
        path: "/about",
        component: About,
        name:"about"
    },
    {
        path: "/contact",
        component: Contact,
        name:"contact"
    },
    // {
    //     path: "/blog",
    //     component: Blog,
    //     name:"blog"
    // },
    {
        path: "/blog",
        components:{
            default: () => import("../components/Blog.vue"),
            right: ()=> import("../components/RightSideBar.vue")
        },
        name:"blog"
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routers
});

export default router;