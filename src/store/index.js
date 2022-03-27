import { createStore } from 'vuex'

export default createStore({
	state: () => ({
		title: 'MRut',
		users: [
			{ name: 'Slave', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: true },
			{ name: 'User', address: '127.0.0.1', connected: false, online: true },
			{ name: 'User', address: '127.0.0.1', connected: false, online: true },
			{ name: 'User', address: '127.0.0.1', connected: false, online: true },
			{ name: 'User', address: '127.0.0.1', connected: false, online: true },
			{ name: 'User', address: '127.0.0.1', connected: false, online: true },
			{ name: 'User', address: '127.0.0.1', connected: false, online: true },
			{ name: 'User', address: '127.0.0.1', connected: false, online: true },
			{ name: 'User', address: '127.0.0.1', connected: false, online: true },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
			{ name: 'User', address: '127.0.0.1', connected: false, online: false },
		].map((v, i) => { v.id = i; return v }),
		targetUser: null
	}),
	getters: {
		connectedUsers(state) {
			return state.users.filter(v => v.connected);
		},
		targetUser(state) {
			return state.targetUser?.connected ? state.targetUser : null;
		}
	},
	mutations: {
		modifyUser(state, [id, user]) {
			// modify only the given properties
			for (let [k, v] of Object.entries(user))
				state.users[id][k] = v;
		},
		setTarget(state, id) {
			state.targetUser = state.users[id];
		}
	},
	// actions: {
	// 	async fetchUsers() { /* ... */ }
	// }
})
