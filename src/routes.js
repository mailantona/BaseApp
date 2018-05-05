import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Mainpage from "./components/mainpage";
import Customers from "./components/customers";
import Customer from "./components/customer";
import Employees from "./components/employees";
import E404 from "./components/E404";

const routes = [
  {
    name: 'mainpage',
    path: "",
    component: Mainpage
  },
  {
    name: 'customers',
    path: "/customers",
    component: Customers
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
    path: "*",
    component: E404
  }
];

export const router = new VueRouter({
  routes,
  mode: 'history'

})