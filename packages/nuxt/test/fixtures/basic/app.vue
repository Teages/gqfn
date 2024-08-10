<script setup lang="ts">
const { data } = await useAsyncUser({ id: '1' })
</script>

<template>
  <div v-if="data">
    <User :user="data.user" />
  </div>
  <div v-else>
    Loading...
  </div>
</template>
