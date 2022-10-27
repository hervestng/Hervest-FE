<template>
  <div class="approved-campuses">
    <div class="approved-inner">
      <div class="approved-block">
        <div>{{ widgetData.title }}</div>
      </div>
      <div class="approved-inner-text">
        <div>
          {{ widgetData.description }}
        </div>
      </div>
    </div>
    <div class="approved-campus-grid">
      <div
        v-for="schoolImage in widgetData.logos.data"
        :key="schoolImage.id"
        class="school-image"
      >
        <img
          :src="mediaUrl + schoolImage.attributes.url"
          loading="lazy"
          alt=""
          class="school-logo"
        >
      </div>
      <div class="apply-line" />
      <div class="apply-button-block">
        <a class="button campus w-button" href="https://forms.office.com/r/Zg3iRR91RY" target="_blank">{{ widgetData.cta_text }}
        </a>
        <!-- <nuxt-link to="/contact" class="button campus w-button">
          {{ widgetData.cta_text }}
        </nuxt-link>  -->
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
  }
}
</script>

<style lang="scss" scoped></style>
