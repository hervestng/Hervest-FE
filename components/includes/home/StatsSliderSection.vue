<template>
  <div class="stats-slider-section">
    <div class="stats-slider-inner">
      <div class="stats-slide">
        <div class="stats-text-block">
          <h1 class="no-margin capitalize">
            By <span class="alt-font">empowering</span> women through financial
            inclusion
          </h1>
        </div>
        <div class="stats-image-block">
          <img
            alt=""
            class="stats-image"
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
      <div class="stats-slide light-green">
        <div class="stats-text-block small">
          <h1 class="no-margin capitalize">
            And <span class="alt-font">impact investing</span> in Agriculture
          </h1>
        </div>
        <div class="stats-image-block">
          <img
            alt=""
            class="stats-image"
            loading="lazy"
            src="@/static/assets/images/mission-slide-img-2.svg"
          >
        </div>
      </div>
      <div class="stats-slide">
        <div class="stats-text-block">
          <h1 class="no-margin capitalize">
            By <span class="alt-font">empowering</span> women through financial
            inclusion
          </h1>
        </div>
        <div class="stats-image-block">
          <img
            alt=""
            class="stats-image"
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
      <div class="stats-slide light-green">
        <div class="stats-text-block small">
          <h1 class="no-margin capitalize">
            And <span class="alt-font">impact investing</span> in Agriculture
          </h1>
        </div>
        <div class="stats-image-block">
          <img
            alt=""
            class="stats-image"
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
