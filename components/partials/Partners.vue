<template>
  <div class="partners-section">
    <h2 class="purple-text capitalize no-margin">
      {{ widgetData.title }}
    </h2>
    <div class="partners-logo-wrapper">
      <div class="partner-logo-block">
        <a href="https://africa.googleblog.com/2022/09/meet-google-for-startups-black-founders.html" target="_blank">
          <img
            alt=""
            class="partner-logo"
            loading="lazy"
            src="@/static/assets/images/google-logo.png"
          >
        </a>
      </div>
      <div class="partner-logo-block">
        <a href="https://vc4a.com/blog/2022/09/01/meet-the-women/" target="_blank">
          <img
            alt=""
            class="partner-logo"
            loading="lazy"
            src="@/static/assets/images/vc4a-logo.png"
          >
        </a>
      </div>
      <!-- <div class="partner-logo-block">
        <a href="https://www.youtube.com/watch?v=Dio55QayBac" target="_blank">
          <img
            alt=""
            class="partner-logo"
            loading="lazy"
            src="@/static/assets/images/flutterwave-logo.png"
          >
        </a>
      </div> -->
      <div class="partner-logo-block">
        <a href="https://katapult.vc/mauritius-investor-day-2022/" target="_blank">
          <img
            alt=""
            class="partner-logo"
            loading="lazy"
            src="@/static/assets/images/katapult-logo.png"
            width="185"
          >
        </a>
      </div>
      <!-- <div class="partner-logo-block">
        <a href="https://www.usaid.gov/innovation/nigeriacovid19/winners" target="_blank">
          <img alt="" class="partner-logo" loading="lazy" src="@/static/assets/images/usaid-logo.png">
        </a>
      </div> -->
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
.partner-logo {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}

.partner-logo:hover {
    -webkit-filter: none !important;
    filter: none !important;
}
</style>
