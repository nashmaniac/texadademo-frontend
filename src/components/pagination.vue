<template>
    <div class="container-fluid" style="margin-top:0;">
        <div class="row">
            <!-- <div class="col-md-4"></div> -->
            <div class="col-md-12">
                <div class="pagination float-right">
                    <p>Items per page:</p><select class="custom-select" v-model="currentPageSize" v-on:change="onChangePageSize">
                    <option v-for="(x, index) in pageSizeOption" :value="x" :key="'size-' + index">{{x}}</option>
                </select>
                    <div class="page-count">
                        {{start}} - {{end}} of {{totalCount}}
                    </div>
                    <button v-on:click="onPreviousPage" :disabled="!isPrevious"><i class="fa fa-arrow-left"></i></button>
                    <button v-on:click="onNextPage" :disabled="!isNext"><i class="fa fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Pagination',
        methods: {
            onChangePageSize () {
                var params = {
                    page: 0,
                    limit: this.currentPageSize
                }
                this.$emit('page', params)
            },
            onNextPage () {
                var params = {
                    page: this.currentPageIndex + 1,
                    limit: this.currentPageSize
                }
                this.$emit('page', params)
            },
            onPreviousPage () {
                var params = {
                    page: this.currentPageIndex - 1,
                    limit: this.currentPageSize
                }
                this.$emit('page', params)
            }
        },
        data () {
            return {
                currentPageSize: this.pageSize,
                currentPageIndex: this.pageIndex
            }
        },
        watch: {
            pageSize: function (newVal, oldVal) {
                this.currentPageSize = newVal
            },
            pageIndex: function (newVal, oldVal) {
                this.currentPageIndex = newVal
            }
        },
        computed: {
            start () {
                return this.currentPageIndex * this.currentPageSize
            },
            end () {
                const end = (this.currentPageIndex * this.currentPageSize) + this.currentPageSize
                return end > this.totalCount ? this.totalCount : end
            },
            isPrevious () {
                if (this.currentPageIndex === 0) {
                    return false
                }
                return true
            },
            isNext () {
                const pagePossible = Math.ceil(this.totalCount / this.currentPageSize)
                if (this.currentPageIndex + 1 < pagePossible) {
                    return true
                }
                return false
            }
        },
        props: {
            pageSizeOption: {
                type: Array,
                default: function () {
                    return [1, 10, 20, 50, 100]
                }
            },
            totalCount: {
                type: Number,
                required: true
            },
            pageIndex: {
                type: Number,
                default: 0
            },
            pageSize: {
                type: Number,
                default: 10
            }
        }
    }
</script>
<style>
    .pagination select{
        width: 18%;
        border-bottom: 2px solid darkblue;
        border-right: none;
        border-top: none;
        border-left: none;
        box-shadow:inset 0 0 10px 0 rgba(0,0,0,0.6);

    }
    .pagination select option{
        box-shadow:inset 0 0 10px 0 rgba(0,0,0,0.6);
    }
    .pagination p{
        padding: 10px;
    }
    .pagination .page-count{
        padding: 10px;
    }
    .pagination button{
        height: 40px;
        margin-left: 5px;
    }
</style>