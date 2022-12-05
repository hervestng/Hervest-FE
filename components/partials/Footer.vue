<template>
  <div class="footer">
    <div class="footer-inner-flex">
      <nuxt-link to="/" class="logo invert w-inline-block" />
      <div class="footer-nav-wrapper">
        <div>
          <strong>{{ footerData.col_1 }}</strong>
        </div>
        <nuxt-link
          class="footer-link top w-inline-block"
          to="/about"
          @click.native="scrollToTop"
        >
          About Us
        </nuxt-link>
        <nuxt-link to="/#mission" class="footer-link w-inline-block">
          <div>Mission &amp; Vision</div>
        </nuxt-link>
        <nuxt-link to="/#core-values" class="footer-link w-inline-block">
          <div>Core Values</div>
        </nuxt-link>
        <nuxt-link to="/about#people" class="footer-link w-inline-block">
          <div>People</div>
        </nuxt-link>
        <nuxt-link
          to="/campus-ambassadors"
          class="footer-link w-inline-block"
          @click.native="scrollToTop"
        >
          <div>Campus Ambassadors</div>
        </nuxt-link>
      </div>
      <div class="footer-nav-wrapper">
        <div>
          <strong> {{ footerData.col_2 }}</strong>
        </div>
        <nuxt-link
          to="/contact"
          class="footer-link top w-inline-block"
          @click.native="scrollToTop"
        >
          <div>Help Center</div>
        </nuxt-link>
        <nuxt-link
          class="footer-link w-inline-block"
          to="/faqs"
          @click.native="scrollToTop"
        >
          FAQs
        </nuxt-link>
        <nuxt-link to="/about#community" class="footer-link w-inline-block">
          <div>Community</div>
        </nuxt-link>
        <nuxt-link
          class="footer-link w-inline-block"
          to="/contact"
          @click.native="scrollToTop"
        >
          Contact Us
        </nuxt-link>
        <nuxt-link
          to="/careers"
          class="footer-link w-inline-block"
          @click.native="scrollToTop"
        >
          <div>Careers</div>
        </nuxt-link>
      </div>
      <div class="footer-nav-wrapper">
        <div>
          <strong>{{ footerData.col_3 }}</strong>
        </div>
        <nuxt-link
          to="privacy-policy"
          class="footer-link top w-inline-block"
          @click.native="scrollToTop"
        >
          <div>Cookies Policy</div>
        </nuxt-link>
        <nuxt-link
          class="footer-link w-inline-block"
          to="/privacy-policy"
          @click.native="scrollToTop"
        >
          Privacy Policy
        </nuxt-link>
        <nuxt-link
          to="privacy-policy"
          class="footer-link w-inline-block"
          @click.native="scrollToTop"
        >
          <div>Terms of Services</div>
        </nuxt-link>
      </div>
      <div class="footer-nav-wrapper socials">
        <div>
          <strong>{{ footerData.col_4 }}</strong>
        </div>
        <div class="social-link-wrapper">
          <a
            :href="footerData.instagram_link"
            target="_blank"
            class="social-link w-inline-block"
          />
          <a
            target="_blank"
            :href="footerData.twitter_link"
            class="social-link tw w-inline-block"
          />
          <a
            target="_blank"
            :href="footerData.facebook_link"
            class="social-link fb w-inline-block"
          />
          <a
            :href="footerData.linkedin_link"
            target="_blank"
            class="social-link lk w-inline-block"
          />
          <a
            :href="footerData.telegram_link"
            target="_blank"
            class="social-link telegram w-inline-block"
          />
        </div>
        <div class="app-link-wrapper">
          <h5 class="no-margin">
            <strong>{{ footerData.app_store_title }}</strong>
          </h5>
          <a
            href="https://play.google.com/store/apps/details?id=com.hervest&amp;hl=en"
            target="_blank"
            class="button google-play black w-inline-block"
          />
          <a
            href="https://apps.apple.com/ng/app/hervest/id1509714516"
            target="_blank"
            class="button app-store black w-inline-block"
          />
        </div>
      </div>
    </div>
    <div>
      <h4 class="cookie-notice">
        This site uses cookies.
        <a class="pink-text"
          href="https://staging--hervestfe.netlify.app/hervest_docs/HerVest-Cookies-Docs.pdf"
          @click.native="scrollToTop">Cookie Policy.
        </a>
        I agree to the
        <nuxt-link
          to="/privacy-policy"
          class="pink-text"
          @click.native="scrollToTop"
        >
          terms of use
        </nuxt-link>, and the
        <nuxt-link
          to="/privacy-policy"
          class="pink-text"
          @click.native="scrollToTop"
        >
          Disclaimer Policy.
        </nuxt-link>This Information will not be used for marketing purposes.
      </h4>
      <div class="footer-line" />
      <div class="copyright w-embed w-script">
        Copyright {{ getYear }} HerVest.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerData: []
    }
  },

  computed: {
    getYear () {
      return new Date().getFullYear()
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
    this.getFooter()
  },

  methods: {
    async getFooter () {
      const response = await this.$store.dispatch('fetchWidgets', {
        page: 'widget?populate=*,footer'
      })

      if (response) {
        this.footerData = response.data.attributes.footer
      }
    },

    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.pink-text {
  text-decoration: none;
}
</style>
