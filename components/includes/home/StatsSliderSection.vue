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
            sizes="(max-width: 479px) 120px, (max-width: 767px) 150px, 17vw"
            src="@/static/assets/images/mission-slide-img.png"
            srcset="
              @/static/assets/images/mission-slide-img-p-500.png 500w,
              @/static/assets/images/mission-slide-img-p-800.png 800w,
              @/static/assets/images/mission-slide-img.png       930w
            "
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
            src="@/static/assets/images/mission-slide-img-2.svg"
          >
        </div>
      </div>
      <div class="mission-slide">
        <div class="mission-text-block">
          <h1 class="no-margin capitalize">
            <span class="alt-font">Diversify your portfolio</span>. I and earn interest in <span class="alt-font">dollars</span>
          </h1>
        </div>
        <div class="mission-image-block">
          <img
            alt=""
            class="mission-image"
            loading="lazy"
            sizes="(max-width: 479px) 120px, (max-width: 767px) 150px, 17vw"
            src="@/static/assets/images/mission-slide-img.png"
            srcset="
              @/static/assets/images/mission-slide-img-p-500.png 500w,
              @/static/assets/images/mission-slide-img-p-800.png 800w,
              @/static/assets/images/mission-slide-img.png       930w
            "
          >
        </div>
      </div>
      <div class="mission-slide light-green">
        <div class="mission-text-block small">
          <h1 class="no-margin capitalize">
            Refer and earn. <span class="alt-font">Enjoy rewards when you refer your friends</span> on <span class="alt-font">HerVest</span>
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
