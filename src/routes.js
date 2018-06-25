import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Mainpage from "./components/mainpage";
import Customers from "./components/customers";
import Customer from "./components/customer";
import Employees from "./components/employees";
import Firebase from "./components/firebase";
import E404 from "./components/E404";

import {store} from "./store/store";

const routes = [
  {
    name: 'mainpage',
    path: "",
    component: Mainpage
  },
  {
    name: 'customers',
    path: "/customers",
    component: Customers,
    beforeEnter (from, to, next){
      store.dispatch('customersData/loadCust');
      next();
    }
  },
  {
    name: 'customer',
    path: "/customers/:id",
    component: Customer
  },
  {
    name: 'employees',
    path: "/employees",
    component: Employees
  },
  {
    name: 'firebase',
    path: "/firebase",
    component: Firebase
  },
  {
    path: "*",
    component: E404
  }
];

export const router = new VueRouter({
  routes,
  mode: 'history'

})