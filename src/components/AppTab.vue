<template>
    <div class="p-tabmenuitem" role="tab">
        <div class="p-menuitem-link" role="presentation" style="background: transparent" @click="() => go(item.to)">
            <span class="p-menuitem-text">
                {{ item.label }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
	methods: {
		go(to) {
			location.href = `#${to}`;
		}
	}
};
</script>

<style scoped>
	.p-menuitem-link {
		cursor: pointer;
	}
</style>