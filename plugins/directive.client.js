import Vue from 'vue'
// const marked = require('marked')
import { marked } from 'marked'

Vue.directive('marked', async function (el, binding) {
  if (binding.arg === 'parseInline') {
    el.innerHTML = (await binding.value)
      ? marked.parseInline(binding.value)
      : ''
    return true
  } else {
    el.innerHTML = await (binding.value ? marked(binding.value) : '')
    Array.from(el.querySelectorAll('h1')).forEach((elH1) => {
      elH1.classList.add('grey-text', 'font-bold')
    })
    Array.from(el.querySelectorAll('h2')).forEach((elH2) => {
      elH2.classList.add('grey-text', 'font-semibold')
    })
    Array.from(el.querySelectorAll('h3,h4,h5,h6')).forEach((elHOthers) => {
      elHOthers.classList.add('grey-text', 'font-medium')
    })
  }
})
