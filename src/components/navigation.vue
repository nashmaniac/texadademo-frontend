<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'product:home'}">Products</router-link>&nbsp;
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'tracking:home'}">Tracking</router-link>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style scoped>

</style>