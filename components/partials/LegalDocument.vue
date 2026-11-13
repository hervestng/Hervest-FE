<template>
  <div>
    <NavBar />
    <div class="container legal-page">
      <header class="legal-header">
        <div class="purple-text legal-eyebrow">
          Legal
        </div>
        <h1 class="dark-purple-text legal-title">
          {{ doc.title }}
        </h1>
        <p class="legal-summary">
          {{ doc.summary }}
        </p>
        <nav class="legal-tabs" aria-label="Legal documents">
          <nuxt-link
            v-for="link in legalLinks"
            :key="link.to"
            :to="link.to"
            class="legal-tab"
            exact-active-class="is-active"
          >
            {{ link.label }}
          </nuxt-link>
        </nav>
      </header>

      <div class="legal-layout">
        <aside class="legal-toc">
          <div class="legal-toc-title">
            On this page
          </div>
          <ol class="legal-toc-list">
            <li v-for="section in numberedSections" :key="section.id">
              <a :href="`#${section.id}`" @click.prevent="scrollTo(section.id)">
                <span v-if="section.number" class="legal-toc-number">{{ section.number }}.</span>
                {{ section.title }}
              </a>
            </li>
          </ol>
        </aside>

        <article class="legal-article">
          <LegalBlock
            v-for="(block, i) in doc.intro"
            :key="`intro-${i}`"
            :block="block"
          />

          <section
            v-for="section in numberedSections"
            :id="section.id"
            :key="section.id"
            class="legal-section"
          >
            <h2 class="legal-section-title">
              <span v-if="section.number" class="legal-section-number">{{ section.number }}.</span>
              {{ section.title }}
            </h2>
            <LegalBlock
              v-for="(block, i) in section.body"
              :key="`${section.id}-${i}`"
              :block="block"
            />
          </section>

          <p class="legal-contact">
            Questions about this policy? Email us at
            <a href="mailto:hello@hervest.ng">hello@hervest.ng</a>.
          </p>
        </article>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { legalLinks } from '@/commons/legal'

// Shared layout for the Terms, Cookie and Disclaimer pages.
// Content lives in commons/legal/*.js.
export default {
  name: 'LegalDocument',

  props: {
    doc: {
      type: Object,
      required: true
    }
  },

  data () {
    return { legalLinks }
  },

  computed: {
    numberedSections () {
      let count = 0
      return this.doc.sections.map(section => ({
        ...section,
        number: section.unnumbered ? null : ++count
      }))
    }
  },

  methods: {
    scrollTo (id) {
      const el = document.getElementById(id)
      if (!el) { return }
      const top = el.getBoundingClientRect().top + window.pageYOffset - 120
      window.scrollTo({ top, behavior: 'smooth' })
      history.replaceState(null, '', `#${id}`)
    }
  }
}
</script>

<style scoped>
.legal-page {
  padding-bottom: 80px;
}

.legal-header {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 5vw 40px;
  border-bottom: 1px solid #f0e6ee;
}

.legal-eyebrow {
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.legal-title {
  margin: 0 0 16px;
  font-family: 'Fraunces 144pt', Fraunces, serif;
  font-size: 52px;
  line-height: 58px;
}

.legal-summary {
  max-width: 640px;
  margin: 0 0 32px;
  font-size: 18px;
  line-height: 30px;
  color: #5f5560;
}

.legal-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.legal-tab {
  padding: 8px 16px;
  border: 1px solid #ead9e6;
  border-radius: 999px;
  font-size: 14px;
  line-height: 20px;
  color: #540445;
  text-decoration: none;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.legal-tab:hover {
  border-color: #b50182;
}

.legal-tab.is-active {
  border-color: #540445;
  background: #540445;
  color: #fff;
}

.legal-layout {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 64px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 5vw 0;
}

.legal-toc {
  position: sticky;
  top: 120px;
  align-self: start;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
}

.legal-toc-title {
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8a7f8a;
}

.legal-toc-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.legal-toc-list li {
  font-size: 14px;
  line-height: 20px;
}

.legal-toc-list a {
  display: block;
  padding: 6px 0 6px 12px;
  border-left: 2px solid #f0e6ee;
  color: #5f5560;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s;
}

.legal-toc-list a:hover {
  border-left-color: #b50182;
  color: #b50182;
}

.legal-toc-number {
  font-variant-numeric: tabular-nums;
  color: #b50182;
}

.legal-article {
  max-width: 760px;
}

.legal-section {
  padding-top: 32px;
  scroll-margin-top: 120px;
}

.legal-section-title {
  margin: 0 0 20px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: #540445;
}

.legal-section-number {
  margin-right: 6px;
  color: #b50182;
}

.legal-contact {
  margin: 48px 0 0;
  padding-top: 24px;
  border-top: 1px solid #f0e6ee;
  font-size: 16px;
  line-height: 28px;
  color: #5f5560;
}

.legal-contact a {
  color: #b50182;
  text-decoration: underline;
}

@media (max-width: 991px) {
  .legal-layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
  }

  .legal-toc {
    display: none;
  }
}

@media (max-width: 479px) {
  .legal-header,
  .legal-layout {
    padding-left: 16px;
    padding-right: 16px;
  }

  .legal-title {
    font-size: 36px;
    line-height: 42px;
  }

  .legal-summary {
    font-size: 16px;
    line-height: 26px;
  }

  .legal-section-title {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
