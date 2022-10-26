<template>
  <div class="partners-section">
    <h2 class="purple-text capitalize no-margin">
      {{ widgetData.title }}
    </h2>
    <div class="partners-logo-wrapper">
      <div class="partner-logo-block">
        <img
          src="@/static/assets/images/usaid-logo.png"
          loading="lazy"
          alt=""
          class="partner-logo"
        >
      </div>
      <div class="partner-logo-block">
        <img
          src="@/static/assets/images/google-logo.png"
          loading="lazy"
          alt=""
          class="partner-logo"
        >
      </div>
      <div class="partner-logo-block">
        <img
          src="@/static/assets/images/Kwara_State_Govt_Greyscale.png"
          loading="lazy"
          alt=""
          class="partner-logo"
        >
      </div>
      <div class="partner-logo-block">
        <img
          src="@/static/assets/images/Flutterwave_Greyscale.png"
          loading="lazy"
          alt=""
          class="partner-logo"
        >
      </div>
      <div class="partner-logo-block">
        <img
          src="@/static/assets/images/V Bank (1) 1.png"
          loading="lazy"
          alt=""
          class="partner-logo"
        >
      </div>     
    </div>
  </div>
</template>

<script>
export default {
  props: {
    widgetData: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.partner-logo-block {
  filter: grayscale(100%);
}
</style>
