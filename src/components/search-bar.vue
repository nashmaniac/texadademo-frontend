<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 zero-p">
                <div class="input-group mb-3">
<!--                    <div class="input-group-prepend">-->
<!--                        <span class="input-group-text" id="basic-addon1">@</span>-->
<!--                    </div>-->
                    <input type="text" class="form-control" v-model="searchTerm" v-on:input="onInput" :placeholder="placeholder" aria-describedby="basic-addon1">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'SearchBar',
        data () {
            return {
                searchTerm: '',
                timer: null
            }
        },
        props: {
            placeholder: {
                type: String,
                default: 'Search'
            },
            debounce: {
                type: Number,
                default: 3000
            }
        },
        methods: {
            onInput () {
                clearTimeout(this.timer)
                this.timer = setTimeout(this.doStuff, 500)
            },
            doStuff () {
                this.$emit('search', this.searchTerm)
            }
        }
    }
</script>
<style>
    .col-md-8{
        margin-top: 10px;
    }
    @media
    only screen and (max-width: 722px) {
        .zero-p{
            padding: 0%;
        }
    }
</style>