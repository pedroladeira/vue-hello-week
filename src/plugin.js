// Import vue component
import HelloWeekComponent from './HelloWeek.vue';

export default {
	install (Vue, options) {
		const defaultOptions = {
			...{
				langFolder: './langs/'
			},
			...options
		};
		Vue.prototype.$helloweekOptions = defaultOptions;
		Vue.component(HelloWeekComponent.name, HelloWeekComponent);
	}
};
