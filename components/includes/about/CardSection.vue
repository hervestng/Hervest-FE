<template>
  <div id="invest" class="card-section">
    <div class="stack-cards-container">
      <div class="stack-card one">
        <div class="stack-card-inner">
          <div class="stack-header">
            How you invest changes lives and communities
          </div>
          <!-- <div class="stack-stats-block">
            <div>
              <div class="stat-text dark-purple-text">
                Invest with a difference
              </div>
            </div>
          </div> -->
          <div class="cta-button-wrapper">
            <a class="cta-inline-block-filled-signup" href="https://app.hervest.ng/Signup" target="_blank">
              Invest Now
            </a>
          </div>
          <div class="stack-image-block">
            <img alt="" class="stack-image" loading="lazy" src="@/static/assets/images/Big-card-4.png" width="600">
          </div>
        </div>
      </div>
      <!-- <div class="stack-card two">
        <div class="stack-card-inner">
          <div class="stack-header two">
            Reach your financial goals with ease
          </div>
          <div class="stack-stats-block">
            <div>
              <div class="up dark-purple-text">
                Earn Interest up to
              </div>
              <div class="stat-percent pink-text">
                15%
              </div>
              <div class="stat-text dark-purple-text">
                Save towards multiple goals with <br> a personal savings plan.
              </div>
            </div>
            <div class="stats-line" />
          </div>
          <div class="stack-image-block">
            <img
              alt=""
              class="stack-image"
              sizes="(max-width: 767px) 200px, (max-width: 991px) 33vw, 42vw"
              loading="lazy"
              src="@/static/assets/images/Big-card-3.png"
            >
          </div>
        </div>
      </div> -->
      <div class="stack-card three">
        <div class="stack-card-inner">
          <div class="stack-header three">
            Earn up to 15% annual interest on your HerVest savings plan.
          </div>
          <!-- <div class="stack-stats-block">
            <div>
              <div class="stat-text grey-text">
                Don’t settle for less!
              </div>
            </div>
          </div> -->
          <div class="cta-button-wrapper">
            <a class="cta-inline-block-filled-invert" href="https://hervestng.app.link" target="_blank">
              Start Saving
            </a>
          </div>
          <div class="stack-image-block">
            <img alt="" class="stack-image" loading="lazy" sizes="(max-width: 767px) 200px, (max-width: 991px) 33vw, 42vw"
              src="@/static/assets/images/Big-card-1.png">
          </div>
        </div>
      </div>
      <div class="stack-card four">
        <div class="stack-card-inner">
          <div class="stack-header four">
            Over 40,000 women on HerVest know their money personalities
          </div>
          <!-- <div class="stack-stats-block">
            <div>
              <div class="stat-text dark-purple-text">
                and understand <br> why you act around money <br> the way you do
              </div>
            </div>
            <div class="stats-line four" />
          </div> -->
          <div class="cta-button-wrapper">
            <a class="cta-inline-block-filled-signup" href="https://form.typeform.com/to/ilQ26C" target="_blank">
              Discover yours today
            </a>
          </div>
          <div class="stack-image-block">
            <img alt="" class="stack-image" loading="lazy" sizes="(max-width: 767px) 200px, (max-width: 991px) 33vw, 42vw"
              src="@/static/assets/images/card-img-4.png" srcset="
                    @/static/assets/images/card-img-4-p-500.png  500w,
                    @/static/assets/images/card-img-4.png       1168w
                  ">
          </div>
        </div>
      </div>
      <div class="stack-card five">
        <div class="stack-card-inner">
          <div class="stack-header five">
            Access low-risk investment opportunities that grow your money
          </div>
          <!-- <div class="stack-stats-block">
            <div> -->
          <!-- <div class="up dark-purple-text"> -->
          <!-- <div class="stat-text dark-purple-text">
                while closing the
              </div>
              <div class="stat-percent pink-text">
                Gender Finance Gap
              </div> -->
          <!-- <div class="stat-text dark-purple-text">
                finance gap
              </div> -->
          <!-- </div>
          </div> -->
          <div class="cta-button-wrapper">
            <a class="cta-inline-block-filled-signup" href="/insights" target="_blank">
              Learn Now
            </a>
          </div>
          <div class="stack-image-block">
            <img alt="" class="stack-image cards" loading="lazy" src="@/static/assets/images/card-img-5.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$initWebflow()
    })
    this.$cardLoop()
  },
  methods: {}
}
</script>

<style scoped>
.cta-button-wrapper {
  margin-top: 4vw;
}
</style>
