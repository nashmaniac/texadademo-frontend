import Vue from 'vue';
import App from './App.vue';
import router from "@/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import timeUtils from '@/filters/timeUtils';
import {Datetime} from 'vue-datetime';
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
import Pagination from '@/components/pagination';
import SearchBar from '@/components/search-bar';
import 'font-awesome/css/font-awesome.min.css';

Vue.component('datetime', Datetime);
Vue.component('pagination', Pagination);
Vue.component('search-bar', SearchBar);
Vue.config.productionTip = false;
Vue.filter('formatString', timeUtils.formatString);
Vue.filter('convertToCurrentTimeZone', timeUtils.convertToSpecificTimezone);
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
