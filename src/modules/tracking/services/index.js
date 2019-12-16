import api from '@/network'
const trackingService = {
    getAllProducts: function(pageIndex, pageSize) {
        return api.get('/products/api/v1/', {
            params: {
                pageIndex, pageSize
            }
        });
    }
};
export default trackingService;