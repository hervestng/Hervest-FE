<template>
  <div class="vision-section">
    <div class="vision-inner-block">
      <div class="vision-image-block">
        <img
          alt=""
          class="vision-image"
          loading="lazy"
          :src="mediaUrl + widgetData.vision.featured_image"
        >
      </div>
      <div class="vision-text-block">
        <div class="vision-header">
          {{ widgetData.vision.content.title }}
        </div>
        <div class="vision-text-wrapper">
          <div
            v-marked="widgetData.vision.content.description"
            class="markedText"
            style="font-size: 47px; line-height: 1.3em"
          />
        </div>
      </div>
    </div>
    <div id="core-values" class="vision-inner-block two">
      <div class="vision-text-block two">
        <div class="smat-header">
          Our Smat Values
        </div>
        <div class="value-wrappper">
          <div class="value-block">
            <div>S - Supportive</div>
          </div>
          <h4 class="no-margin">
            {{ widgetData.values.supportive.content }}
          </h4>
        </div>
        <div class="value-wrappper">
          <div class="value-block">
            <div>M - Modern</div>
          </div>
          <h4 class="no-margin">
            {{ widgetData.values.modern.content }}
          </h4>
        </div>
        <div class="value-wrappper">
          <div class="value-block">
            <div>A - Accessible</div>
          </div>
          <h4 class="no-margin">
            {{ widgetData.values.accessibility.content }}
          </h4>
        </div>
        <div class="value-wrappper">
          <div class="value-block">
            <div>T - Truthful</div>
          </div>
          <h4 class="no-margin">
            {{ widgetData.values.truthful.content }}
          </h4>
        </div>
      </div>
      <div class="vision-image-block long">
        <img
          alt=""
          class="vision-image"
          loading="lazy"
          sizes="(max-width: 479px) 90vw, (max-width: 767px) 86vw, (max-width: 991px) 38vw, 36vw"
          src="@/static/assets/images/home-img-2.jpg"
          srcset="
            @/static/assets/images/home-img-2-p-500.jpeg 500w,
            @/static/assets/images/home-img-2-p-800.jpeg 800w,
            @/static/assets/images/home-img-2.jpg        913w
          "
        >
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

<style scoped></style>
