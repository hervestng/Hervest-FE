<template>
  <LegalDocument :doc="doc" />
</template>

<script>
import doc from '@/commons/legal/disclaimer'
import legalPage from '@/commons/legal/page'

export default {
  mixins: [legalPage(doc)]
}
</script>
