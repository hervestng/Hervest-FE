<template>
  <div class="footer">
    <div class="footer-inner-flex">
      <nuxt-link class="logo invert w-inline-block" to="/" />
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
        <nuxt-link class="footer-link w-inline-block" to="/about#mission">
          <div>Mission &amp; Vision</div>
        </nuxt-link>
        <!-- <nuxt-link class="footer-link w-inline-block" to="/about#core-values">
          <div>Core Values</div>
        </nuxt-link> -->
        <nuxt-link class="footer-link w-inline-block" to="/about#people">
          <div>People</div>
        </nuxt-link>
        <nuxt-link
          class="footer-link w-inline-block"
          to="/campus-ambassadors"
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
          class="footer-link top w-inline-block"
          to="/contact"
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
        <nuxt-link class="footer-link w-inline-block" to="/about#community">
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
          class="footer-link w-inline-block"
          to="/careers"
          @click.native="scrollToTop"
        >
          <div>Careers</div>
        </nuxt-link>
      </div>
      <div class="footer-nav-wrapper">
        <div>
          <strong>{{ footerData.col_3 }}</strong>
        </div>
        <a
          class="footer-link top w-inline-block"
          href="https://hervest.docsend.com/view/5k6rw5khwg9xk2b2"
          target="_blank"
          @click.native="scrollToTop"
        >
          <div>Cookies Policy</div>
        </a>
        <a
          class="footer-link w-inline-block"
          href="https://hervest.docsend.com/view/3hq9g2wtya59nbmk"
          target="_blank"
          @click.native="scrollToTop"
        >
          Privacy Policy
        </a>
        <a
          class="footer-link w-inline-block"
          href="https://hervest.docsend.com/view/jgpx32jjrtzectew"
          target="_blank"
          @click.native="scrollToTop"
        >
          <div>Terms of Services</div>
        </a>
      </div>
      <div class="footer-nav-wrapper socials">
        <div>
          <strong>{{ footerData.col_4 }}</strong>
        </div>
        <div class="social-link-wrapper">
          <a
            class="social-link w-inline-block"
            :href="footerData.instagram_link"
            target="_blank"
          />
          <a
            class="social-link tw w-inline-block"
            :href="footerData.twitter_link"
            target="_blank"
          />
          <a
            class="social-link fb w-inline-block"
            :href="footerData.facebook_link"
            target="_blank"
          />
          <a
            class="social-link lk w-inline-block"
            :href="footerData.linkedin_link"
            target="_blank"
          />
          <a
            class="social-link telegram w-inline-block"
            :href="footerData.telegram_link"
            target="_blank"
          />
        </div>
        <div class="app-link-wrapper">
          <h5 class="no-margin">
            <strong>{{ footerData.app_store_title }}</strong>
          </h5>
          <a
            class="button google-play black w-inline-block"
            href="https://play.google.com/store/apps/details?id=com.hervest&amp;hl=en"
            target="_blank"
          />
          <a
            class="button app-store black w-inline-block"
            href="https://apps.apple.com/ng/app/hervest/id1509714516"
            target="_blank"
          />
        </div>
      </div>
    </div>
    <div>
      <h4 class="cookie-notice">
        This site uses cookies.
        <a
          class="pink-text"
          href="https://hervest.docsend.com/view/5k6rw5khwg9xk2b2"
          target="_blank"
          @click.native="scrollToTop"
        > Cookie Policy.
        </a>
        I agree to the
        <a
          class="pink-text"
          href="https://hervest.docsend.com/view/jgpx32jjrtzectew"
          target="_blank"
          @click.native="scrollToTop"
        >
          terms of use
        </a>, and the
        <a
          class="pink-text"
          href="https://hervest.docsend.com/view/3hq9g2wtya59nbmk"
          target="_blank"
          @click.native="scrollToTop"
        >
          Disclaimer Policy.
        </a>This Information will not be used for marketing purposes.
        <!-- <nuxt-link to="/privacy-policy" class="pink-text" @click.native="scrollToTop">
            Policy Link
        </nuxt-link> -->
      </h4>
      <div class="footer-line" />
      <div class="copyright w-embed w-script">
        Copyright {{ getYear }} HerVest for Women Limited. All rights reserved
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
