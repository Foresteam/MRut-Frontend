<template>
	<p-dialog v-model:visible="shown" modal>
		<template #header>
			<div class="p-dialog-title">
				{{ title }}
			</div>
		</template>
		<div class="flex-col">
			<!-- <div style="margin: 15pt;"></div> -->
			<p-input-text v-model="value" @submit="onSubmit" :placeholder="query"/>
			<small style="display: block">{{ helpText }}</small>
		</div>
		<template #footer>
			<p-btn label="Cancel" class="p-button-text" @click="hide" />
			<p-btn label="Ok" @click="onSubmit" />
		</template>
	</p-dialog>
</template>

<script>
import Dialog from 'primevue/dialog';
export default {
	components: {
		'p-dialog': Dialog
	},
	props: {
		title: {
			type: String,
			default: 'Input'
		},
		query: String,
		'initial-value': String,
		'help-text': String
	},
	data: () => ({
		value: '',
		shown: false
	}),
	methods: {
		onSubmit(e) {
			this.$emit('submit', this.value);
			this.hide();
		},
		hide() {
			this.shown = false;
		},
		show() {
			this.shown = true;
		}
	}
};
</script>
