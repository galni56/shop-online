import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore({
    state: {
        products:[]
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
         return axios('http://localhost:3000/product', {
            method: "GET"
         })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data)
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error
            })
        }
    },
    getters: {
        PRODUCTS(state){
            return state.products
        }
    }
});


const app = createApp(App);

app.mount('#app');
app.use(store);

import 'bootstrap/dist/js/bootstrap.js';    
