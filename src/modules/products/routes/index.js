import productList from '../components/product-list';
import productNew from '../components/product-new';
import productEdit from '../components/product-edit';
const productRoutes = [
    {
        path: '/product',
        component: productList,
        name: 'product:home'
    },
    {
        path: '/product/new',
        component: productNew,
        name: 'product:new'
    },
    {
        path: '/product/:productId/edit',
        component: productEdit,
        name: 'product:edit'
    }
];
export default productRoutes;