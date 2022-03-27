<template>
	<div class="misc-buttons">
		<p-btn
			v-for="[index, button] of Object.entries(buttons)"
			:key="index"
			:label="button.label"
			:icon="button.icon"
			@click="button.callback"
		/>
	</div>
</template>

<script>
export default {
	props: ['buttons']
};
</script>
