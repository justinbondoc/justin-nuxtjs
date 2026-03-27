import type { RouterConfig } from '@nuxt/schema'

const MAX_HASH_WAIT_MS = 500
const HASH_POLL_INTERVAL_MS = 50

export default <RouterConfig>{
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        const deadline = Date.now() + MAX_HASH_WAIT_MS
        const tryScroll = () => {
          const el = document.querySelector(to.hash)
          if (el) {
            resolve({ el: to.hash, behavior: 'smooth' })
            return
          }
          if (Date.now() < deadline) {
            setTimeout(tryScroll, HASH_POLL_INTERVAL_MS)
          } else {
            resolve({ top: 0 })
          }
        }
        setTimeout(tryScroll, 0)
      })
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
}
