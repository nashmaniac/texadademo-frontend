<template>
    <div>
        <div class="row">
            <div class="col-6">
                <search-bar @search="onSearch"></search-bar>
            </div>
            <div class="col-6 form-group">
                <div align="right">
                    <router-link :to="{name: 'product:new'}" class="btn btn-primary">Add</router-link>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 form-group">
                <table class="table table-striped">
                    <tr>
                        <th v-for="(h, i) in columns" :key="'header-'+i">{{h}}</th>
                    </tr>
                    <tr v-for="(p, i) in productList" :key="'product-'+i">
                        <td><router-link :to="{name: 'product:edit', params: {productId: p.id}}">{{p.id}}</router-link></td>
                        <td>{{p.name}}</td>
                        <td>{{p.modified | convertToCurrentTimeZone(timezone) | formatString('MM/DD/YYYY hh:mm a')}}</td>
                    </tr>
                </table>
            </div>
            <div class="col-12">
                <pagination
                        @page="onPage"
                        :page-size="pageSize"
                        :page-index="pageIndex"
                        :total-count="totalCount"></pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import trackingService from "@/modules/tracking/services";
    import * as moment from 'moment-timezone';
    export default {
        name: "productList",
        data() {
            return {
                pageIndex: 0,
                pageSize: 100,
                productList: [],
                totalCount: 0,
                timezone: null,
                searchTerm: null,
                columns: [
                    'ID',
                    'Name',
                    'Updated'
                ]
            }
        },
        methods: {
            onSearch(searchTerm) {
                this.searchTerm = searchTerm;
                this.pageIndex = 0;
                this.getProducts();
            },
            onPage(page) {
                this.pageIndex = page.page;
                this.pageSize = page.limit;
                this.getProducts();
            },
            getProducts() {
                trackingService.getAllProducts(this.pageIndex, this.pageSize, this.searchTerm)
                .then(
                    (response) => {
                        this.productList = response.data.data;
                        this.totalCount = response.data.count;
                        this.pageIndex = response.data.page;
                        this.pageSize = response.data.limit;
                    }
                )
            }
        },
        mounted() {
            this.timezone = moment.tz.guess();
            this.getProducts();
        }
    }
</script>

<style scoped>

</style>