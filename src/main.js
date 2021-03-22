import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import '@fortawesome/fontawesome-free/css/all.css' // アイコン系のやつ
// import VeeValidate from 'vee-validate' webpackでエラーはくからいったんなし

Vue.config.productionTip = false
// Vue.use(VueAxios, axios)
// Vue.use(VeeValidate)

// firebase関連
var config = {
  apiKey: 'AIzaSyBFYYJ0l5JRH-6LbanXe5n2vREE5ZiVrQs',
  authDomain: 'vuetify-a8b69.firebaseapp.com',
  databaseURL: 'https://vuetify-a8b69.firebaseio.com',
  projectId: 'vuetify-a8b69',
  storageBucket: 'vuetify-a8b69.appspot.com',
  messagingSenderId: '457033549534',
  appId: '1:457033549534:web:a2f1c4c1addeae2c1a644f',
  measurementId: 'G-4H0JEMGM7W'
}
firebase.initializeApp(config)

new Vue({
  router,
  vuetify,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')

// ドキュメントだと↓↓だった
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
