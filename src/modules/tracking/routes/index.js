import trackingList from '../components/tracking-list';
import trackingNew from '../components/tracking-new';
const trackingRoutes = [
    {
        path: '/tracking',
        component: trackingList,
        name: 'tracking:home'
    },
    {
        path: '/tracking/new',
        component: trackingNew,
        name: 'tracking:new'
    }
];
export default trackingRoutes;