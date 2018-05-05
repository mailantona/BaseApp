import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from "./menu";
import customersData from "./customersData";

export const store = new Vuex.Store({
    modules: {
        menu,
        customersData
    }





})