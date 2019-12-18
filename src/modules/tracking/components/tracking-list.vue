<template>
   <div>
       <div class="row">
           <div class="col-6">
               <search-bar @search="onSearch"></search-bar>
           </div>
           <div class="col-6">
               <div align="right">
                   <router-link :to="{name: 'tracking:new'}" class="btn btn-primary">Add</router-link>
               </div>
           </div>
           <div class="col-12">
               <table class="table table-striped">
                   <tr>
                       <th @click="changeSort(sortingList[index])" v-for="(c, index) in columns" :key="'header-'+index">{{c}} <span v-if="currentSort===sortingList[index]"><i v-if="currentSortDir=='asc'" class="fa fa-arrow-up"></i><i v-if="currentSortDir=='desc'" class="fa fa-arrow-down"></i> </span></th>
                   </tr>
                   <tr v-for="(t, index) in trackingList" :key="'tracking-row'+index">
                       <td><router-link :to="{name: 'tracking:edit', params: {trackingId: t.id}}">{{t.product.id}}</router-link></td>
                       <td>{{t.product.name}}</td>
                       <td>{{t.timestamp | convertToCurrentTimeZone(timezone) |formatString('MM/DD/YYYY hh:mm a')}}</td>
                       <td>{{t.latitude}}</td>
                       <td>{{t.longitude}}</td>
                       <td>{{t.elevation}}</td>
                       <td>{{t.modified | convertToCurrentTimeZone(timezone) |formatString('MM/DD/YYYY hh:mm a')}}</td>
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
        name: "trackingList",
        data() {
            return {
                pageIndex: 0,
                pageSize: 100,
                trackingList: [],
                totalCount: 0,
                searchTerm: null,
                columns: [
                    'Product ID',
                    'Description',
                    'Timestamp',
                    'Latitude',
                    'Longitude',
                    'Elevation',
                    'Updated',
                ],
                sortingList: [
                    'product__id',
                    'product__name',
                    'timestamp',
                    'latitude',
                    'longitude',
                    'elevation',
                    'modified'
                ],
                timezone: null,
                currentSort: null,
                currentSortDir: null
            }
        },
        mounted() {
            this.getAllTracking();
            this.timezone = moment.tz.guess();
            console.log(this.timezone);
        },
        methods: {
            onSearch(searchTerm) {
                this.searchTerm = searchTerm;
                this.pageIndex = 0;
                this.getAllTracking();
            },
            changeSort(sorted_params) {
                if (this.currentSort !== sorted_params) {
                    this.currentSortDir = 'asc';
                } else if (!this.currentSortDir || this.currentSortDir === 'desc') {
                    this.currentSortDir = 'asc';
                } else {
                    this.currentSortDir = 'desc';
                }
                this.currentSort = sorted_params;
                this.pageIndex = 0;
                this.getAllTracking();
            },
            onPage(page) {
                this.pageIndex = page.page;
                this.pageSize = page.limit;
                this.getAllTracking();
            },
            getAllTracking() {
                trackingService.getAllTracking(this.pageIndex, this.pageSize, this.searchTerm, this.currentSort, this.currentSortDir)
                    .then(
                        (response) => {
                            const data = response.data;
                            this.pageSize = data.limit;
                            this.pageIndex = data.page;
                            this.trackingList = data.data;
                            this.totalCount = data.count;
                        }
                    )
            }
        }
    }
</script>

<style scoped>

</style>