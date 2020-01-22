<template>
	<div class="hello-week" :class="[theme]"></div>
</template>

<script>
import HelloWeek from 'hello-week';
import 'hello-week/dist/hello.week.css';
import 'hello-week/dist/default.theme.css';

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
				nav: ['◀', '▶']
			}
		};
	},
	mounted () {
		this.instance = new HelloWeek({
			...this.defaultOptions,
			...{
				selector: this.$el,
				onLoad: () => {
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
	}
};
</script>
