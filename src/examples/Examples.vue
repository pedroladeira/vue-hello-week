<template>
	<div>
		<h1>Hello Week Events</h1>
		<v-hello-week @load="onLoad" @change="onChange" @select="onSelect" @clear="onClear"></v-hello-week>

		<h1>Hello Week Theme</h1>
		<v-hello-week theme="test"></v-hello-week>

		<h1>Hello Week Options</h1>
		<v-hello-week :options="options"></v-hello-week>
	</div>
</template>

<script>
export default {
	data () {
		return {
			options: {
				rtl: true,
				weekStart: 1,
				disableDates: ['1/15/2020', '2/15/2020', '3/15/2020']
			}
		};
	},
	methods: {
		onLoad () {
			console.log('load');
		},
		onChange () {
			console.log('change');
		},
		onSelect () {
			console.log('select');
		},
		onClear () {
			console.log('clear');
		}
	}
};
</script>
