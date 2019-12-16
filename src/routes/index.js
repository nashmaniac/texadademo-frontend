import VueRouter from "vue-router";
import Vue from 'vue';
import trackingRoutes from '@/modules/tracking/routes';

Vue.use(VueRouter);
var routes = [
    {
        path: '',
        redirect: {
            name: 'tracking:home'
        }
    }
];
routes = routes.concat(trackingRoutes);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;