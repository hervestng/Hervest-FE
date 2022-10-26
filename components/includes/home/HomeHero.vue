<template>
  <div>
    <div
      data-delay="4000"
      data-animation="cross"
      class="hero-slider w-slider"
      data-autoplay="true"
      data-easing="ease"
      data-hide-arrows="false"
      data-disable-swipe="true"
      data-autoplay-limit="15"
      data-nav-spacing="3"
      data-duration="800"
      data-infinite="true"
    >
      <div class="slide-mask w-slider-mask">
        <div
          v-for="slideData in widgetData.slider"
          :key="slideData.id"
          class="slide w-slide"
        >
          <div class="hero">
            <div class="hero-text-wrapper">
              <h2 class="purple-text no-margin capital">
                {{
                  slideData.caption === 'Her' ? 'Here for ' : widgetData.tagline
                }}
                {{ widgetData.slider.id }}
              </h2>
              <h1 class="h0 purple-text no-margin uppercase light-text">
                {{ slideData.caption }}
              </h1>
              <div class="hero-subtext-wrapper">
                <h3 class="light-text no-margin">
                  {{ widgetData.description }}
                </h3>
              </div>
              <div class="button-wrapper">
                <a
                  href="https://play.google.com/store/apps/details?id=com.hervest&amp;hl=en"
                  target="_blank"
                  class="button-playstore button-play google-play w-inline-block"
                />
                <a
                  href="https://apps.apple.com/ng/app/hervest/id1509714516"
                  target="_blank"
                  class="button btn-round-radius app-store w-inline-block"
                />
              </div>
            </div>
            <div class="hero-image-block">
              <img
                :src="mediaUrl + slideData.image_url"
                loading="lazy"
                alt=""
                class="slide-image"
              >
              <div class="slide-card">
                <div>
                  You just funded your wallet with
                  <span class="purple-text">₦650,210.00</span>
                </div>
              </div>
              <div class="slide-card two">
                <div>Savings<span class="purple-text" /></div>
              </div>
              <div class="slide-card three">
                <div>New Investment Profile<span class="purple-text" /></div>
              </div>
              <div class="slide-card four">
                <div>
                  Your investment in ED Farms has matured with a
                  <span class="green-text">12%</span> increase.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hide w-slider-arrow-left">
        <div class="w-icon-slider-left" />
      </div>
      <div class="hide w-slider-arrow-right">
        <div class="w-icon-slider-right" />
      </div>
      <div class="slide-nav w-slider-nav w-round" />
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
  },

  computed: {
    mediaUrl () {
      return process.env.mediaURL
    }
  }
}
</script>

<style>
.capital {
  text-transform: capitalize;
}
</style>
