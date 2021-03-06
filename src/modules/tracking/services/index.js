import api from '@/network'
const trackingService = {
    getAllProducts: function(pageIndex, pageSize, searchTerm, currentSort, currentSortDir) {
        return api.get('/products/api/v1/', {
            params: {
                pageIndex, pageSize, searchTerm, currentSort, currentSortDir
            }
        });
    },
    createTracking: function (data) {
        return api.post('/products/api/v1/tracking', data);
    },
    getAllTracking: function(pageIndex, pageSize, searchTerm, currentSort, currentSortDir, selectedProduct, selectedDate, timezone) {
        return api.get('/products/api/v1/tracking', {
            params: {
                pageIndex, pageSize, searchTerm, currentSort, currentSortDir, selectedProduct, selectedDate, timezone
            }
        });
    },
    getTrackingDetail: function(trackingId) {
        return api.get('/products/api/v1/tracking/detail/'+trackingId);
    },
    deleteTracking: function (trackingId) {
        return api.delete('/products/api/v1/tracking/detail/'+trackingId);
    },
    editTracking: function(trackingId, data) {
        return api.put('/products/api/v1/tracking/detail/'+trackingId, data);
    }
};
export default trackingService;