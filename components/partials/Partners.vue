<template>
  <div class="partners-section">
    <h2 class="purple-text capitalize no-margin">
      {{ widgetData.title }}
    </h2>
    <div class="partners-logo-wrapper">
      <div class="partner-logo-block">
        <a href="https://www.usaid.gov/innovation/nigeriacovid19/winners" target="_blank">
          <img
            alt=""
            class="partner-logo"
            loading="lazy"
            src="@/static/assets/images/usaid-logo.png"
          >
        </a>
      </div>
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
        <a href="https://guardian.ng/news/kwara-hervest-partner-to-help-1000-women-farmers/" target="_blank">
          <img
            alt=""
            class="partner-logo"
            loading="lazy"
            src="@/static/assets/images/Kwara_State_Govt_Greyscale.png"
          >
        </a>
      </div>
      <div class="partner-logo-block">
        <a href="https://www.youtube.com/watch?v=Dio55QayBac" target="_blank">
          <img
            alt=""
            class="partner-logo"
            loading="lazy"
            src="@/static/assets/images/Flutterwave_Greyscale.png"
          >
        </a>
      </div>
      <div class="partner-logo-block">
        <img
          alt=""
          class="partner-logo"
          loading="lazy"
          src="@/static/assets/images/V Bank (1) 1.png"
          width="185"
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
