// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

import App from './App'
import router from './router'
import store from './store'

/* UI-Kit */
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'

/* Vue Bootstrap */
import 'bootstrap/dist/css/bootstrap.css'

/* APP CSS */
import '@/assets/css/app.css'

import "vue2-datepicker/index.css";

Vue.config.productionTip = false

const configOptions = {
    apiKey: "AIzaSyBhWLIBI6G83WUG5EV_-205zx-xbf49Bt0",
    authDomain: "genio-lite-3bcf0.firebaseapp.com",
    databaseURL: "https://genio-lite-3bcf0.firebaseio.com",
    projectId: "genio-lite-3bcf0",
    storageBucket: "genio-lite-3bcf0.appspot.com",
    messagingSenderId: "390440306872",
    appId: "1:390440306872:web:32ffc117b289d436b50c4d",
    measurementId: "G-T6P9PLP8PG"
};

firebase.initializeApp(configOptions);

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
