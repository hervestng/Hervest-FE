<template>
  <div class="career-slider-section">
    <div class="career-slider-inner">
      <div v-for="slide in widgetData" :key="slide.id" class="career-slide">
        <div class="career-sllide-text">
          <h2 class="no-margin capitalize">
            {{ slide.text }}
          </h2>
        </div>
        <div class="mission-image-block">
          <img
            :src="mediaUrl + slide.featured_image.data.attributes.url"
            loading="lazy"
            alt=""
            class="career-image"
          >
        </div>
      </div>
      <div v-for="slide in widgetData" :key="slide.id" class="career-slide">
        <div class="career-sllide-text">
          <h2 class="no-margin capitalize">
            {{ slide.text }}
          </h2>
        </div>
        <div class="mission-image-block">
          <img
            :src="mediaUrl + slide.featured_image.data.attributes.url"
            loading="lazy"
            alt=""
            class="career-image"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    widgetData: {
      type: Array,
      default () {
        return []
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
    this.$cardLoopCareers()
  }
}
</script>

<style lang="scss" scoped></style>
