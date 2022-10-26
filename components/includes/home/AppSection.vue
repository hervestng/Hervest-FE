<template>
  <div class="app-section">
    <div class="app-inner-block">
      <div class="mockup-wrapper">
        <div class="phone-mockup" />
        <!-- <div class="phone-mockup small" /> -->
      </div>
      <div class="app-details-block">
        <div class="app-text-wrapper">
          <h1 class="capitalize no-margin">
            Start your investment <br>journey with
            <span class="alt-font">HerVest</span>
          </h1>
        </div>
        <div class="app-ratings-wrapper">
          <div class="star-rating-block" />
          <div class="divider" />
          <div>Finance 4.6 Stars</div>
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
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.phone-mockup {
  background-image: url('@/static/assets/images/App_Mockup_Website.png');
  width: 24rem;
}
</style>
