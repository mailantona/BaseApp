<template>
    <div>
        <router-link :to="{name: 'customers'}"> &#8592; <a>Обратно</a></router-link>
        <br>
{{id}}

    </div>
</template>

<script>
    export default {
        computed: {
            id() {
                return this.$route.params.id;
            }
        }
        
    }
</script>

<style scoped>

</style>