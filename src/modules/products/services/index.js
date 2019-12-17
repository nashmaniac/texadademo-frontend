import api from '@/network';
const productService = {
    createProduct: function(data) {
        return api.post('/products/api/v1/', data);
    },
    getProductDetail: function (productId) {
        return api.get('/products/api/v1/detail/'+productId);
    },
    deleteProduct: function(productId) {
        return api.delete('/products/api/v1/detail/'+productId);
    },
    editProduct: function(productId, data) {
        return api.put('/products/api/v1/detail/'+productId, data);
    },

};
export default productService;