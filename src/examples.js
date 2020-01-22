import Vue from 'vue';
import App from './examples/Examples.vue';
import HelloWeek from './plugin.js';

Vue.use(HelloWeek);
new Vue({
	render: h => h(App)
}).$mount('#app');
