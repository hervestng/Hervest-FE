<template>
  <div class="funding-section">
    <div class="funding-inner-flex">
      <div class="funding-text-wrapper">
        <h1 class="dark-purple-text no-margin">
          <strong>{{ widgetData.primary.title }}</strong>
        </h1>
        <div class="funding-text">
          {{ widgetData.primary.content }}
        </div>
        <a
          class="button w-inline-block"
          :href="widgetData.primary.cta_link"
          target="_blank"
        >
          <div>{{ widgetData.primary.cta_text }}</div>
        </a>
      </div>
      <div class="funding-image-block">
        <img
          alt=""
          class="funding-image"
          loading="lazy"
          :src="
            mediaUrl + widgetData.primary.featured_image.data.attributes.url
          "
        >
      </div>
    </div>
    <div class="funding-inner-flex two">
      <div class="funding-image-block">
        <img
          alt=""
          class="funding-image"
          loading="lazy"
          :src="
            mediaUrl + widgetData.secondary.featured_image.data.attributes.url
          "
        >
      </div>
      <div class="funding-text-wrapper">
        <h1 class="dark-purple-text no-margin">
          <strong> {{ widgetData.secondary.title }}</strong>
        </h1>
        <div class="funding-text">
          {{ widgetData.secondary.content }}
        </div>
        <a
          class="button w-inline-block"
          :href="widgetData.secondary.cta_link"
          target="_blank"
        >
          <div>{{ widgetData.secondary.cta_text }}</div>
        </a>
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
  },
  computed: {
    mediaUrl () {
      return process.env.mediaURL
    }
  }
}
</script>

<style lang="scss" scoped></style>
