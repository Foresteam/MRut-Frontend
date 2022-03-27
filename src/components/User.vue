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
    </div>
</template>

<script>
import Online from './Online.vue';

export default {
    props: ['online', 'address', 'id', 'name'],
    components: {
        Online
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
</style>