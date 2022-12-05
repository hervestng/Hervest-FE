<template>
  <div class="nav">
    <nuxt-link class="logo w-inline-block w--current" to="/" />
    <div class="nav-link-wrapper">
      <nuxt-link class="nav-link w-inline-block" to="/about">
        About
      </nuxt-link>
      <a class="nav-link w-inline-block" href="https://hervest.medium.com/" target="_blank">Insights
      </a>
      <!-- <nuxt-link class="nav-link w-inline-block" to="/faqs">
        FAQ
      </nuxt-link> -->
      <nuxt-link class="nav-link w-inline-block" to="/contact">
        Contact
      </nuxt-link>
      <a class="nav-link w-inline-block" href="https://staging--hervestapp.netlify.app/" target="_blank">Log In
      </a>
      <!-- <a class="w-inline-block-filled-login" href="https://staging--hervestapp.netlify.app/" target="_blank">Log In
      </a> -->
      <a class="w-inline-block-filled-signup" href="https://staging--hervestapp.netlify.app/Signup" target="_blank">Sign Up
      </a>

      <div class="w-embed" />
      <div class="button-wrapper menu" :class="{ home: isHomePage }">
        <a
          class="button google-play w-inline-block"
          href="https://play.google.com/store/apps/details?id=com.hervest&amp;hl=en"
          target="_blank"
        />
        <a
          class="button app-store w-inline-block"
          href="https://apps.apple.com/ng/app/hervest/id1509714516"
          target="_blank"
        />
      </div>
    </div>
    <div class="hamburger">
      <div
        data-animation-type="lottie"
        data-autoplay="0"
        data-direction="1"
        data-is-ix2-target="1"
        data-default-duration="4"
        data-loop="0"
        data-duration="0"
        data-renderer="svg"
        data-ix2-initial-state="24"
        data-src="/documents/purple-hamburger.json"
        class="hamburger-lottie"
        data-w-id="8be99f33-e0da-e74f-1cc7-28892c6e02a7"
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
