<template>
    <div class="col-6 offset-3" align="center">
        <div class="row">
            <div class="col-12 form-group">
                <select class="form-control" v-model="product" placeholder="Product">
                    <option value="null">Select Product</option>
                    <option :value="p.id" v-for="(p,index) in productList" :key="'product-option'+index">{{p.name}}</option>
                </select>
            </div>
            <div class="col-12 form-group">
                <datetime placeholder="Time in your timezone" input-class="form-control" type="datetime" v-model="timestamp"></datetime>
            </div>
            <div class="col-12 form-group">
                <input type="text" v-model="latitude" class="form-control" placeholder="Latitude"/>
            </div>
            <div class="col-12 form-group">
                <input type="text" v-model="longitude" class="form-control" placeholder="Longitude"/>
            </div>
            <div class="col-12 form-group">
                <input type="text" v-model="elevation" class="form-control" placeholder="Elevation"/>
            </div>
            <div class="col-12 form-group" align="left">
                <button class="btn btn-primary" @click="onClickCreate">Create New Tracking</button>
            </div>
        </div>
    </div>
</template>

<script>
    import trackingService from "@/modules/tracking/services";
    import notificationUtils from "@/utils/notifications";

    export default {
        name: "trackingNew",
        data() {
            return {
                product: null,
                timestamp: null,
                latitude: null,
                longitude: null,
                elevation: null,
                pageSize: 50,
                pageIndex: 0,
                productList: []
            }
        },
        methods: {
            onClickCreate() {
                if (!this.product) {
                    notificationUtils.showToast('Product is required');
                    return
                }
                if (!this.timestamp) {
                    notificationUtils.showToast('Timestamp is required');
                    return
                }
                if (!this.latitude) {
                    notificationUtils.showToast('Latitude is required');
                    return
                }
                if (!this.longitude) {
                    notificationUtils.showToast('Longitude is required');
                    return
                }
                if (!this.elevation) {
                    notificationUtils.showToast('Elevation is required');
                    return
                }
                if (isNaN(this.latitude)) {
                    notificationUtils.showToast('Latitude should be a number');
                    return
                }
                if (isNaN(this.longitude)) {
                    notificationUtils.showToast('Longitude should be a number');
                    return
                }
                if (isNaN(this.elevation)) {
                    notificationUtils.showToast('Elevation should be a number');
                    return
                }
                const data = {
                    product: this.product,
                    timestamp: this.timestamp,
                    latitude: parseFloat(this.latitude),
                    longitude: parseFloat(this.longitude),
                    elevation: parseFloat(this.elevation)
                };
                trackingService.createTracking(data)
                    .then(
                        (response) => {
                            notificationUtils.showToast('Tracking created successfully');
                            this.$router.push({
                                name: 'tracking:home'
                            });
                        },
                        (error) => {
                            notificationUtils.showToast(JSON.parse(error.request.response).message);
                        }
                    )
            },
            getProducts() {
                trackingService.getAllProducts(this.pageIndex, this.pageSize)
                    .then(
                        (response) => {
                            this.productList = response.data.data;
                        },
                        (error) => {
                            notificationUtils.showToast(JSON.parse(error.request.response).message);
                        }
                    );
            }
        },
        mounted() {
            this.getProducts();
        }
    }
</script>

<style scoped>

</style>