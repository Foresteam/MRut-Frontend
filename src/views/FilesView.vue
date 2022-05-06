<template>
	<div class="flex-col" style="height: 100%">
		<div class="flex-row ui-block-b ui-block set-wrapper">
			<UsersDropdown
				style="flex-grow: 1"
			/>
			<p-btn-toggle
				v-model="applyForAll"
				onLabel="Apply to all"
				offLabel="Apply to all"
				onIcon="pi pi-check"
				offIcon="pi pi-times"
				style="width: 160px"
			/>
		</div>
		<div class="flex-row ui-block-v set-wrapper ui-block-v ui-block">
			<p-btn icon="pi pi-arrow-left"/>
			<p-btn icon="pi pi-arrow-right" disabled/>
			<p-btn icon="pi pi-arrow-up"/>
			<p-btn icon="pi pi-refresh"/>
			<p-btn icon="pi pi-upload"/>
			<p-input-text style="flex-grow: 1" placeholder="Here must've been path..." v-model="path"/>
		</div>
		<div class="flex-row" style="flex-grow: 1">
			<div class="flex-col">
				<p-listbox
					:options="places"
					class="ui-block ui-block-v"
					id="files-places"
					@change="placeSelected"
				>
					<template #header>
						<div class="listbox-header">
							Places
						</div>
					</template>
					<template #option="slotProps">
						<div style="text-align: left">
							<i :class="
								(() => {
									let t = { 'pi': true };
									let iconClasses = slotProps.option.icon;
									if (typeof(iconClasses) != 'object')
										iconClasses = [iconClasses];
									for (ic of iconClasses)
										t[ic] = true;
									return t;
								})()
							"></i>
							{{ slotProps.option.name }}
						</div>
					</template>
				</p-listbox>
				<p-listbox
					:options="devices"
					class="ui-block ui-block-t"
					id="files-devices"
					style="flex-grow: 1"
					@change="deviceSelected"
				>
					<template #header>
						<div class="listbox-header">
							Devices
						</div>
					</template>
					<template #option="slotProps">
						<div style="text-align: left">
							<i class="pi fi fi-disk"></i>
							Disk {{ slotProps.option.name }}
						</div>
					</template>
				</p-listbox>
			</div>
			<p-listbox
				v-model="selectedFiles"
				:options="files"
				class="ui-block ui-block-t"
				style="flex-grow: 1"
				multiple
				metaKeySelection
				@contextmenu="filesRightClick"
				id="file-manager"
				ref="fileManager"
			>
				<template #option="slotProps">
					<div style="text-align: left" class="flex-row">
						<div style="width: 70%">
							<i :class="
								// i love JS for i can do such weird things here
								(() => {
									let t = { 'pi': true };
									t[getFileIcon(slotProps.option.type)] = true;
									return t;
								})()
							"></i>
							{{slotProps.option.name}}
						</div>
						<div style="width: 15%">{{slotProps.option.size}}</div>
						<div style="width: 15%">{{slotProps.option.dateModified}}</div>
					</div>
				</template>
			</p-listbox>
			<p-context-menu :model="fileCtx" ref="filesCtxMenu"/>
			<InputDialog
				query="Enter new filename"
				:title="filesRenameTitle"
				:initial-value="lastSelectedFile?.name"
				help-text="'#' will be replaced with number, if multiple files are selected"
				@submit="doRenameFiles"
				ref="filesRenameDialog"
			/>
		</div>
	</div>
</template>

<script>
import '../assets/common-styles.css';
import UsersDropdown from '../components/UsersDropdown.vue';
import InputDialog from '../components/InputDialog.vue';

export default {
	components: {
		UsersDropdown,
		InputDialog
	},
	data() { return {
		selectedUser: null,
		selectedFiles: null,
		applyForAll: false,
		path: 'S:/School/1st September/Unlucky me/',
		files: [
			{ type: 'dir', name: 'file1', size: '1MB', dateModified: '47.07.2007' },
			{ type: 'file', name: 'file2', size: '1MB', dateModified: '47.07.2007' },
			{ type: 'dir', name: 'file3', size: '1MB', dateModified: '47.07.2007' },
			{ type: 'file', name: 'file4', size: '1MB', dateModified: '47.07.2007' },
		],
		fileCtx: [
			{ label: 'Run', icon: 'pi pi-play', command: null },
			{ label: 'Download', icon: 'pi pi-download', command: this.downloadFiles },
			{ label: 'Cut', icon: 'pi fi fi-cut', command: null },
			{ label: 'Copy', icon: 'pi pi-copy', command: null },
			{ label: 'Paste', icon: 'pi fi fi-paste', command: null, inactive: true },
			{ label: 'Rename', icon: 'pi pi-pencil', command: this.askRenameFiles },
			{ label: 'Delete', icon: 'pi pi-times', command: this.deleteFiles },
		],
		places: [
			{ name: 'Home', icon: 'pi-home' },
			{ name: 'Desktop', icon: 'pi-desktop' },
			{ name: 'Downloads', icon: 'pi-download' },
			{ name: 'Documents', icon: ['fi', 'fi-documents'] },
			{ name: 'Pictures', icon: 'pi-images' },
			{ name: 'Videos', icon: 'pi-video' },
		],
		devices: [
			{ name: 'S:\\', path: '/' }
		]
	}},
	computed: {
		lastSelectedFile() {
			return this.selectedFiles?.at(0);
		},
		filesRenameTitle() {
			return `Rename ${this.selectedFiles?.length} file${this.selectedFiles?.length > 1 ? 's' : ''}`;
		}
	},
	methods: {
		/**
		 * @param {PointerEvent} e
		 */
		filesRightClick(e) {
			// duplicate the event to select the file entry
			// but it makes even worse...
			// e.target.dispatchEvent(new MouseEvent('click', e));
			if (this.selectedFiles?.length > 0) {
				this.$refs.filesCtxMenu.hide();
				this.$refs.filesCtxMenu.show(e);
			}
			else {
				e.stopPropagation();
				e.preventDefault();
			}
		},
		getFileIcon(type) {
			return { 'dir': 'pi-folder', 'file': 'pi-file', 'drive': 'pi-drive' }[type];
		},
		placeSelected({ value }) {
		},
		deviceSelected({ value }) {
		},

		downloadFiles() {
			this.$toast.add({
				severity:'success',
				summary: 'Success',
				detail: 'Files downloaded',
				life: 3000
			});
		},
		moveFiles() {

		},
		copyFiles() {

		},
		askRenameFiles() {
			this.$refs.filesRenameDialog.show();
		},
		doRenameFiles(newNameTemplate) {
			alert('User entered: ' + newNameTemplate);
		},
		deleteFiles(e) {
			this.$confirm.require({
				message: `Delete ${this.selectedFiles.length} file${this.selectedFiles.length > 1 ? 's' : ''}? It can't be undone.`,
				header: 'Confirmation',
				icon: 'pi pi-exclamation-triangle',
				accept: () => {
					// do delete files
				}
			});
		}
	},
	mounted() {
	}
};
</script>

<style>
	#file-manager .p-listbox-item {
		padding: 0;
	}
	#file-manager .p-listbox-item > * {
		margin: 0.5rem 1rem;
	}
</style>