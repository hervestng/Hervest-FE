<template>
  <div class="newsletter-section">
    <div class="newsletter-text-wrapper">
      <h2 class="no-margin capitalize">
        <!-- {{ newsLetterData.title }} -->
        Money Personality
      </h2>
      <h4 class="no-margin">
        <!-- {{ newsLetterData.description }} -->
        Over 40,000 women on HerVest know their money personality
      </h4>
    </div>
    <div class="cta-button-wrapper">
      <a class="cta-inline-block-filled-signup" href="https://form.typeform.com/to/ilQ26C" target="_blank">
        Discover Yours Today
      </a>
    </div>
    <!-- <div class="subscribe-form w-form">
      <form
        id="email-form"
        name="email-form"
        data-name="Email Form"
        action="https://hervest.us4.list-manage.com/subscribe/post?u=6682ef7ff6ef37d0e445d0c6d&amp;id=6507061598"
        method="post"
      >
        <div class="form-wrapper">
          <input
            id="email-2"
            type="email"
            class="subscribe-field w-input"
            maxlength="256"
            name="email-2"
            data-name="Email 2"
            placeholder="Email Address"
            required=""
          ><input
            type="submit"
            :value="newsLetterData.cta_text"
            data-wait="Please wait..."
            class="subscribe-submit w-button"
          >
        </div>
      </form>
      <div class="success-block w-form-done">
        <div>Thank you! You've successfully subscribed to our newsletter!</div>
      </div>
      <div class="w-form-fail">
        <div>
          Oops! Something went wrong while subscribing, please try again!
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsLetterData: []
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
    this.getNewsletter()
  },

  methods: {
    async getNewsletter () {
      const response = await this.$store.dispatch('fetchWidgets', {
        page: 'widget?populate=*,newsletter'
      })

      if (response) {
        this.newsLetterData = response.data.attributes.newsletter
      }
    }
  }
}
</script>

<style scoped>
.success-block {
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 0.5vw;
  background-color: #fb528d;
  font-family: Satoshi, sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}
</style>
