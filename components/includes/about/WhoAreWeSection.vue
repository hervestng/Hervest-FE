<template>
  <div id="WhoWeAre" class="about-section second">
    <div class="about-header-block">
      <h1 class="about-header">
        Who we are
      </h1>
    </div>
    <div class="who-we-are-block">
      <div>
        {{ widgetData.content }}
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

  mounted () {}
}
</script>

<style lang="scss" scoped></style>
