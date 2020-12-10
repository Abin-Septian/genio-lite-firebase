import Vue from 'vue';
import Vuex from 'vuex';
import Cashbook from './modules/cashbook'

// Vuex Load
Vue.use(Vuex);


// Create Store
export default new Vuex.Store({
    modules: {
        Cashbook,
    }
}) 