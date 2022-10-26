<template>
  <div class="testimonial-section">
    <div class="testimonial-inner">
      <div class="testimonal-text-wrapper">
        <h1 class="no-margin capitalize">
          What our <br>women say about us
        </h1>
      </div>
      <div class="testimony-slider-wrapper">
        <div class="slider-mask w-slider-mask">
          <splide :options="options">
            <splide-slide v-for="slideData in widgetData" :key="slideData.id">
              <div class="w-slide">
                <div class="slide-wrapper">
                  <div class="testimony-block">
                    <div class="quote-marks" />
                    <div class="testimony-image-block">
                      <img
                        :src="mediaUrl + slideData.attributes.avatar"
                        loading="lazy"
                        alt=""
                        class="testimonial-image"
                      >
                    </div>
                    <h4 class="no-margin">
                      {{ slideData.attributes.quote }}
                    </h4>
                    <div class="testimony-name">
                      {{ slideData.attributes.name }}
                    </div>
                  </div>
                </div>
              </div>
            </splide-slide>
          </splide>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
if (!globalThis.document) {
  global.document = {}
}
export default {
  props: {
    widgetData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      options: {
        autoplay: true,
        rewind: true,
        width: 800,
        rewindSpeed: 900,
        perPage: 1
      }
    }
  },
  computed: {
    mediaUrl () {
      return process.env.mediaURL
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  }
}
</script>

<style>
.splide__pagination {
  display: none !important;
}
.splide {
  padding-bottom: 3vw;
  position: relative;
  outline: none;
}
.splide__arrows {
  position: absolute;
  bottom: 0px;
  display: flex;
}
.splide__arrow {
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 50px !important;
  height: 50px !important;
  margin-right: 0px !important;
  margin-left: 0px !important;
  border-style: solid !important;
  border-width: 1px !important;
  border-color: #540445 !important;
  border-radius: 50% !important;
  background-image: url('@/static/assets/images/left-arrow.svg') !important;
  background-position: 50% 50% !important;
  background-size: 60% !important;
  background-repeat: no-repeat !important;
  transform: none !important;
  display: block !important;
  opacity: 1 !important;
  background-color: transparent !important;
}
.splide__arrow > svg {
  display: none;
}
.splide__arrow--next {
  background-image: url('@/static/assets/images/right-arrow.svg') !important;
  margin-left: 1.5vw !important;
}
@media screen and (max-width: 767px) {
  .splide {
    padding-bottom: 50px;
  }
}
</style>
