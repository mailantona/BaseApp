<template>
    <div class="wrapper">
        <!-- Sidebar Holder -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Base App</h3>
            </div>
            <ul class="list-unstyled components">
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li><a href="#">Home 1</a></li>
                        <li class="active"><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <ul class="list-unstyled CTAs">
                <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a></li>
                <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a></li>
            </ul>
        </nav>
        <!-- Page Content Holder -->
        <div id="content">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" id="sidebarCollapse" style="background-color: #7386D5" class="btn btn-info navbar-btn"><i class="glyphicon glyphicon-align-left"></i><span></span> Меню</button>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <!-- <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav> -->
                    </div>
                </div>
            </nav>
            <app-content></app-content>

            <!-- <h1>Collapsible Sidebar Using Bootstrap 3</h1>
            <div class="form-group">
                <label>{{total}}</label>
                <input type="text" class="form-control" v-model="cnt">
                <button class="btn btn-warning" @click="minus">-1</button>
                <button class="btn btn-success" @click="plus({coun:12})">+1</button>
            </div> -->
        </div>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapMutations
    } from "vuex";


    import AppContent from './components/Content.vue';

    
    export default {
        components: {
			AppContent
		},


        computed: {
            /*Подключаем mapGetters*/
            ...mapGetters(["cnt", "total"]),
            /*Для реактивности поля Input*/
            cnt: {
                get() {
                    return this.$store.getters.cnt;
                },
                set(value) {
                    this.$store.commit("setCnt", value);
                }
            }
        },
        methods: {
            /*Подключаем mapMutations*/
            ...mapMutations(["minus", "plus"])
        },
        /*Просто пример с данными*/
        data() {
            return {
                msg: "Welcome to Your Vue.js App"
            };
        }
    };
</script>












