<template>
  <div>
    <div
      class="hero-slider w-slider"
      data-animation="cross"
      data-autoplay="true"
      data-autoplay-limit="15"
      data-delay="4000"
      data-disable-swipe="true"
      data-duration="800"
      data-easing="ease"
      data-hide-arrows="false"
      data-infinite="true"
      data-nav-spacing="3"
    >
      <div class="slide-mask w-slider-mask">
        <div
          v-for="slideData in widgetData.slider"
          :key="slideData.id"
          class="slide w-slide"
        >
          <div class="hero">
            <div class="hero-text-wrapper">
              <!-- <h2 class="purple-text no-margin capital">
                {{
                  slideData.caption === 'Her' ? 'Here for ' : widgetData.tagline
                }}
                {{ widgetData.slider.id }}
              </h2>
              <h1 class="h0 purple-text no-margin uppercase light-text">
                {{ slideData.caption }}
              </h1> -->
              <h2 class="purple-text no-margin capital">
                Helping You
              </h2>
              <h1 class="h0 purple-text no-margin uppercase light-text">
                Grow
              </h1>
              <h2 class="purple-text no-margin capital">
                Your Money
              </h2>
              <div class="hero-subtext-wrapper">
                <h3 class="light-text no-margin">
                  {{ widgetData.description }}
                </h3>
              </div>
              <div class="cta-button-wrapper">
                <a class="cta-inline-block-filled-signup" href="https://staging--hervestapp.netlify.app/Signup" target="_blank">Create A
                  Free Account
                </a>
              </div>
              <div class="button-wrapper">
                <a
                  class="button-playstore w-inline-block"
                  href="https://play.google.com/store/apps/details?id=com.hervest&amp;hl=en"
                  target="_blank"
                />
                <a
                  class="button-appstore w-inline-block"
                  href="https://apps.apple.com/ng/app/hervest/id1509714516"
                  target="_blank"
                />
              </div>
            </div>
            <div class="hero-image-block">
              <img
                alt=""
                class="slide-image"
                loading="lazy"
                :src="mediaUrl + slideData.image_url"
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
                  Your investment in Maize  has matured with a
                  <span class="green-text">12%</span> interest.
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
