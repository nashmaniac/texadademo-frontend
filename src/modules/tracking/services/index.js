import api from '@/network'
const trackingService = {
    getAllProducts: function(pageIndex, pageSize) {
        return api.get('/products/api/v1/', {
            params: {
                pageIndex, pageSize
            }
        });
    },
    createTracking: function (data) {
        return api.post('/products/api/v1/tracking', data);
    }
};
export default trackingService;