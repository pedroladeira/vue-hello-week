// Import vue component
import HelloWeekComponent from './HelloWeek.vue';

export default {
	install (Vue) {
		Vue.component(HelloWeekComponent.name, HelloWeekComponent);
	}
};
