<template>
  <div>
    <NavBar />
    <div class="contact-wrapper">
      <div class="contact-block">
        <div class="contact-header-block">
          <div class="contact-header-inner">
            <h4 class="dark-purple-text no-margin uppercase">
              We’d love to hear from you
            </h4>
            <h1 class="email">
              <a href="mailto:hello@hervest.ng" class="email-link"><span
                  class="pink-text"><strong>hello</strong></span>@hervest.ng</a>
            </h1>
          </div>
          <div class="contact-header-inner">
            <div class="address-block">
              <div class="address-icon" />
              <div>
                <a href="https://goo.gl/maps/wf6zZhW17pVdSSVj9" target="_blank" class="address-link">13, Ibikunle
                  Street, Yaba, Lagos State.</a>
              </div>
            </div>
            <div class="phone-block">
              <div class="phone-icon" />
              <div>
                <!-- <a
                  href="tel:+2348032875778"
                  class="phone-link"
                >(+234) 803 2875 778</a> -->
                <a href="https://wa.me/2349023475608" class="phone-link">(+234) 803 2875 778 (WhatsApp Only)</a>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-form-block w-form">
          <form v-if="submitStatus === 'initial' || submitStatus === 'failed'" id="email-form" ref="contactform"
            class="contact-form" @submit.prevent="submitContactForm">
            <input v-model="formData.template_params.contact_number" type="hidden" name="contact_number">
            <input v-model="formData.template_params.to_name" type="hidden" name="to_name">
            <div class="w-row">
              <div class="left-column w-col w-col-6">
                <input id="First-Name" v-model="formData.template_params.first_name" type="text"
                  class="form-field w-input" maxlength="256" name="first_name" data-name="First Name"
                  placeholder="First Name" required="">
              </div>
              <div class="right-column w-col w-col-6">
                <input id="Last-Name" v-model="formData.template_params.last_name" type="text"
                  class="form-field w-input" maxlength="256" name="last_name" data-name="Last Name"
                  placeholder="Last Name" required="">
              </div>
            </div>
            <input id="Email-Address" v-model="formData.template_params.user_email" type="email"
              class="form-field w-input" maxlength="256" name="user_email" data-name="Email Address"
              placeholder="Email Address" required=""><textarea id="Message-2"
              v-model="formData.template_params.message" placeholder="Write a Message" maxlength="5000" name="message"
              required="" data-name="field" class="text-field w-input" /><input type="submit" :disabled="isSubmitting"
              :value="isSubmitting ? 'Sending' : 'Send Message'" class="button submit w-button">
          </form>
          <div v-else class="success-block">
            <div>Thank you! Your message has been sent!</div>
          </div>
          <div v-if="submitStatus === 'failed'" class="error-block">
            <div>
              Oops! Something went wrong while sending your message. Please try
              again!
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
if (!globalThis.document) {
  global.document = {}
}

export default {
  data () {
    return {
      isSubmitting: false,
      submitStatus: 'initial',
      formData: {
        service_id: process.env.serviceID,
        template_id: process.env.templateID,
        user_id: process.env.userID,
        template_params: {
          contact_number: Math.floor(Math.random() * 100000),
          to_name: 'Hervest',
          first_name: '',
          last_name: '',
          user_email: '',
          message: ''
        }
      }
    }
  },

  head () {
    return {
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '621c99a2009267d36d97cc89',
        'data-wf-site': '6213ad50fd8a0f0805d56e75'
      },
      title: this.title,
      meta: [...this.meta]
    }
  },

  computed: {
    meta () {
      return this.mxMetaUtils({
        title: this.title,
        description: this.description
      })
    },

    description () {
      return 'We’d love to hear from you. Send us a mail or call us for inquiries, partnerships, and more, and we’d be in touch.'
    },

    title () {
      return 'Contact'
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  },

  methods: {
    submitContactForm () {
      this.isSubmitting = true
      this.$store
        .dispatch('submitContactForm', this.formData)
        .then(() => {
          this.isSubmitting = false
          this.submitStatus = 'successful'
        })
        .catch(() => {
          this.isSubmitting = false
          this.submitStatus = 'failed'
        })
    }
  }
}
</script>

<style scoped>
.success-block {
  padding-left: 30px;
}
</style>
