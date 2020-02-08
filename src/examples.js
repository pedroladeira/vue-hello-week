import Vue from 'vue';
import App from './examples/Examples.vue';
import HelloWeek from './plugin.js';
import '../scss/index.scss';

Vue.use(HelloWeek);
new Vue({
	render: h => h(App)
}).$mount('#app');
