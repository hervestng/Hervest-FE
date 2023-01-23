<template>
  <div class="stats-slider-section">
    <div class="mission-slider-inner">
      <div class="mission-slide">
        <div class="mission-text-block">
          <h1 class="no-margin capitalize">
            By <span class="alt-font">empowering</span> women through financial
            inclusion
          </h1>
        </div>
        <div class="mission-image-block">
          <img
            src="@/static/assets/images/mission-slide-img.png"
            loading="lazy"
            sizes="(max-width: 479px) 120px, (max-width: 767px) 150px, 17vw"
            srcset="
              @/static/assets/images/mission-slide-img-p-500.png 500w,
              @/static/assets/images/mission-slide-img-p-800.png 800w,
              @/static/assets/images/mission-slide-img.png       930w
            "
            alt=""
            class="mission-image"
          >
        </div>
      </div>
      <div class="mission-slide light-green">
        <div class="mission-text-block small">
          <h1 class="no-margin capitalize">
            And <span class="alt-font">impact investing</span> in Agriculture
          </h1>
        </div>
        <div class="mission-image-block">
          <img
            src="@/static/assets/images/mission-slide-img-2.svg"
            loading="lazy"
            alt=""
            class="mission-image"
          >
        </div>
      </div>
      <div class="mission-slide">
        <div class="mission-text-block">
          <h1 class="no-margin capitalize">
            By <span class="alt-font">empowering</span> women through financial
            inclusion
          </h1>
        </div>
        <div class="mission-image-block">
          <img
            src="@/static/assets/images/mission-slide-img.png"
            loading="lazy"
            sizes="(max-width: 479px) 120px, (max-width: 767px) 150px, 17vw"
            srcset="
              @/static/assets/images/mission-slide-img-p-500.png 500w,
              @/static/assets/images/mission-slide-img-p-800.png 800w,
              @/static/assets/images/mission-slide-img.png       930w
            "
            alt=""
            class="mission-image"
          >
        </div>
      </div>
      <div class="mission-slide light-green">
        <div class="mission-text-block small">
          <h1 class="no-margin capitalize">
            And <span class="alt-font">impact investing</span> in Agriculture
          </h1>
        </div>
        <div class="mission-image-block">
          <img
            src="@/static/assets/images/mission-slide-img-2.svg"
            loading="lazy"
            alt=""
            class="mission-image"
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
