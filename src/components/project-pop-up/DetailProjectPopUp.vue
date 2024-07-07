<template>
    <div class="sub-content">
        <Icon icon="memory:arrow-right" width="15px" height="15px"  class="icon"/>
        <div class="detail">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<style scoped>
    .icon {
        padding: 0;
        margin: 0;
        width: 20px;
        height: 20px;
        flex: 1;
    }

    .detail {
        flex: 25;
    }

    .sub-content {
        display: flex;
        flex-direction: row;
        align-items: start;
        gap: 20px;
    }
</style>
