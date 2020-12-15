import Vue from 'vue';
import Vuex from 'vuex';
import Cashbook from './modules/cashbook'
import Kategori from './modules/kategori'
import Utang from './modules/utang'
import Piutang from './modules/piutang'

// Vuex Load
Vue.use(Vuex);


// Create Store
export default new Vuex.Store({
    modules: {
        Cashbook,
        Kategori,
        Utang,
        Piutang,
    }
}) 