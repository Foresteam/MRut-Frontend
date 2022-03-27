<template>
	<p-dropdown
		:modelValue="targetUser"
		:options="connectedUsers"
		@change="({ value: v }) => setTarget(v.id)"
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
import { mapGetters, mapMutations } from 'vuex';
import User from './User.vue'

export default {
	components: {
		User
	},
	computed: {
		...mapGetters(['targetUser', 'connectedUsers'])
	},
	methods: {
		...mapMutations(['setTarget'])
	}
};
</script>