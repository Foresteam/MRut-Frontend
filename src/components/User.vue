<template>
    <div class="user">
        <Online :value="online" />
        <div>
            <div>
                {{ name }} #{{ id }}
            </div>
            <div>
                {{ address }}
            </div>
        </div>
        <!-- <p-btn-toggle
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            v-model="slotProps.option.connected"
            class="p-button-rounded"
        /> -->
		<p-progress-spinner v-if="processing" strokeWidth="5px" />
    </div>
</template>

<script>
import Online from './Online.vue';
import ProgressSpinner from 'primevue/progressspinner';

export default {
    props: ['online', 'address', 'id', 'name', 'processing'],
    components: {
        Online,
		'p-progress-spinner': ProgressSpinner
    }
};
</script>


<style scoped>
    .user {
		text-align: left;
		display: flex;
		align-items: center;
	}
	.user > div:nth-of-type(1) {
		display: flex;
		flex-flow: column;
		margin-left: 7pt;
		flex-grow: 1;
	}
	.user > div:nth-of-type(2) {
		width: 35px;
		height: 35px;
	}
</style>