<template>
    <button @click="onTap" class=""
        :style="[
            style
        ]"
        :class="[
            { 'button-dark': isDark },
            { 'border': isBorder }
        ]"
        >
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const { height, width, isDark } = defineProps<{
    height?: string,
    width?: string,
    isDark?: boolean,
    isBorder?: boolean,
}>()

const emit = defineEmits(['onTap'])

const onTap = () => {
    emit('onTap')
}

const style = {
        height: height,
        width: width
    }

</script>

<style scope>
    button {
        border-radius: 7px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        background-color: var(--color-bg-light);
        cursor: pointer;
    }

    .button-dark {
        border: 2px solid var(--color-border-dark);
        background-color: var(--color-bg-dark);
    }


    .button-light {
        border: 2px solid var(--color-border-dark);
        background-color: var(--color-bg-light);
    }

    @media screen and (max-width: 768px) {
        .button-dark {
            border: 1px solid var(--color-border-dark);
            background-color: var(--color-bg-dark);
        }

        .border {
            border: 2px solid var(--color-border-dark);
        }

        .button-light {
            border: 1px solid var(--color-border-dark);
        }
    }

    @media screen and (min-width: 769px) {
        .button-dark {
            border: 2px solid var(--color-border-dark);
        }

        .border {
            border: 2px solid var(--color-border-dark);
        }

        .button-light {
            border: 2px solid var(--color-border-dark);
        }
    }
</style>
