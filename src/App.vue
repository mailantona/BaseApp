<template>
    <div class="wrapper">
        <!-- Sidebar Holder -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Base App</h3>
            </div>
            <ul class="list-unstyled components">
                <router-link :to="{name: 'mainpage'}" exact active-class="active" tag="li"><a>Главная</a></router-link>
                <router-link v-for="(item, index) in menuList" :key="index" :to="item.url" tag="li" active-class="active"><a>{{item.text}}</a>
                </router-link>
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
                        <button type="button" id="sidebarCollapse" style="background-color: #7386D5" class="btn btn-info navbar-btn">Меню</button>
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
            <!-- <app-customers></app-customers> -->
            <transition name="slide-fade" mode="out-in">

                <router-view></router-view>
            </transition>
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
/* import AppCustomers from './components/customers.vue'; */
import { mapGetters } from "vuex";
export default {
  components: {
    /* AppCustomers */
  },
  computed: {
    ...mapGetters("menu", {
      menuList: "items"
    })
  },
  methods: {},
  /*Просто пример с данными*/
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>




<style scoped>
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>













