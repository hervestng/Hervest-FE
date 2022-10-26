<template>
  <div>
    <div class="campus-text">
      <div class="dark-purple-text">
        <div>
          {{ widgetData.about_text }}
        </div>
      </div>
      <div class="text-line" />
      <div class="purple-text">
        <h2>
          {{ widgetData.goal_text }}
        </h2>
      </div>
    </div>
    <div
      class="banner-image"
      :style="{
        backgroundImage:
          'url(' + mediaUrl + widgetData.banner.data.attributes.url + ')'
      }"
    />
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
  }
}
</script>
