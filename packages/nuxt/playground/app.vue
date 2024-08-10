<script setup lang="ts">
const nameList = ['Alice', 'Bob', 'Charlie', 'Teages']
const name = ref(nameList[0])
function changeName() {
  const index = nameList.indexOf(name.value)
  name.value = nameList[(index + 1) % nameList.length]
}

const { data: msg } = await useAsyncHello(
  () => ({ name: name.value }),
  { watch: [name] },
)

const { data, error } = await useAsyncUser({ id: '1' })
</script>

<template>
  <div>
    {{ msg?.hello }}
    <button @click="changeName">
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
