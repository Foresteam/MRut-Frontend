<template>
	<div class="flex-row" style="height: 100%">
		<div class="flex-col ui-block" id="screenview-panel">
			<div class="flex-row set-wrapper ui-block-b">
				<!-- pass the same value to update the target id -->
				<UsersDropdown style="flex-grow: 1" @change="streamTargetChanged(streamOf)" />
				<p-btn-toggle
					:modelValue="!!streamOf"
					@update:modelValue="streamTargetChanged"
					onIcon="pi pi-check"
					offIcon="pi pi-times"
				/>
			</div>
			<p-btn-toggle
				v-model="captureCursor"
				onLabel="Capture cursor"
				offLabel="Capture cursor"
				onIcon="pi pi-lock"
				offIcon="pi pi-lock-open"
				class="ui-block-b"
			/>
			<MiscButtons class="ui-block-t" :buttons="miscButtons" />
		</div>
		<div id="stream-view" class="ui-block">
			<img
				:src="streamURL"
				@mousedown.prevent="e => passMouseLeft(e, false)"
				@mouseup.prevent="e => passMouseLeft(e, true)"
				@contextmenu.prevent="e => passRightClick(e)"
			>
			<span v-if="!streamBlob" class="title" id="no-stream">The connection is <span>dead</span></span>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import '../assets/common-styles.css';
import UsersDropdown from '../components/UsersDropdown.vue';
import MiscButtons from '../components/MiscButtons.vue';

export default {
	components: {
		UsersDropdown,
		MiscButtons
	},
	data() { return {
		streamBlob: null,
		_streamURL: null,
		streamOf: null,
		captureCursor: false,

		miscButtons: [
			{ label: 'Message box', icon: 'pi pi-question-circle', callback: null },
			{ label: 'Message box', icon: 'pi pi-info-circle', callback: null },
			{ label: 'Message box', icon: 'pi pi-exclamation-triangle', callback: null },
			{ label: 'Message box', icon: 'pi pi-times-circle', callback: null },
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
			{ label: 'Do something nasty', callback: null },
		],

		lastMouseLeft: { event: null, when: 0 }
	}},
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
		...mapGetters(['targetUser']),
		onlineUsers() {
			return this.$store.state.users.filter(v => v.online);
		},
		streamURL() {
			return this._streamURL ? this._streamURL : '/no_stream.webp';
		}
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
		},
		/**
		 * @param {PointerEvent} event
		 * @param {Boolean} end Is it the second snapshot
		 * */
		passMouseLeft(event, end) {
			if (!end) {
				this.lastMouseLeft.event = event;
				this.lastMouseLeft.when = Date.now();
				return;
			}
			let startPos = { x: this.lastMouseLeft.event.offsetX, y: this.lastMouseLeft.event.offsetY };
			let endPos = { x: event.offsetX, y: event.offsetY };
			console.log(startPos, endPos);
		},
		streamTargetChanged(v) {
			this.streamOf = v ? this.targetUser?.id : null;
			// send it to the server
		}
	}
};
</script>

<style>
	.misc-buttons {
		display: flex;
		flex-flow: column;
	}
	.misc-buttons > .p-button {
		margin: 0;
		margin-top: 2pt;
		margin-bottom: 2pt;
		width: 100%;
	}

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