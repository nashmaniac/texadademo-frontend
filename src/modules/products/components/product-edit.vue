<template>
    <div>
        <div class="row">
            <div class="col-12" align="right">
                <button class="btn btn-danger" @click="onClickDelete">Delete</button>
            </div>
            <div class="col-6 offset-3">
                <div class="row">
                    <div class="col-12 form-group">
                        <input v-model="name" class="form-control" type="text" placeholder="Product"/>
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
    import productService from "@/modules/products/services";

    export default {
        name: "productEdit",
        data() {
            return {
                productId: null,
                productDetail: null,
                name: null
            }
        },
        methods: {
            assignValues() {
                this.name = this.productDetail.name;
            },
            getProductDetail() {
                productService.getProductDetail(this.productId)
                .then(
                    (response) => {
                        this.productDetail = response.data;
                        this.assignValues();
                    }
                )
            },
            onClickDelete() {
                productService.deleteProduct(this.productId)
                .then(
                    (response) => {
                        this.$router.push({
                            name: 'product:home'
                        });
                    },
                    (error) => {

                    }
                );
            },
            onClickSave() {
                if (!this.name) {
                    return ;
                }
                const data = {
                    name: this.name
                };
                productService.editProduct(this.productId, data)
                    .then(
                        (response) => {
                            this.$router.push({
                                name: 'product:home'
                            });
                        },
                        (error) => {

                        }
                    );
            }
        },
        mounted() {
          this.productId = this.$route.params.productId;
          this.getProductDetail();
        }
    }
</script>

<style scoped>

</style>