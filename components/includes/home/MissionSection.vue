<template>
  <div id="mission" class="mission-section">
    <div class="mission-text-wrapper">
      <h2 class="no-margin">
        Our mission is to improve women’s lives through greater access to and
        use of financial services.
      </h2>
    </div>
    <a
      class="mission-video-block w-inline-block w-lightbox"
      href="#"
    ><img
       alt=""
       class="video-thumbnail"
       loading="lazy"
       sizes="(max-width: 767px) 86vw, 80vw"
       src="@/static/assets/images/mission-video-thumbnail.jpg"
       srcset="
          @/static/assets/images/mission-video-thumbnail-p-500.jpeg  500w,
          @/static/assets/images/mission-video-thumbnail-p-800.jpeg  800w,
          @/static/assets/images/mission-video-thumbnail.jpg        2346w
        "
     >
      <div class="play-button">
        <div class="play-icon-wrapper" @click="openModal()">
          <div class="play-icon-inner">
            <img
              alt=""
              class="play-icon"
              loading="lazy"
              src="@/static/assets/images/play-icon.svg"
            >
          </div>
        </div>
        <div>Watch Video</div>
      </div>
      <VideoModal src="https://www.youtube.com/embed/XRhvFMCy_eU" />
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    videoSource () {
      return this.$store.getters.getVideoSource
    },

    mediaUrl () {
      return process.env.mediaURL
    }
  },

  methods: {
    openModal () {
      this.$store.commit(
        'setVideoSource',
        'https://www.youtube.com/embed/XRhvFMCy_eU'
      )
      this.$store.commit('updateModal', true)
    }
  }
}
</script>
