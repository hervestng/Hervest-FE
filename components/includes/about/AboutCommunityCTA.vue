<template>
  <div id="community" class="community-section about">
    <div class="community-inner-block about">
      <img
        :src="mediaUrl + widgetData.featured_image.data.attributes.url"
        loading="lazy"
        alt=""
        class="community-image"
      >
      <div class="community-text-wrapper about">
        <h1 class="no-margin">
          <strong>{{ widgetData.title }}</strong>
        </h1>
        <h3>
          {{ widgetData.content }}
        </h3>
        <a
          href="http://onelink.to/62p6qb"
          target="_blank"
          class="button white w-inline-block"
        >
          <div>{{ widgetData.cta_text }}</div>
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
