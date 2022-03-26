import { createStore } from 'vuex'

export default createStore({
	state: () => ({
		title: 'MRut',
		users: [
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: true },
			{ address: '127.0.0.1', connected: false, online: true },
			{ address: '127.0.0.1', connected: false, online: true },
			{ address: '127.0.0.1', connected: false, online: true },
			{ address: '127.0.0.1', connected: false, online: true },
			{ address: '127.0.0.1', connected: false, online: true },
			{ address: '127.0.0.1', connected: false, online: true },
			{ address: '127.0.0.1', connected: false, online: true },
			{ address: '127.0.0.1', connected: false, online: true },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
			{ address: '127.0.0.1', connected: false, online: false },
		].map((v, i) => { v.id = i; return v }),
		miscButtons: [
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
		]
	}),
	getters: {
		connectedUsers(state) {
			return state.users.filter(v => v.connected && v.online);
		}
	},
	mutations: {
		modifyUser(state, [id, user]) {
			// modify only the given properties
			for (let [k, v] of Object.entries(user))
				state.users[id][k] = v;
		}
	},
	// actions: {
	// 	async fetchUsers() { /* ... */ }
	// }
})
