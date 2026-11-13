<template>
  <p v-if="typeof block === 'string'" class="legal-text" v-html="block" />

  <p v-else-if="block.callout && !block.n" class="legal-callout" v-html="block.callout" />

  <dl v-else-if="block.definitions" class="legal-definitions">
    <div v-for="[term, meaning] in block.definitions" :key="term" class="legal-definition">
      <dt v-html="`“${term}”`" />
      <dd v-html="meaning" />
    </div>
  </dl>

  <div v-else class="legal-clause">
    <span class="legal-clause-number">{{ block.n }}</span>
    <div class="legal-clause-body">
      <p v-if="block.callout" class="legal-callout" v-html="block.callout" />
      <p v-else class="legal-text" v-html="block.html" />
      <LegalBlock v-for="item in block.items" :key="item.n" :block="item" />
    </div>
  </div>
</template>

<script>
// Renders one node of a legal document (see commons/legal/terms.js for the shape).
// Content is static, first-party copy, so v-html is safe here.
export default {
  name: 'LegalBlock',

  props: {
    block: {
      type: [String, Object],
      required: true
    }
  }
}
</script>

<style scoped>
.legal-text {
  margin: 0 0 16px;
  font-size: 16px;
  line-height: 28px;
  color: #3d3340;
}

.legal-callout {
  margin: 0 0 20px;
  padding: 18px 20px;
  border-left: 3px solid #b50182;
  border-radius: 0 8px 8px 0;
  background: #fbf2f8;
  font-size: 13px;
  line-height: 23px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #540445;
}

.legal-clause {
  display: flex;
  gap: 14px;
}

.legal-clause-number {
  flex: 0 0 auto;
  min-width: 36px;
  padding-top: 2px;
  font-size: 14px;
  line-height: 26px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: #b50182;
}

.legal-clause-body {
  flex: 1;
  min-width: 0;
}

.legal-definitions {
  margin: 0 0 16px;
}

.legal-definition {
  padding: 14px 0;
  border-bottom: 1px solid #f0e6ee;
}

.legal-definition:last-child {
  border-bottom: 0;
}

.legal-definition dt {
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;
  color: #540445;
}

.legal-definition dd {
  margin: 0;
  font-size: 16px;
  line-height: 28px;
  color: #3d3340;
}

.legal-text >>> a,
.legal-definition dd >>> a {
  color: #b50182;
  text-decoration: underline;
}

@media (max-width: 479px) {
  .legal-clause {
    gap: 10px;
  }

  .legal-clause-number {
    min-width: 0;
  }

  .legal-text,
  .legal-definition dd {
    font-size: 15px;
    line-height: 26px;
  }
}
</style>
