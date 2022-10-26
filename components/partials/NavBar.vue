<template>
  <div class="nav">
    <nuxt-link class="logo w-inline-block w--current" to="/" />

    <div class="nav-link-wrapper">
      <nuxt-link class="nav-link w-inline-block" to="/about">
        About
      </nuxt-link>
      <a class="nav-link w-inline-block"
          href="https://hervest.medium.com/" target="_blank">Insights
        </a>
      <!-- <nuxt-link class="nav-link w-inline-block" to="/faqs">
        FAQ
      </nuxt-link> -->
      <nuxt-link class="nav-link w-inline-block" to="/contact">
        Contact
      </nuxt-link>
      <a class="w-inline-block-filled-login"
          href="https://app.hervest.ng/" target="_blank">Login
        </a>
        <a class="w-inline-block-filled-signup"
          href="https://app.hervest.ng/Signup" target="_blank">Sign Up
        </a>

      <div class="w-embed" />
      <div class="button-wrapper menu" :class="{ home: isHomePage }">
        <a
          href="https://play.google.com/store/apps/details?id=com.hervest&amp;hl=en"
          target="_blank"
          class="button google-play w-inline-block"
        />
        <a
          href="https://apps.apple.com/ng/app/hervest/id1509714516"
          target="_blank"
          class="button app-store w-inline-block"
        />
      </div>
    </div>
    <div class="hamburger">
      <div
        data-w-id="8be99f33-e0da-e74f-1cc7-28892c6e02a7"
        data-animation-type="lottie"
        data-src="/documents/purple-hamburger.json"
        data-loop="0"
        data-direction="1"
        data-autoplay="0"
        data-is-ix2-target="1"
        data-renderer="svg"
        data-default-duration="4"
        data-duration="0"
        data-ix2-initial-state="24"
        class="hamburger-lottie"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isHomePage: Boolean
  },
  data () {
    return {}
  },
  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  }
}
</script>

<style scoped>
.pink-text {
  text-decoration: none;
}
</style>
