import trackingList from '../components/tracking-list';
import trackingNew from '../components/tracking-new';
import trackingEdit from '../components/tracking-edit';
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
    },
    {
        path: '/tracking/:trackingId/edit',
        component: trackingEdit,
        name: 'tracking:edit'
    }
];
export default trackingRoutes;