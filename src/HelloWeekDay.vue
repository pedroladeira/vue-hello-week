<template>
	<div>
		<div>{{day}}</div>
		<div></div>
	</div>
</template>

<script>
export default {
	props: {
		day: {
			required: true,
			type: String,
			default: ''
		}
	}
};
</script>
