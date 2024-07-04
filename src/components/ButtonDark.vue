<template>
    <button @click="onTap" class="">
        <span>{{ title }}</span>
    </button>
</template>

<script setup lang="ts">

const {title} = defineProps<{
    title: string
}>()
const emit = defineEmits(['onTap'])

const onTap = () => {
    emit('onTap')
}
</script>

<style scope>
    
</style>
