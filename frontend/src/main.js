import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD-MM-YYYY [à] hh:mm:ss')
    }
});

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')