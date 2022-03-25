<template>
	<div class="flex-row" style="height: 100%">
		<div style="display: flex; justify-content: center; align-items: center; flex-grow: 1; max-height: 100%">
			<img :src="streamURL" style="max-height: 100%; max-width: 100%">
			<span v-if="!streamBlob" class="title" id="no-stream">The connection is <span>dead</span></span>
		</div>
	</div>
</template>

<script>
import '../assets/common-styles.css';

export default {
	data: () => ({
		streamBlob: null,
		_streamURL: null
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
		streamURL() {
			return this._streamURL ? this._streamURL : '/no_stream.webp';
		}
	},
	methods: {
		/**
		 * @param {Blob} image
		 */
		receiveImage(image) {
			this.streamBlob = image;
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
</style>