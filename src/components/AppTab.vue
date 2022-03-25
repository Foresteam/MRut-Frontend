<template>
    <div class="p-tabmenuitem" role="tab">
        <a :href="`#${item.to}`" class="p-menuitem-link" role="presentation" style="background: var(--surface-b)">
            <span class="p-menuitem-text">
                {{ item.label }}
            </span>
        </a>
    </div>
</template>

<script>
export default {
    props: ['item'],
    mounted() {
        console.log(this.item);
    }
};
</script>
