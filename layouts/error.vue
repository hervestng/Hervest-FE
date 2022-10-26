<template>
  <div>
    <NavBar />
    <div class="error-page">
      <div class="_404-page-wrap">
        <img
          alt=""
          class="error-image"
          src="@/static/assets/images/custom/exclamation-mark-inside-a-circle.svg"
        >
        <h1 class="dblue-text">
          {{ error.statusCode }}
        </h1>
        <div v-if="error.statusCode >= 500" class="error-message">
          <span> Server Error, Please try again later</span>
          <div class="home-page-link" @click="refresh">
            Try again
          </div>
        </div>
        <div v-else class="error-message">
          {{ error.message }} <br>
          <div class="home-page-link" @click="$router.push('/')">
            Home Page
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  layout: 'guest',
  props: {
    error: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  head () {
    return {
      title: this.error.statusCode + ' | HerVest'
    }
  },

  methods: {
    refresh () {
      window.location.reload()
    }
  }
}
</script>

<style>
.error-message {
  font-size: 16px;
  color: black;
}
.error-page {
  height: 100vh;
  padding-top: 300px;
  color: black;
}
._404-page-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error-image {
  width: 200px;
  height: 200px;
  filter: invert(52%) sepia(6%) saturate(10%) hue-rotate(316deg) brightness(95%)
    contrast(88%);
  min-width: 0;
}
.home-page-link {
  cursor: pointer;
  text-align: center;
  margin-top: 30px;
  text-decoration: underline;
}
</style>
