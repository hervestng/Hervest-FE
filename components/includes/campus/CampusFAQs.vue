<template>
  <div>
    <div class="campus-faq-section">
      <div class="campus-faq-inner-block">
        <div class="campusfaq-header-block">
          <div>{{ widgetData.faq.title }}</div>
        </div>
        <div class="campus-faq-block-wrapper">
          <div
            v-for="(faq, index) in widgetData.faq.questions"
            :key="index"
            class="camp-faq-block"
            @click="faqToggle"
          >
            <div class="faq-block-inner">
              <div>{{ faq.title }}</div>
              <div class="expand-icon" />
            </div>
            <div class="faq-text-wrapper">
              <div>
                {{ faq.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="campus-faq-contact-block">
        <h2 class="faq-no-margin">
          <strong>{{ widgetData.faq.contact.title }}</strong>
        </h2>
        <a href="mailto:hello@hervest.ng" class="button campus w-inline-block">
          <div>{{ widgetData.faq.contact.cta_text }}</div>
        </a>
      </div>
    </div>
    <div class="apply-block">
      <div class="apply-block-inner">
        <div>
          <div class="apply-text">
            {{ widgetData.application.title }}
          </div>
        </div>
        <div class="ambassador-button-block">
          <nuxt-link to="/contact" class="button campus w-button">
            {{ widgetData.application.cta_text }}
          </nuxt-link>
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

<style lang="scss" scoped></style>
