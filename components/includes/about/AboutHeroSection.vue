<template>
  <div class="about-section">
    <div class="about-text-wrapper">
      <div class="about-text-inner">
        <div class="about-text">
          {{ widgetData.top_title }}
          <span class="alt-font"> {{ widgetData.bottom_title }}</span>
        </div>
        <h2>{{ widgetData.description }}</h2>
      </div>
      <div class="button-wrapper">
        <a
          href="https://play.google.com/store/apps/details?id=com.hervest&amp;hl=en"
          target="_blank"
          class="button google-play w-inline-block"
        />
        <a
          href="https://apps.apple.com/ng/app/hervest/id1509714516"
          target="_blank"
          class="button app-store pink w-inline-block"
        />
      </div>
    </div>
    <div class="about-image-block">
      <img
        src="@/static/assets/images/about-img.jpg"
        loading="lazy"
        sizes="(max-width: 767px) 90vw, (max-width: 991px) 36vw, 35vw"
        srcset="
          @/static/assets/images/about-img-p-500.jpeg 500w,
          @/static/assets/images/about-img.jpg        785w
        "
        alt=""
        class="about-image"
      >
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
