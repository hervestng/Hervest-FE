<template>
  <div class="redirect-page">
    <div class="content-wrapper">
      <h1>Join the Cliq Savings Plan</h1>
      <p v-if="redirecting">Redirecting to store...</p>
      <div v-else class="desktop-view">
        <p>Download the HerVest app to join Cliq with code: <strong>{{ code }}</strong></p>
        <StoreButtons />
      </div>
    </div>
  </div>
</template>

<script>
import { getRedirectUrl } from '~/commons/deep-link-utils'
import StoreButtons from '~/components/StoreButtons.vue'

export default {
  layout: 'default',
  components: {
    StoreButtons
  },
  asyncData({ query }) {
    return { code: query.code }
  },
  data() {
    return {
      redirecting: false
    }
  },
  mounted() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    const redirectUrl = getRedirectUrl(userAgent, { code: this.code, type: 'cliq' })

    if (redirectUrl) {
      this.redirecting = true
      window.location.href = redirectUrl
    } else {
      // Desktop: Stay here and show buttons
      this.redirecting = false
    }
  }
}
</script>

<style scoped>
.redirect-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  font-family: 'Fraunces', sans-serif;
  text-align: center;
  padding: 20px;
}

.content-wrapper {
  max-width: 600px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}

strong {
  color: #d8896a; /* HerVest accent color if applicable */
}
</style>

