<template>
    <div class="row">
        <div class="col-6 offset-3">
            <div class="row">
                <div class="col-12 form-group">
                    <input v-model="name" class="form-control" type="text" placeholder="Product"/>
                </div>
                <div class="col-12 form-group" align="left">
                    <button class="btn btn-primary" @click="onClickCreate">Create</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import productService from "@/modules/products/services";
    import notificationUtils from "@/utils/notifications";

    export default {
        name: "productNew",
        data() {
            return {
                name: null
            }
        },
        methods: {
            onClickCreate() {
                if (!this.name) {
                    notificationUtils.showToast('Name is required');
                    return ;
                }
                const data = {
                    name: this.name
                };
                productService.createProduct(data)
                    .then(
                        (response) => {
                            notificationUtils.showToast('Product created successfully');
                            this.$router.push({
                                name: 'product:home'
                            });
                        },
                        (error) => {
                            notificationUtils.showToast(JSON.parse(error.request.response).message);
                        }
                    );
            }
        }
    }
</script>

<style scoped>

</style>