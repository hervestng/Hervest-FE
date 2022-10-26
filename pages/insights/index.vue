<template>
  <div>
    <NavBar />
    <div class="article-container">
      <div class="search-wrapper w-form">
        <form
          id="email-form-2"
          autocomplete="off"
          class="flex-search"
          data-name="Email Form 2"
          method="get"
          name="email-form-2"
          @submit.prevent="submitSearch"
        >
          <input
            id="Search"
            v-model="searchKeyword"
            class="search-field w-input"
            data-name="Search"
            maxlength="256"
            name="Search"
            placeholder="Search For Any Topic"
            required=""
            type="text"
          />
          <input
            class="subscribe-submit search-btn w-button submit-search-btn"
            data-wait="Please wait..."
            type="submit"
            value="Search"
          />
        </form>
      </div>
      <div class="filter-link-wrapper">
        <a class="filter-link active w-inline-block" href="#">
          <div @click="refresh">All</div>
        </a>
        <a
          v-for="tagInfo in tagData.data"
          :key="tagInfo.id"
          class="filter-link w-inline-block"
          :class="activeFilters.includes(tagInfo.attributes.name) && 'active'"
          href="#"
          @click="getTagPost(tagInfo.attributes.name)"
        >
          <div class="tag-link">{{ tagInfo.attributes.name }}</div>
        </a>
      </div>
      <div>
        <div v-if="emptyState && pageData.data.length === 0">
          <div class="empty-state-block">
            <h3 class="empty-state-text">No Result</h3>
            <button
              class="subscribe-submit reload-btn w-button submit-search-btn"
              data-wait="Please wait..."
              type="submit"
              @click="refresh"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
      <LoaderComponent v-if="loading" />
      <div v-if="!loading" class="articles-wrapper">
        <nuxt-link
          v-for="post in pageData.data"
          :key="post.id"
          class="article-block w-inline-block"
          :to="'/insights/' + post.attributes.slug"
        >
          <div class="article-image-block">
            <img
              alt=""
              class="article-image"
              loading="lazy"
              :src="
                mediaUrl + post.attributes.featured_image.data.attributes.url
              "
            />
          </div>
          <TagComponent :tags="post.attributes.tags.data" />
          <div>{{ post.attributes.title }}</div>
          <div class="read-more-btn">
            <div>Read more</div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <paginate
      v-if="pagination.pageCount > 1"
      v-model="pagination.page"
      active-class="active"
      :click-handler="pageClick"
      container-class="pagination-wrapper"
      :hide-prev-next="false"
      next-link-class="pagination-link"
      :next-text="'Next'"
      :no-li-surround="true"
      :page-count="pagination.pageCount"
      page-link-class="pagination-link"
      prev-link-class="pagination-link"
      :prev-link-text="'Prev'"
    />
    <NewsLetterSection />
    <Footer />
  </div>
</template>

<script>
if (!globalThis.document) {
  global.document = {}
}
export default {
  asyncData({ store, error }) {
    const fetchWidgets = store.dispatch('fetchWidgets', {
      page: 'posts',
      'pagination[pageSize]': 6,
      'sort[0]': 'publishedAt:desc'
    })
    const fetchTags = store.dispatch('fetchWidgets', {
      page: 'tags'
    })

    return Promise.all([fetchWidgets, fetchTags])
      .then((responses) => {
        const [pageData, tagData] = responses

        return { pageData, tagData, pagination: pageData.meta.pagination }
      })
      .catch((responseError) => error(responseError))
  },

  data() {
    return {
      activeFilters: [],
      searchKeyword: '',
      emptyState: true,
      loading: false
    }
  },

  head() {
    return {
      bodyAttrs: {
        class: 'body'
      },
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '621cad9e3feece5e5c946e59',
        'data-wf-site': '6213ad50fd8a0f0805d56e75'
      },
      title: this.title,
      meta: [...this.meta]
    }
  },
  computed: {
    mediaUrl() {
      return process.env.mediaURL
    },

    meta() {
      return this.mxMetaUtils({
        title: this.title,
        description: this.description
      })
    },
    description() {
      return 'Get insights into financial topics as well as our latest news and updates. Visit this page to get started'
    },
    title() {
      return 'Insights | HerVest'
    }
  },

  watch: {
    searchKeyword(newVal) {
      if (newVal === '') {
        this.fetchAllPosts()
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  },

  methods: {
    refresh() {
      this.refreshAllPosts()
    },

    getTagPost(tag) {
      if (this.activeFilters.includes(tag)) {
        this.activeFilters = this.activeFilters.filter(
          (singleTag) => singleTag !== tag
        )
        this.fetchAllPosts()
      } else {
        this.activeFilters.push(tag)
        this.fetchAllPosts()
      }
    },

    pageClick(pageNumber) {
      this.pagination.page = pageNumber
      this.fetchAllPosts()
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    },

    fetchAllPosts() {
      this.emptyState = false
      this.loading = true
      this.$store
        .dispatch('fetchWidgets', {
          page: 'posts',
          'sort[0]': 'publishedAt:desc',
          'pagination[pageSize]': 6,
          'pagination[page]': this.pagination.page,
          'filters[title][$contains]': this.searchKeyword,
          'filters[$or][1][tags][name][$eq]': this.activeFilters
        })
        .then((response) => {
          this.pageData = {}
          this.pageData = response
          this.pagination = response.meta.pagination
          this.loading = false
          this.emptyState = true
        })
        .catch(() => {
          this.loading = false
          this.emptyState = false
        })
    },
    submitSearch() {
      this.fetchAllPosts()
    },

    refreshAllPosts() {
      this.activeFilters = []
      this.pagination.page = 1
      this.searchKeyword = ''
      this.emptyState = false
      this.loading = true
      this.$store
        .dispatch('fetchWidgets', {
          page: 'posts',
          'sort[0]': 'publishedAt:desc',
          'pagination[pageSize]': 6,
          'pagination[page]': this.pagination.page
        })
        .then((response) => {
          this.pageData = {}
          this.pageData = response
          this.pagination = response.meta.pagination
          this.loading = false
          this.emptyState = true
        })
        .catch(() => {
          this.loading = false
          this.emptyState = false
        })
    }
  }
}
</script>

<style></style>
