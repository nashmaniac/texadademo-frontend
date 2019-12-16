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
                <input class="form-control" v-model="timestamp" type="datetime-local" placeholder="Time"/>
            </div>
            <div class="col-12 form-group">
                <input type="text" v-model="latitude" class="form-control" placeholder="latitude"/>
            </div>
            <div class="col-12 form-group">
                <input type="text" v-model="longitude" class="form-control" placeholder="longitude"/>
            </div>
            <div class="col-12 form-group">
                <input type="text" v-model="elevation" class="form-control" placeholder="elevation"/>
            </div>
            <div class="col-12 form-group" align="left">
                <button class="btn btn-primary" @click="onClickCreate">Create New Tracking</button>
            </div>
        </div>
    </div>
</template>

<script>
    import trackingService from "@/modules/tracking/services";

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
                    return
                }
                if (!this.timestamp) {
                    return
                }
                if (!this.latitude) {
                    return
                }
                if (!this.longitude) {
                    return
                }
                if (!this.elevation) {
                    return
                }
                const data = {
                    product: this.product,
                    timestamp: this.timestamp,
                    latitude: parseFloat(this.latitude),
                    longitude: parseFloat(this.longitude),
                    elevation: parseFloat(this.elevation)
                }
                console.log(data);
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
            }
        },
        mounted() {
            this.getProducts();
        }
    }
</script>

<style scoped>

</style>