<script setup lang="ts">
const endpoint = 'http://localhost:64961/graphql'
const schema = useGqfSchema(endpoint)

const {
  defineSubscription,
} = withGqfClient(schema, { subscription: { handler: 'sse' } })

const useCountdown = defineSubscription(
  gqf => gqf('subscription', [{
    countdown: $ => $({ from: 3 }, true),
  }]),
)

const num = ref(0)
let cancel: () => void | undefined
async function reset() {
  if (cancel) {
    cancel()
  }
  const countdown = await useCountdown()
  cancel = countdown.unsubscribe
  num.value = countdown.data.value?.countdown ?? 0

  const unwatch = watch(countdown.data, (val) => {
    if (val) {
      num.value = val.countdown
    }
    if (countdown.state.value === 'closed') {
      unwatch()
    }
  })
}
</script>

<template>
  <div>
    <code id="countdown-value">SSE Countdown: {{ num }}</code>
    <button id="reset-btn" @click="reset">
      Reset
    </button>
  </div>
</template>
