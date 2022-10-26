<template>
  <div class="people-block" @click.stop="routeToProfile(person.slug)">
    <div class="people-image-block">
      <img :src="avatar" loading="lazy" class="people-image">
    </div>
    <div class="people-detail-block">
      <div class="people-text-wrapper w-inline-block">
        <strong>{{ person.full_name }}</strong>
        <h4 class="team-role">
          {{ person.position }}<br>
        </h4>
      </div>
      <a
        :href="person.linkedin_url"
        target="_blank"
        class="linkedin-link w-inline-block"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      default: () => {
        return {
          featured_image: {
            data: {
              attributes: {
                url: '',
                alternativeText: ''
              }
            }
          }
        }
      }
    }
  },

  data () {
    return {
      personData: {
        featured_image: {
          data: {
            attributes: {
              url: '',
              alternativeText: ''
            }
          }
        }
      }
    }
  },

  computed: {
    avatar () {
      return this.person.featured_image.data
        ? this.mediaUrl + this.person.featured_image.data.attributes.url
        : require('static/assets/images/defaultPerson.png')
    },

    mediaUrl () {
      return process.env.mediaURL
    }
  },

  watch: {
    person: {
      handler (newVal) {
        this.personData = newVal
      },
      deep: true
    }
  },

  mounted () {
    this.personData = this.$deAssociate(this.person)
  },
  methods: {
    routeToProfile (slug) {
      this.$router.push('/about/' + slug)
    }
  }
}
</script>

<style>
.people-image {
  object-fit: cover;
}
</style>
