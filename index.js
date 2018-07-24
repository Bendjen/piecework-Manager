import Vue from 'vue/dist/vue.js';
import VueRouter from "vue-router";

import 'flex.css';

import routes from "./src/route";
import toTime from "./filter/toTime";  

toTime(Vue);
Vue.use(VueRouter);


const router = new VueRouter({
	routes
});

const app = new Vue({
	el: '#app',
	router: router,
})