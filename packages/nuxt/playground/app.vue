<script setup lang="ts">
const nameList = ['Alice', 'Bob', 'Charlie', 'Teages']
const index = ref(0)

const params = computed(() => ({ name: nameList[index.value % nameList.length] }))
const { data: msg } = await useAsyncHello(params, { watch: [params] })

const { data, error } = await useAsyncUser({ id: '1' })
</script>

<template>
  <div>
    {{ msg?.hello }}
    <button @click="index += 1">
      Change
    </button>
  </div>
  <div v-if="data?.user">
    <User :user="data.user" />
  </div>
  <div v-else-if="error">
    Error: {{ error }}
  </div>
  <div v-else>
    Loading...
  </div>
</template>
