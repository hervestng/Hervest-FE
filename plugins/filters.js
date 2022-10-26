import Vue from 'vue'
import moment from 'moment'

// {{expression | formatDateTime('')}}
Vue.filter('formatDateTime', (value, format = 'lll') => {
  return moment(value).format(format)
})
