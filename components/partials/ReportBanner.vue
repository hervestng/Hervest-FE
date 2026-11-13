<template>
  <a
    class="report-banner"
    :href="reportUrl"
    target="_blank"
    rel="noopener"
    @click="trackClick"
  >
    <span class="report-banner__tag">New</span>
    <span class="report-banner__text">
      The HerVest Financial Report is out. See how we're closing the gender finance gap.
    </span>
    <span class="report-banner__cta">
      Read the report <span aria-hidden="true">&rarr;</span>
    </span>
  </a>
</template>

<script>
export default {
  data () {
    return {
      reportUrl: 'https://report.hervest.africa/?utm_source=hervest_website&utm_medium=landing_banner&utm_campaign=financial_report'
    }
  },
  methods: {
    trackClick () {
      if (typeof window.gtag !== 'function') { return }
      window.gtag('event', 'financial_report_click', {
        location: 'landing_banner',
        transport_type: 'beacon'
      })
    }
  }
}
</script>

<style scoped>
.report-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  padding: 10px 7vw;
  background-color: #540b45;
  color: #fff;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.report-banner:hover {
  background-color: #6d0f5a;
}

.report-banner__tag {
  padding: 2px 10px;
  border-radius: 999px;
  background-color: #fb528d;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.report-banner__cta {
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
  white-space: nowrap;
}

@media screen and (max-width: 479px) {
  .report-banner {
    padding: 10px 16px;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
