import { createWebHistory, createRouter } from "vue-router";
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ContactUsPage from './pages/ContactUsPage.vue';
import ServicePage from './pages/ServicePage.vue';

const routes = [
    {
        path: '/',
        name: '/',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    },
    {
        path: '/services',
        name: 'services',
        component: ServicePage
    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: ContactUsPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router