<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div align="right">
                    <button class="btn btn-danger" @click="deleteTrackingDetail">Delete</button>
                </div>
            </div>
            <div class="col-6 offset-3" v-if="trackingDetail != null">
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
                        <button class="btn btn-primary" @click="onClickSave">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import trackingService from "@/modules/tracking/services";
    import notificationUtils from "@/utils/notifications";
    export default {
        name: "trackingEdit",
        data() {
            return {
                trackingId: null,
                trackingDetail: null,
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
        mounted() {
            this.trackingId = this.$route.params.trackingId;
            this.getTrackingDetail();
            this.getProducts();
        },
        methods: {
            assignValues() {
                this.product = this.trackingDetail.product.id;
                this.latitude = this.trackingDetail.latitude;
                this.longitude = this.trackingDetail.longitude;
                this.elevation = this.trackingDetail.elevation;
                this.timestamp = this.trackingDetail.timestamp;
            },
            getTrackingDetail() {
                trackingService.getTrackingDetail(this.trackingId)
                    .then(
                        (response) => {
                            this.trackingDetail = response.data;
                            this.assignValues();
                        },
                        (error) => {

                        }
                    );
            },
            deleteTrackingDetail() {
                trackingService.deleteTracking(this.trackingId)
                    .then(
                        (response) => {
                            this.$router.push({
                                name: 'tracking:home'
                            });
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
                            console.log(error);
                        }
                    );
            },
            onClickSave() {
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
                trackingService.editTracking(this.trackingId, data)
                    .then(
                        (response) => {
                            notificationUtils.showToast('Tracking updated successfully');
                            this.trackingDetail = response.data;
                            this.assignValues();
                            // this.$router.push({
                            //     name: 'tracking:home'
                            // });
                        },
                        (error) => {
                            notificationUtils.showToast(JSON.parse(error.request.response).message);
                        }
                    )
            }
        }
    }
</script>

<style scoped>

</style>