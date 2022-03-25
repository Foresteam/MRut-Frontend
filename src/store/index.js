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
	})
})
