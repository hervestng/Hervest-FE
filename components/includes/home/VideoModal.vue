<template>
  <div v-if="modalOpen" class="video-overlay">
    <div class="video-block">
      <div class="video-embed w-embed w-iframe">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          frameborder="0"
          height="100%"
          :src="src"
          title="YouTube video player"
          width="100%"
        />
      </div>
    </div>
    <div class="close-button" @click.prevent="closeModal">
      <div />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  },

  computed: {
    modalOpen () {
      return this.$store.getters.getModalState
    }
  },

  methods: {
    closeModal () {
      this.$store.commit('updateModal', false)
    }
  }
}
</script>
<style>
.video-overlay {
  background-color: hsla(0, 0%, 0%, 0.7);
  z-index: 999999999999999999;
}

.close-button {
  position: absolute;
  font-family: serif;
  top: 5.3vw;
  right: 7.8vw;
  display: flex;
  min-height: 50px;
  padding-left: 26px;
  align-items: center;
  background-image: url('@/static/assets/images/close-hamburger-menu.svg');
  background-position: 0% 50%;
  background-size: auto 15px;
  background-repeat: no-repeat;
  filter: invert(100%);
  font-family: Circular;
  color: hsla(0, 0%, 0%, 1);
  font-size: 16px;
  cursor: pointer;
}

/* .close-button:medium {
  top: 8.2vw;
  display: flex;
  min-height: 50px;
  align-items: center;
}

.close-button:tiny {
  top: 9vw;
} */
</style>
