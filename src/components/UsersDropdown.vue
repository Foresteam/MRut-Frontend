<template>
	<p-dropdown
		v-model="modelValue"
		:options="users"
		@change="({ value }) => $emit('update:modelValue', value)"
	>
		<template #value="slotProps">
			<User v-if="slotProps.value" v-bind="slotProps.value"/>
			<div v-else>
				<div>No user</div>
				<div>selected</div>
			</div>
		</template>
		<template #option="slotProps">
			<User v-bind="slotProps.option"/>
		</template>
	</p-dropdown>
</template>

<script>
import User from './User.vue'

export default {
	components: {
		User
	},
	props: {
		users: Array(Object),
		modelValue: Object
	}
};
</script>