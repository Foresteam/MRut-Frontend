<template>
	<div class="flex-row" style="height: 100%">
		<div class="flex-col ui-block" id="screenview-panel">
			<div class="flex-row set-wrapper">
				<UsersDropdown style="flex-grow: 1"/>
				<p-btn-toggle
					v-model="connected"
					onIcon="pi pi-check"
					offIcon="pi pi-times"
				/>
			</div>
		</div>
		<div id="stream-view" class="ui-block">
			<img
				:src="streamURL"
				@mousedown="e => passMouseLeft(e, false)"
				@mouseup="e => passMouseLeft(e, true)"
				@contextmenu="e => passRightClick(e)"
			>
			<span v-if="!streamBlob" class="title" id="no-stream">The connection is <span>dead</span></span>
		</div>
	</div>
</template>

<script>
import '../assets/common-styles.css';
import UsersDropdown from '../components/UsersDropdown.vue';

export default {
	components: {
		UsersDropdown
	},
	data: () => ({
		streamBlob: null,
		_streamURL: null,
		connected: false,

		lastMouseLeft: { event: null, when: 0 }
	}),
	watch: {
		streamBlob(_, newBlob) {
			let urlCreator = window.URL || window.webkitURL;
			if (newBlob) {
				urlCreator.revokeObjectURL(this._streamURL);
				this._streamURL = urlCreator.createObjectURL(newBlob);
			}
			else
				this._streamURL = null;
		}
	},
	computed: {
		onlineUsers() {
			return this.$store.state.users.filter(v => v.online);
		},
		streamURL() {
			return this._streamURL ? this._streamURL : '/no_stream.webp';
		},
	},
	methods: {
		/** @param {Blob} image */
		receiveImage(image) {
			this.streamBlob = image;
		},
		/** @param {PointerEvent} event */
		passRightClick(event) {
			let [x, y] = [event.offsetX, event.offsetY];
			// do something
			event.stopPropagation();
			event.preventDefault();
		},
		/**
		 * @param {PointerEvent} event
		 * @param {Boolean} end Is it the second snapshot
		 * */
		passMouseLeft(event, end) {
			event.stopPropagation();
			event.preventDefault();

			if (!end) {
				this.lastMouseLeft.event = event;
				this.lastMouseLeft.when = Date.now();
				return;
			}
			let startPos = { x: this.lastMouseLeft.event.offsetX, y: this.lastMouseLeft.event.offsetY };
			let endPos = { x: event.offsetX, y: event.offsetY };
			console.log(startPos, endPos);
		}
	}
};
</script>

<style>
	#no-stream {
		font-weight: bold;
		position: absolute;
		z-index: 100;
		margin-top: -10%;
		text-shadow: 0 0 4px black;
	}
	#no-stream > span {
		color: black;
		text-shadow: 0 0 4px white;
	}
	#screenview-panel {
		width: 30%;
		min-width: 200px;
		max-width: 350px;
	}
	#stream-view {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		max-height: 100%;
	}
	#stream-view > img {
		max-height: 100%;
		max-width: 100%;
		/* z-index: -1; */
	}
</style>