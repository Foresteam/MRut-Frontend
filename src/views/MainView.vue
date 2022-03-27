<template>
	<div style="height: 100%" class="flex-row">
		<p-panel id="users-list" class="ui-block">
			<template #header>
				Users
			</template>
			<div
				v-for="v of $store.state.users"
				:key="v.id"
				:class="{
					'flex-col': true,
					'user-button': true,
					'user-button-selected': v.connected
				}"
				@click="modifyUser([v.id, { connected: !v.connected }])"
			>
				<User v-bind="v" />
			</div>
		</p-panel>
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
				<p-btn icon="pi fi fi-flutter-right" class="button-bigtext"/>
			</div>
			<!-- <div class="flex-row misc-buttons">
				<MiscButtons />
			</div> -->
		</div>
	</div>
</template>

<script>
import '../assets/common-styles.css';
import { mapMutations } from 'vuex'
import User from '../components/User.vue';
import MiscButtons from '../components/MiscButtons.vue'

export default {
	components: {
		User,
		MiscButtons
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
		]
	}),
	methods: {
		...mapMutations(['modifyUser'])
	}
};
</script>

<style>
	.misc-buttons {
		flex-wrap: wrap;
		justify-content: center;
	}
	.misc-buttons > .p-button {
		margin: 2pt;
		width: calc(100% / 6 - 4pt);
		min-width: 120px;
	}

	#users-list {
		height: 100%;
		width: 30%;
		min-width: 200px;
		max-width: 350px;
		display: flex;
		flex-flow: column;
		overflow: hidden;
	}
	#users-list > .p-toggleable-content {
		overflow-y: scroll;
		flex-grow: 1;
	}
	#users-list .p-panel-content {
		padding: 0;
	}
	.user-button {
		cursor: pointer;
		width: 100%;
		padding: 2pt 10px 2pt 10px;
	}
	.user-button > {
		width: 100%;
	}
	.user-button:hover {
		background-color: var(--surface-c);
	}
	.user-button-selected {
		background-color: var(--selected-pale);
	}
	.user-button-selected:hover {
		background-color: var(--selected-pale);
	}

	#cmd-logs {
		flex-grow: 1;
		overflow: hidden;
	}
	.cmd-log {
		text-align: left;
	}
	#cmd-logs .p-orderlist-list {
		flex-grow: 1;
	}
</style>