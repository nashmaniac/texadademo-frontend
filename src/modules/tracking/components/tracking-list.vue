<template>
   <div>
       <div class="row">
           <div class="col-12">
               <div align="right">
                   <router-link :to="{name: 'tracking:new'}" class="btn btn-primary">Add</router-link>
               </div>
               <table class="table table-striped">
                   <tr>
                       <th v-for="(c, index) in columns" :key="'header-'+index">{{c}}</th>
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
                columns: [
                    'Product ID',
                    'Description',
                    'Timestamp',
                    'Latitude',
                    'Longitude',
                    'Elevation',
                    'Updated',
                ],
                timezone: null
            }
        },
        mounted() {
            this.getAllTracking();
            this.timezone = moment.tz.guess();
            console.log(this.timezone);
        },
        methods: {
            getAllTracking() {
                trackingService.getAllTracking(this.pageIndex, this.pageSize)
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