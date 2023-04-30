<template>
  <div class="stats-slider-section">
    <div class="mission-slider-inner">
      <div class="mission-slide">
        <div class="mission-text-block">
          <h1 class="no-margin capitalize">
            <span class="alt-font">Free</span> in-app transfers, <span class="alt-font">zero</span> withdrawal charges. No <span class="alt-font"> hidden charges</span>
          </h1>
        </div>
        <div class="mission-image-block">
          <img
            alt=""
            class="mission-image"
            loading="lazy"
            src="@/static/assets/images/transfer.png"
          >
        </div>
      </div>
      <div class="mission-slide light-green">
        <div class="mission-text-block small">
          <h1 class="no-margin capitalize">
            <span class="alt-font">Saving is good</span>. <span class="alt-font"> Investing is growth</span>, and my dear,<span class="alt-font"> you need both</span>
          </h1>
        </div>
        <div class="mission-image-block">
          <img
            alt=""
            class="mission-image"
            loading="lazy"
            src="@/static/assets/images/savings.png"
          >
        </div>
      </div>
      <div class="mission-slide">
        <div class="mission-text-block">
          <h1 class="no-margin capitalize">
            <span class="alt-font">Invest in dollar-denominated</span> assets and earn interest in <span class="alt-font">Dollars</span>
          </h1>
        </div>
        <div class="mission-image-block">
          <img
            alt=""
            class="mission-image"
            loading="lazy"
            src="@/static/assets/images/dollar.png"
          >
        </div>
      </div>
      <div class="mission-slide light-green">
        <div class="mission-text-block small">
          <h1 class="no-margin capitalize">
            Refer and earn. <span class="alt-font">Enjoy cash bonuses when you refer your friends</span>
          </h1>
        </div>
        <div class="mission-image-block">
          <img
            alt=""
            class="mission-image"
            loading="lazy"
            src="@/static/assets/images/mission-slide-img-2.svg"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  }
}
</script>
