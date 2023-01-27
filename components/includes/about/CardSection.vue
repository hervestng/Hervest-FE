<template>
  <div id="invest" class="card-section">
    <div class="stack-cards-container">
      <div class="stack-card one">
        <div class="stack-card-inner">
          <div class="stack-header">
            Invest with a difference.
          </div>
          <div class="stack-stats-block">
            <div>
              <div class="stat-text dark-purple-text">
                How you invest changes lives and communities. <br> Fund a female farmer today and earn highly <br> competitive returns on the go.
              </div>
            </div>
            <!-- <div class="stats-line" /> -->
          </div>
          <div class="cta-button-wrapper">
            <a class="cta-inline-block-filled-signup" href="https://staging--hervestapp.netlify.app/Signup" target="_blank">
              Get Started
            </a>
          </div>
          <div class="stack-image-block">
            <img
              alt=""
              class="stack-image"
              loading="lazy"
              sizes="(max-width: 767px) 200px, (max-width: 991px) 33vw, 42vw"
              src="@/static/assets/images/card-img-1.png"
              srcset="
                @/static/assets/images/card-img-1-p-500.png  500w,
                @/static/assets/images/card-img-1.png       1244w
              "
            >
          </div>
        </div>
      </div>
      <div class="stack-card two">
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
            <!-- <div class="stats-line" /> -->
          </div>
          <div class="stack-image-block">
            <img
              alt=""
              class="stack-image"
              loading="lazy"
              sizes="(max-width: 767px) 200px, (max-width: 991px) 33vw, 42vw"
              src="@/static/assets/images/card-img-2.png"
              srcset="
                @/static/assets/images/card-img-2-p-500.png  500w,
                @/static/assets/images/card-img-2.png       1400w
              "
            >
          </div>
        </div>
      </div>
      <div class="stack-card three">
        <div class="stack-card-inner">
          <div class="stack-header three">
            Don’t settle for less!
          </div>
          <div class="stack-stats-block">
            <div>
              <!-- <div class="up grey-text">
                Up to
              </div>
              <div class="stat-percent">
                15
              </div> -->
              <div class="stat-text grey-text">
                 Get higher-than-average returns<br> on your HerVest savings account.
              </div>
            </div>
            <div class="stats-line three" />
          </div>
          <div class="stack-image-block">
            <img
              alt=""
              class="stack-image"
              loading="lazy"
              sizes="(max-width: 767px) 200px, (max-width: 991px) 33vw, 42vw"
              src="@/static/assets/images/card-img-3.png"
              srcset="
                @/static/assets/images/card-img-3-p-500.png  500w,
                @/static/assets/images/card-img-3.png       1466w
              "
            >
          </div>
        </div>
      </div>
      <div class="stack-card four">
        <div class="stack-card-inner">
          <div class="stack-header four">
            Over 40,000 women on HerVest know their money personality
          </div>
          <div class="stack-stats-block">
            <div>
              <div class="stat-text dark-purple-text">
                Discover yours today and understand <br> why you act around money <br> the way you do.
              </div>
            </div>
            <!-- <div class="stats-line four" /> -->
          </div>
          <div class="cta-button-wrapper">
            <a class="cta-inline-block-filled-signup" href="https://form.typeform.com/to/ilQ26C" target="_blank">
              Take the Test
            </a>
          </div>
          <div class="stack-image-block">
            <img
              alt=""
              class="stack-image"
              loading="lazy"
              sizes="(max-width: 767px) 200px, (max-width: 991px) 33vw, 42vw"
              src="@/static/assets/images/card-img-4.png"
              srcset="
                @/static/assets/images/card-img-4-p-500.png  500w,
                @/static/assets/images/card-img-4.png       1168w
              "
            >
          </div>
        </div>
      </div>
      <div class="stack-card five">
        <div class="stack-card-inner">
          <div class="stack-header five">
            Access to women focused tools, guides and growth insights
          </div>
          <div class="stack-stats-block">
            <div>
              <div class="up dark-purple-text">
                Up to
              </div>
              <div class="stat-percent pink-text">
                150
              </div>
              <div class="stat-text dark-purple-text">
                available resources
              </div>
            </div>
            <div class="stats-line five" />
          </div>
          <div class="stack-image-block">
            <img
              alt=""
              class="stack-image cards"
              loading="lazy"
              src="@/static/assets/images/card-img-5.svg"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
    this.$cardLoop()
  },
  methods: {}
}
</script>

<style scoped>
.cta-button-wrapper{
  margin-top: 4vw;
}

</style>
