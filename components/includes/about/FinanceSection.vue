<template>
  <div class="finance-section">
    <div class="finance-inner-block">
      <div class="finance-header-block">
        <div>
          <strong>{{ widgetData.title }}</strong>
        </div>
      </div>
      <div class="verical-divider" />
      <div class="finance-text-wrapper">
        <h4 class="no-margin">
          {{ widgetData.content }}
        </h4>
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
