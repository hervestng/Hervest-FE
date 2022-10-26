<template>
  <div class="community-section">
    <div class="community-inner-block">
      <div class="community-image-block">
        <img
          src="@/static/assets/images/home-img-3.jpg"
          loading="lazy"
          alt=""
          class="community-image home"
        >
      </div>
      <div class="community-text-wrapper">
        <div class="community-header-block">
          <h1 class="dark-purple-text uppercase no-margin">
            <strong v-html="widgetData.title" />
          </h1>
        </div>
        <div class="line" />
        <div class="community-value-wrapper">
          <div class="community-block">
            <h2 class="no-margin">
              <strong>Learn.</strong>
            </h2>
            <h6 class="no-margin">
              {{ widgetData.learn }}
            </h6>
          </div>
          <div class="community-block">
            <h2 class="no-margin">
              <strong>Grow.</strong>
            </h2>
            <h6 class="no-margin">
              {{ widgetData.grow }}
            </h6>
          </div>
          <div class="community-block">
            <h2 class="no-margin">
              <strong>HerVest.</strong>
            </h2>
            <h6 class="no-margin">
              {{ widgetData.herverst }}
            </h6>
          </div>
          <div class="community-block last">
            <a
              href="http://onelink.to/62p6qb"
              target="_blank"
              class="button w-inline-block"
            >
              <div>{{ widgetData.cta_text }}</div>
            </a>
          </div>
        </div>
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

<style scoped>
@media screen and (max-width: 991px) {
  .community-block.last {
    max-width: 100%;
  }
}
</style>
