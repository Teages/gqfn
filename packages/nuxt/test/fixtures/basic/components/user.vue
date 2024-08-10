<script setup lang="ts">
const props = defineProps<{
  user: RequireUserFragment
}>()

const user = computed(() => props.user)
</script>

<template>
  <div>
    user: {{ user.name }} ({{ user.id }})
  </div>
</template>
