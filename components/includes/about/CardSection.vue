<template>
  <div class="card-section">
    <div class="stack-cards-container">
      <div class="stack-card one">
        <div class="stack-card-inner">
          <div class="stack-header">
            Competitive returns on partnerships with female farmers.
          </div>
          <div class="stack-image-block">
            <img
              src="@/static/assets/images/card-img-1.png"
              loading="lazy"
              sizes="(max-width: 767px) 200px, (max-width: 991px) 33vw, 42vw"
              srcset="
                @/static/assets/images/card-img-1-p-500.png  500w,
                @/static/assets/images/card-img-1.png       1244w
              "
              alt=""
              class="stack-image"
            >
          </div>
        </div>
      </div>
      <div class="stack-card two">
        <div class="stack-card-inner">
          <div class="stack-header two">
            Access to a cooperative community of women
          </div>
          <div class="stack-stats-block">
            <div>
              <div class="up dark-purple-text">
                Up to
              </div>
              <div class="stat-percent pink-text">
                10%
              </div>
              <div class="stat-text dark-purple-text">
                interest of savings
              </div>
            </div>
            <div class="stats-line" />
          </div>
          <div class="stack-image-block">
            <img
              src="@/static/assets/images/card-img-2.png"
              loading="lazy"
              sizes="(max-width: 767px) 200px, (max-width: 991px) 33vw, 42vw"
              srcset="
                @/static/assets/images/card-img-2-p-500.png  500w,
                @/static/assets/images/card-img-2.png       1400w
              "
              alt=""
              class="stack-image"
            >
          </div>
        </div>
      </div>
      <div class="stack-card three">
        <div class="stack-card-inner">
          <div class="stack-header three">
            Free mentoring on financial literacy
          </div>
          <div class="stack-stats-block">
            <div>
              <div class="up grey-text">
                Up to
              </div>
              <div class="stat-percent">
                15
              </div>
              <div class="stat-text grey-text">
                mentors available
              </div>
            </div>
            <div class="stats-line three" />
          </div>
          <div class="stack-image-block">
            <img
              src="@/static/assets/images/card-img-3.png"
              loading="lazy"
              sizes="(max-width: 767px) 200px, (max-width: 991px) 33vw, 42vw"
              srcset="
                @/static/assets/images/card-img-3-p-500.png  500w,
                @/static/assets/images/card-img-3.png       1466w
              "
              alt=""
              class="stack-image"
            >
          </div>
        </div>
      </div>
      <div class="stack-card four">
        <div class="stack-card-inner">
          <div class="stack-header four">
            Free financial literacy coaching from inspiring female leaders
          </div>
          <div class="stack-stats-block">
            <div>
              <div class="up dark-purple-text">
                Up to
              </div>
              <div class="stat-percent">
                200
              </div>
              <div class="stat-text dark-purple-text">
                women enrolled
              </div>
            </div>
            <div class="stats-line four" />
          </div>
          <div class="stack-image-block">
            <img
              src="@/static/assets/images/card-img-4.png"
              loading="lazy"
              sizes="(max-width: 767px) 200px, (max-width: 991px) 33vw, 42vw"
              srcset="
                @/static/assets/images/card-img-4-p-500.png  500w,
                @/static/assets/images/card-img-4.png       1168w
              "
              alt=""
              class="stack-image"
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
              src="@/static/assets/images/card-img-5.svg"
              loading="lazy"
              alt=""
              class="stack-image cards"
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

<style lang="scss" scoped></style>
