<template>
	<p-toast></p-toast>
	<p-confirm-dialog></p-confirm-dialog>
	<div id="header">
		<name-card/>
		<p-tab-menu :model="items" style="flex-grow: 1">
			<template #item="{ item }">
				<app-tab :item="item"></app-tab>
			</template>
		</p-tab-menu>
	</div>
	<div id="main">
		<router-view v-slot="{ Component, route }">
			<transition name="slide" mode="out-in">
				<component :is="Component" :key="route.path" />
			</transition>
		</router-view>
	</div>
	<div id="footer">
		<div class="title2-5 shift-em" style="line-height: auto">
			{{ $store.state.title }}
        </div>
		<p-divider layout="vertical" />
        <div class="sexy-font title-2" style="flex-flow: column; line-height: 27px; text-align: left">
            <div class="_title2">
                There was footer that you will never see.
            </div>
            <div class="_title2">
                ® Thanks to the censorship.
            </div>
        </div>
	</div>
</template>

<script>
	import NameCard from './components/NameCard.vue'
	import AppTab from './components/AppTab.vue'
	import Toast from 'primevue/toast';
	import ConfirmDialog from 'primevue/confirmdialog';

	export default {
		components: {
			'p-toast': Toast,
			'p-confirm-dialog': ConfirmDialog,

			'name-card': NameCard,
			'app-tab': AppTab
		},
		data: () => ({
			items: [
				{ label: 'Main', to: '/' },
				{ label: 'Files', to: '/files' },
				{ label: 'Screen view', to: '/nahuy' }
			]
		})
	};
</script>

<style>
	@font-face {
		font-family: 'Veles';
		src: url('../public/fonts/Veles-Regular.0.9.2.otf');
	}
	@font-face {
		font-family: 'Oxygen';
		src: url('../public/fonts/Oxygen-Regular.ttf');
	}
	@font-face {
		font-family: 'Gears of Peace';
		src: url('../public/fonts/GearsOfPeace.ttf');
	}
	.sexy-font {
		font-family: 'Veles', 'Liberation mono', sans-serif !important;
	}
	.shift-em {
		font-family: 'Gears of Peace', 'Liberation mono', sans-serif !important;
	}
	.title {
		font-size: 40pt;
	}
	.title2 {
		font-size: 15pt;
	}
	.title2-5 {
		font-size: 30pt;
	}

	.slide-enter-active, .slide-leave-active {
		transition: 0.15s ease-out;
		transform: 0.15s;
	}
	.slide-enter-from {
		opacity: 0;
		transform: translateY(30%);
	}
	.slide-leave-to {
		opacity: 0;
		transform: translateY(-30%);
	}

	#app {
		/* font-family: Avenir, Helvetica, Arial, sans-serif; */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		background: transparent;
		font-family: 'Liberation mono', sans-serif;
		display: flex;
		flex-flow: column;
		overflow: hidden;
	}
	body {
		background: var(--surface-b);
		color: var(--text-color);
		margin: 0pt;
	}
	#app, body, html {
		height: 100%
	}
	#main {
		flex-grow: 1;
		overflow-y: hidden;
		margin-top: 4pt;
		margin-bottom: 4pt;
		margin-right: 2pt;
		margin-left: 2pt;
	}
	#header {
		display: flex;
		align-items: center;
		background: var(--surface-b);
	}
	#footer {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--surface-b);
		border-top: 2px solid var(--surface-d)
	}
	.ui-block {
		margin-left: 2pt !important;
		margin-right: 2pt !important;
	}
	.ui-block-b {
		margin-bottom: 2pt !important;
	}
	.ui-block-t {
		margin-top: 2pt !important;
	}
	.ui-block-v {
		margin-bottom: 2pt !important;
		margin-top: 2pt !important;
	}
	.flex-row {
		display: flex;
		flex-flow: row;
	}
	.flex-col {
		display: flex;
		flex-flow: column;
	}

	.p-tabmenuitem {
		font-size: 27pt;
	}
	.p-divider::before {
		border-left: 1px solid var(--surface-d) !important;
	}
	#footer .p-divider::before {
		border-left: 2px solid var(--surface-d) !important;
	}
</style>