<template>
	<div style="height: 100%" class="flex-row">
		<p-listbox
			v-model="selectedUsers"
			:options="$store.state.users"
			id="users-list"
			class="ui-block"
			multiple
		>
			<template #header>
				<div class="listbox-header">
					Users
				</div>
			</template>
			<template #option="slotProps">
				<User v-bind="slotProps.option" />
			</template>
		</p-listbox>
		<div class="ui-block flex-col" style="flex-grow: 1">
			<p-orderlist v-model="cmdLogs" id="cmd-logs">
				<template #header>
					Logs
				</template>
				<template #item="slotProps">
						<div class="cmd-log">
							{{ slotProps.item.text }}
						</div>
				</template>
			</p-orderlist>
			<div class="ui-block-t flex-row set-wrapper">
				<p-input-text style="flex-grow: 1;" name="command" placeholder="Enter a command"/>
				<p-btn icon="pi fi fi-flutter-right" class="icon-button-xsz"/>
			</div>
			<div class="flex-row" id="misc-buttons">
				<p-btn
					v-for="[index, button] of Object.entries(miscButtons)"
					:key="index"
					:label="button.label"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import '../assets/common-styles.css';
import User from '../components/User.vue';

export default {
	components: {
		User
	},
	computed: {
		// users() {
		// 	return this.$store.state.users.map((v, i) => {
		// 		v.value = i;
		// 		return v;
		// 	});
		// }
	},
	data: () => ({
		selectedUsers: null,
		cmdLogs: [
			{ text: 'hello motherfucka' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text' },
			{ text: 'a text ass' },
		],
		miscButtons: [
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
		]
	})
};
</script>

<style scoped>
	#users-list {
		height: 100%;
		width: 30%;
		min-width: 200px;
		max-width: 350px;
	}
	#cmd-logs {
		flex-grow: 1;
		overflow: hidden;
	}
	.cmd-log {
		text-align: left;
	}
	#misc-buttons {
		flex-wrap: wrap;
		justify-content: center;
	}
	@media screen {
		#misc-buttons > .p-button {
			margin: 2pt;
			width: calc(100% / 6 - 4pt);
			min-width: 120px;
		}
	}
</style>
<style>
	#users-list .p-orderlist-list {
		flex-grow: 1;
	}
	#cmd-logs .p-orderlist-list {
		flex-grow: 1;
	}
</style>