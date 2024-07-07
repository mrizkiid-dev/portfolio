<template>
    <div class="bg-pop-up" @click.self="onClosePopUp">
        <div class="container">
            <div class="header">
                <h3>{{ title }}</h3>
                <div class="icon-close" @click="onClosePopUp">
                    <Icon icon="mingcute:close-circle-fill" width="30px" height="30px"/>
                </div>
            </div>
            <div class="scroll-radius-8px">
                <div class="content">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useScreen } from '@/composables/useScreen';
import { computed, ref } from 'vue';

const { title } = defineProps<{
    title: string,
}>()

const emit = defineEmits(['onTap'])

const onClosePopUp = () => {
    emit('onTap')
}
</script>

<style scoped>
    .bg-pop-up {
        width: 100svw;
        height: 100svh;
        background-color: var(--color-bg-pop-up);

        position: fixed;
        z-index: 51;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        background-color: var(--color-primary);
        border-radius: 25px;
        padding: var(--padding-horizontal-detailpopup) var(--padding-horizontal-detailpopup) 20px;

        display: flex;
        flex-direction: column;

        overflow: hidden;
        margin: 0 0 20px;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px 0 20px;
    }

    .icon-close {
        cursor: pointer;
    }

    .content {
        display: flex;
        flex-direction: column;
        margin: 20px 20px 0;
        gap: 10px;
    }

    .images {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 40px;
    }

    .images img {
        border-radius: 10px;
    }

    .scroll-radius-8px {
        overflow-y: auto;
        padding-right: var(--padding-horizontal-detailpopup); 
        margin-right: var(--padding-horizontal-detailpopup); 
        height: 100%;
        width: 100%;
    }

    .scroll-radius-8px::-webkit-scrollbar {
        width: 8px;
    }

    .scroll-radius-8px::-webkit-scrollbar-thumb {
        background-color: #c5c5c5;
        border-right: 2px solid transparent;
        border-left: none;
        border-radius: 99px;
        background-clip: padding-box;  
    }

    @media screen and (min-width: 786px) {
        .container {
            width: 80svw;
            height: 80svh;
        }

        .header h3 {
            font-size: 20px;
            font-weight: 700;
        }

        .content {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 786px) {
        .container {
            width: 90svw;
            height: 90svh;
        }

        .header h3 {
            font-size: 16px;
            font-weight: 700;
        }

        .content {
            font-size: 14px;
        }
    }
    
</style>