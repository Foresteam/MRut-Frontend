<template>
	<div style="height: 100%" class="flex-row">
		<p-panel id="users-list" class="ui-block list-panel">
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
			<p-panel id="cmd-logs" class="list-panel">
				<template #header>
					Logs
				</template>
				<div
					v-for="v of $store.state.cmdLogs"
					:key="v.time"
					:class="{
						'flex-col': true
					}"
				>
					[{{ v.time }}] {{ v.text }}
				</div>
			</p-panel>
			<div class="ui-block-t flex-row set-wrapper">
				<p-input-text style="flex-grow: 1;" name="command" placeholder="Enter a command" @keyup.enter="sendCommand" v-model="command" />
				<p-btn icon="pi fi fi-flutter-right" class="button-bigtext" @click="sendCommand" />
			</div>
			<!-- <div class="flex-row misc-buttons">
				<MiscButtons />
			</div> -->
		</div>
	</div>
</template>

<script>
import '../assets/common-styles.css';
import { mapMutations, mapGetters } from 'vuex'
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
		command: '',
		selection: null
	}),
	methods: {
		...mapMutations(['modifyUser']),
		async sendCommand() {
			let cmd = this.command;
			this.command = '';
			await FWGUI.exposeEnd();
			await FWGUI.Exec(cmd);
		}
	}
};
</script>

<style>
	#users-list {
		width: 30%;
		min-width: 200px;
		max-width: 350px;
	}
	.list-panel {
		height: 100%;
		display: flex;
		flex-flow: column;
		overflow: hidden;
	}
	.list-panel > .p-toggleable-content {
		overflow-y: hidden;
		flex-grow: 1;
	}
	.list-panel .p-panel-content {
		overflow-y: scroll;
		padding: 0;
		height: 100%;
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

	.cmd-log {
		text-align: left;
	}
</style>