import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VueSocialSharing from 'vue-social-sharing'

// Internal Imports
import * as utils from '@/commons/utils'

// <ShareNetwork .../>
Vue.use(VueSocialSharing)

if (!globalThis.document) {
  global.document = {}
}

for (const k in utils) {
  if (Object.hasOwnProperty.call(utils, k)) {
    const v = utils[k]
    Vue.prototype['$' + k] = v
  }
}

gsap.registerPlugin(ScrollTrigger)
// Vue Prototypes
Vue.prototype.$gsap = gsap

Vue.prototype.$cardLoop = () => {
  const cards = gsap.utils.toArray('.stack-card')
  // const time = tl.time()

  // build a timeline with a cardAnimation that starts every 0.5 seconds
  // build a timeline with a cardAnimation that starts every 0.5 seconds
  const loop = buildSeamlessLoop(cards, 0.25, cardAnimation)
  let time = 0.35
  // start at 0.2 seconds into the timeline because that's when the item is in the correct position (we fade for the final 0.2 seconds of the cardAnimation)
  loop.time(time)
  // this function gets called by the buildSeamlessLoop() for each card. We just need to return the animation that we'd like, and it'll stagger them out on a timeline for us.
  function cardAnimation (card) {
    const start = { y: 100, scale: 0.9, zIndex: 0, opacity: 1 }
    return gsap
      .timeline()
      .fromTo(card, start, {
        y: 0,
        scale: 1,
        opacity: 1,
        zIndex: 100,
        ease: 'none',
        duration: 1,
        immediateRender: false
      })
      .fromTo(
        card,
        { opacity: 1 },
        { opacity: 0, duration: 0.2, immediateRender: false }
      )
      .set(card, start)
  }
  /*       document
        .getElementById('arrow-right')
        .addEventListener('click', () => movePlayhead(0.25))
      document
        .getElementById('arrow-left')
        .addEventListener('click', () => movePlayhead(-0.25))
 */
  setInterval(() => {
    movePlayhead(0.25)
  }, 3000)
  // animates the playhead on the loop by a certain amount (tweens it over the course of 0.5 seconds);
  function movePlayhead (amount) {
    time += amount
    if (time < 0) {
      // can't go negative, so just jump ahead 100 iterations and resume.
      loop.totalTime(loop.totalTime() + loop.duration() * 100)
      time += loop.duration() * 100
    }
    gsap.to(loop, { totalTime: time, duration: 0.25, overwrite: true })
  }
  // helper function that loops through the items 3 times, calling the animateFunc() for each item, then creates a tween of the playhead that focuses only on the 2nd iteration so that it's seamless (we need to pad the start and end with one iteration so that things aren't just coming in from a blank screen at the beginning)
  function buildSeamlessLoop (items, spacing, animateFunc) {
    const rawSequence = gsap.timeline({ paused: true }) // this is where all the "real" animations live
    const seamlessLoop = gsap.timeline({
      // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
      paused: true,
      repeat: -1, // to accommodate infinite scrolling/looping
      onRepeat () {
        // works around a super rare edge case bug that's fixed GSAP 3.6.1
        this._time === this._dur && (this._tTime += this._dur - 0.01)
      },
      onReverseComplete () {
        this.totalTime(this.rawTime() + this.duration() * 100) // seamless looping backwards
      }
    })
    const cycleDuration = spacing * items.length
    let dur // the duration of just one animateFunc() (we'll populate it in the .forEach() below...
    // loop through 3 times so we can have an extra cycle at the start and end - we'll scrub the playhead only on the 2nd cycle
    items
      .concat(items)
      .concat(items)
      .forEach((item, i) => {
        const anim = animateFunc(items[i % items.length])
        rawSequence.add(anim, i * spacing)
        dur || (dur = anim.duration())
      })
    // animate the playhead linearly from the start of the 2nd cycle to its end (so we'll have one "extra" cycle at the beginning and end)
    seamlessLoop.fromTo(
      rawSequence,
      {
        time: cycleDuration + dur / 2
      },
      {
        time: '+=' + cycleDuration,
        duration: cycleDuration,
        ease: 'none'
      }
    )
    return seamlessLoop
  }
}

Vue.prototype.$cardLoopCareers = () => {
  gsap.registerPlugin(ScrollTrigger)
  const careerSlide = document.querySelector('.career-slider-inner')
  gsap.to(careerSlide, {
    x: () => -(careerSlide.scrollWidth - window.innerWidth) + 'px',
    duration: 30,
    repeat: -1,
    yoyo: true,
    ease: 'none'
  })
}

Vue.prototype.$cardLoopCampus = () => {
  const campusSlide = document.querySelector('.campus-slide')
  gsap.to(campusSlide, {
    x: () => -(campusSlide.scrollWidth - window.innerWidth) + 'px',
    repeat: -1,
    duration: 35,
    yoyo: true,
    ease: 'none'
  })
}
