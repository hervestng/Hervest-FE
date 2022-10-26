<template>
  <div id="people" class="people-section">
    <div class="people-header-block">
      <h4 class="pink-text uppercase no-margin">
        Our People
      </h4>
      <div class="people-header">
        <h1 class="no-margin">
          Meet the team of immediate problem solvers
        </h1>
      </div>
    </div>
    <div class="people-block-wrapper">
      <TeamMember
        v-for="person in widgetData"
        :key="person.id"
        :person="person.attributes"
      />
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
  },
  computed: {
    // avatar () {
    //   return this.widgetData.atrributes.featured_image.data.attributes.url
    // }
  },
  methods: {
    routeToProfile (slug) {
      this.$router.push('/about/' + slug)
    }
  }
}
</script>

<style scoped>
.people-block {
  cursor: pointer;
}
.people-image {
  object-fit: cover;
}
</style>
