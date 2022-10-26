<template>
  <div class="campus-about">
    <div
      v-for="(block, index) in widgetData"
      :key="index"
      class="campus-about-inner"
      :class="{ reverse: index % 2 }"
    >
      <div class="campus-about-image" :class="{ reverse: index % 2 }">
        <img
          :src="mediaUrl + block.media.data.attributes.url"
          loading="lazy"
          alt=""
        >
      </div>
      <div class="campus-about-text">
        <div class="dark-purple-text">
          <h2>
            {{ block.content }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    widgetData: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
