<template>
  <div class="campus-ambassador-images">
    <div class="campus-slide">
      <div
        v-for="(image, index) in widgetData"
        :key="index"
        class="ambassador-image"
      >
        <img :src="mediaUrl + image.attributes.url" loading="lazy" alt="">
      </div>
      <div
        v-for="(image, index) in widgetData"
        :key="index"
        class="ambassador-image"
      >
        <img :src="mediaUrl + image.attributes.url" loading="lazy" alt="">
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

  mounted () {
    this.$cardLoopCampus()
  }
}
</script>
