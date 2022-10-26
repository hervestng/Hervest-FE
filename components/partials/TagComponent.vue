<template>
  <div class="article-tag">
    <span
      v-for="(tag, index) in tags"
      :key="tag.id"
    >{{ tag.attributes.name }}<span v-if="index !== tags.length - 1">, </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
