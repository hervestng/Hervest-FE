<template>
  <div>
    <NavBar />
    <div class="article-container">
      <div class="blog-post-wrapper">
        <TagComponent :tags="singlePostData.tags.data" />
        <div class="blog-post-title">
          {{ singlePostData.title }}
        </div>
        <div class="fixed-block">
          <div class="share-wrapper">
            <div>Share</div>
            <div class="vertical-line" />
            <ShareNetwork
              class="share-icon tw w-inline-block"
              :hashtags="getTags"
              network="twitter"
              :title="singlePostData.title"
              :url="`${getSiteUrl}/insights/${singlePostData.slug}`"
            />
            <ShareNetwork
              class="share-icon fb w-inline-block"
              :hashtags="getTags"
              network="facebook"
              :title="singlePostData.title"
              :url="`${getSiteUrl}/insights/${singlePostData.slug}`"
            />
            <ShareNetwork
              class="share-icon lk w-inline-block"
              :hashtags="getTags"
              network="linkedin"
              :title="singlePostData.title"
              :url="`${getSiteUrl}/insights/${singlePostData.slug}`"
            />
            <div class="vertical-line end" />
          </div>
        </div>
        <div class="publish-details">
          Published {{ singlePostData.createdAt | formatDateTime('ll') }}
        </div>
        <div class="blogpost-image-block">
          <img
            alt=""
            class="blogpost-image"
            loading="lazy"
            :src="mediaUrl + singlePostData.featured_image.data.attributes.url"
          />
        </div>
        <div class="blogpost-block w-richtext">
          <div v-marked="singlePostData.content" />
        </div>
        <div class="otherpost-wrapper">
          <div class="margin-auto">Read More</div>
          <nuxt-link
            v-for="otherPost in readMoreData"
            :key="otherPost.id"
            class="article-block w-inline-block"
            :to="'/insights/' + otherPost.attributes.slug"
          >
            <div class="article-image-block">
              <img
                alt=""
                class="article-image"
                loading="lazy"
                :src="
                  mediaUrl +
                  otherPost.attributes.featured_image.data.attributes.url
                "
              />
            </div>
            <TagComponent :tags="otherPost.attributes.tags.data" />
            <div>{{ otherPost.attributes.title }}.</div>
            <div class="read-more-btn">
              <div>Read more</div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <NewsLetterSection />
    <Footer />
  </div>
</template>

<script>
if (!globalThis.document) {
  global.document = {}
}
export default {
  async asyncData({ store, params }) {
    const postData = await store.dispatch('fetchSinglePost', {
      slug: params.slug
    })

    let readMoreData = await store.dispatch('fetchWidgets', {
      page: 'posts',
      'pagination[pageSize]': 8
    })

    function shuffle(sourceArray) {
      for (let i = 0; i < sourceArray.length - 1; i++) {
        const j = i + Math.floor(Math.random() * (sourceArray.length - i))

        const temp = sourceArray[j]
        sourceArray[j] = sourceArray[i]
        sourceArray[i] = temp
      }

      return sourceArray
    }

    readMoreData = shuffle(readMoreData.data).splice(-2)
    const {
      data: [{ attributes: singlePostData }]
    } = postData

    return { singlePostData, readMoreData }
  },

  data() {
    return {
      singlePostData: {}
    }
  },

  head() {
    return {
      bodyAttrs: {
        class: 'body'
      },
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '621deda7b706fb2419dda40a',
        'data-wf-site': '6213ad50fd8a0f0805d56e75'
      },
      title: 'Insights | HerVest',
      meta: [...this.meta]
    }
  },

  computed: {
    getSiteUrl() {
      return process.env.siteURL
    },

    mediaUrl() {
      return process.env.mediaURL
    },

    meta() {
      return this.mxMetaUtils({
        type: 'article',
        title: 'Insights | HerVest',
        description: this.singlePostData.title,
        url: `${this.getSiteUrl}/insights/${this.singlePostData.slug}`,
        mainImage: this.singlePostData.featured_image.data.attributes.name
      })
    },

    getTags() {
      const tagElements = this.singlePostData.tags.data.map((tag) =>
        tag.attributes.name.replace(/-|\s/g, '')
      )
      return tagElements.join(',')
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  }
}
</script>
