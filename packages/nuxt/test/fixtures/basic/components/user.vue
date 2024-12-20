<script setup lang="ts">
const props = defineProps<{
  user: RequireUserFragment
}>()
</script>

<template>
  <div>
    user: {{ props.user.name }} ({{ props.user.id }})
  </div>
</template>
