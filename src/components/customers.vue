<template>
    <div>
        <h1>{{msg}}</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Телефон</th>
                    <th scope="col">Почта</th>
                    <th scope="col">Изменить</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in customersData" 
                    :key="index" 
                >
                    <th scope="row">{{item.id_customers}}</th>
                    <td>{{item.fio}}</td>
                    <td>{{item.Phone}}</td>
                    <td>{{item.Email}}</td>
                    <td><router-link :to="'/customers/'+ item.id_customers"><a>Изменить</a></router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    
    export default {
        computed: {
            ...mapGetters("customersData", {
                customersData: "items"
            })
        },
        /*Просто пример с данными*/
        data() {
            return {
                msg: "Клиенты"
            };
        }
    };
</script>


