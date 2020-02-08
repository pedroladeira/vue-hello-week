<template>
	<div class="hello-week" :class="[theme]"></div>
</template>

<script>
import Vue from 'vue';
import HelloWeekDay from './HelloWeekDay';
import HelloWeek from 'hello-week';
import 'hello-week/dist/hello.week.css';

export default {
	name: 'v-hello-week',
	props: {
		theme: {
			required: false,
			default: 'default-theme'
		},
		options: {
			required: false,
			default: () => {}
		},
		events: {
			required: false,
			default: () => {
				return [];
			}
		}
	},
	data () {
		return {
			instance: null,
			defaultOptions: {
				format: 'DD/MM/YYYY',
				weekShort: true,
				monthShort: false,
				multiplePick: false,
				defaultDate: null,
				todayHighlight: true,
				disablePastDays: false,
				disabledDaysOfWeek: null,
				disableDates: null,
				weekStart: 0, // week start on Sunday
				daysHighlight: null,
				daysSelected: null,
				range: false,
				rtl: false,
				locked: false,
				minDate: null,
				maxDate: null,
				nav: ['◀', '▶'],
				beforeCreateDay: this.onBeforeCreateDay
			},
			calendarDays: [],
		};
	},
	mounted () {
		this.instance = new HelloWeek({
			...this.defaultOptions,
			...{
				selector: this.$el,
				onLoad: () => {
					this.processDays();
					this.$emit('load');
				},
				onChange: () => {
					this.$emit('change');
				},
				onSelect: () => {
					this.$emit('select');
				},
				onClear: () => {
					this.$emit('clear');
				}
			},
			...this.options
		});
		// this.processDays();
	},
	methods: {
		onBeforeCreateDay (data) {
			data.attributes.style = {
				...data.attributes.style,
				...{
					border: '0.5px solid gray',
					fontSize: 'small',
					outline: 'none',
					padding: 0,
					display: 'block',
					height: '100px'
				}
			};
			const container = document.createElement('div');
			container.attributes.id = 'nday-' + data.date;
			data.node = {
				nodeName: 'div',
				attributes: data.attributes,
				children: [container]
			};
			this.calendarDays.push(data.day);
			return data;
		},
		processDays () {
			const ComponentCtor = Vue.extend(HelloWeekDay);
			const componentInstance = new ComponentCtor({
				propsData: {
					day: '1'
				}
			});
			componentInstance.$mount('#nday-2020-02-06');
			console.log('Events', this.calendarDays);
		}
	}
};
</script>
