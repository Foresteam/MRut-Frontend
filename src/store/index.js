import { createStore } from 'vuex'

export default createStore({
	state: () => ({
		title: 'MRut',
		users: [],
		cmdLogs: [],
		targetUser: null
	}),
	getters: {
		connectedUsers(state) {
			return state.users.filter(v => v.connected);
		},
		targetUser(state) {
			return state.targetUser?.connected ? state.targetUser : null;
		},
		cmdLogs(state) {
			return state.cmdLogs;
		}
	},
	mutations: {
		modifyUser(state, [id, user]) {
			console.log(id, user);
			if (!state.users[id])
				return;
			// modify only the given properties
			for (let [k, v] of Object.entries(user))
				state.users[id][k] = v;
		},
		setUser(state, user) {
			console.log(user);
			state.users[user.id] = user;
		},
		setTarget(state, id) {
			state.targetUser = state.users[id];
		},
		cmdLog(state, log) {
			state.cmdLogs.push(log);
		}
	},
	// actions: {
	// 	async fetchUsers() { /* ... */ }
	// }
})
