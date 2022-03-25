<template>
	<i :class="{'pi': true, 'pi-circle-fill': true, 'online': value}"></i>
</template>

<script>
export default {
	props: ['value']
};
</script>

<style scoped>
	.online {
		color: var(--success-color)
	}
	i {
		color: var(--surface-d);
		text-shadow: 0px 0px 2px var(--primary-color-text);
	}
</style>