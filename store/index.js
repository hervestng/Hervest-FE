import { removeKeys } from '../commons/utils'
const token = process.env.token

export const state = () => ({
  modalOpen: false,
  videoSrc: ''
})

export const getters = {
  getModalState: (state) => {
    return state.modalOpen
  },
  getVideoSource: (state) => {
    return state.videoSrc
  }
}

export const mutations = {
  updateModal: (state, payload) => {
    state.modalOpen = payload
  },
  setVideoSource: (state, payload) => {
    state.videoSrc = payload
  }
}

export const actions = {
  // Temporary Form
  submitContactForm ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('https://api.emailjs.com/api/v1.0/email/send', payload)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // GETS

  fetchWidgets (context, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('/' + payload.page, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: removeKeys(payload, ['page'])
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  fetchFAQs (context, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('/questions', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: removeKeys(payload, ['page'])
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  fetchSinglePost (context, payload) {
    const baseUrl = process.env.baseURL + '/posts?filters[slug]='
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(baseUrl + payload.slug + '&populate=*', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: removeKeys(payload, ['page'])
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  fetchReadMore (context, payload) {
    const baseUrl = process.env.baseURL + '/posts?pagination[pageSize]='
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(baseUrl + payload.page + '&populate=*', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: removeKeys(payload, ['page'])
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  fetchSinglePerson (content, payload) {
    const baseURL = process.env.baseURL + '/teams?filters[slug]='
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(baseURL + payload.slug + '&populate=*', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: removeKeys(payload, ['slug'])
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  fetchSingleJob (content, payload) {
    const baseURL = process.env.baseURL + '/job-openings?filters[slug]='
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(baseURL + payload.slug + '&populate=*', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: removeKeys(payload, ['slug'])
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
