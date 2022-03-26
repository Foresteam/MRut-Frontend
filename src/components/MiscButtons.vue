<template>
	<div class="misc-buttons">
		<p-btn
			v-for="[index, button] of Object.entries($store.state.miscButtons)"
			:key="index"
			:label="button.label"
		/>
	</div>
</template>