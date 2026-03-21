import { getChatShortcutApi } from '~/composables/useChatShortcut'

export default defineNuxtPlugin(() => {
  const router = useRouter()
  const route = useRoute()
  const chatShortcut = getChatShortcutApi()

  const shortcuts: Record<string, string> = {
    H: '/',
    A: '/#about',
    P: '/#portfolio',
    T: '/#testimonials',
    R: '/resume',
    C: '/#contact'
  }

  function isTextInputLike(el: EventTarget | null): boolean {
    const node = el instanceof Element ? el : null
    const active = document.activeElement instanceof Element ? document.activeElement : null
    const target = node ?? active
    if (!target) return false

    const tag = target.tagName
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true
    if ((target as HTMLElement).isContentEditable) return true

    const role = target.getAttribute('role')
    if (role === 'textbox' || role === 'searchbox' || role === 'combobox') return true

    return false
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.defaultPrevented) return
    if (e.ctrlKey || e.metaKey || e.altKey) return

    // Escape on chat or resume pages: go back home.
    if (e.key === 'Escape' && (route.path === '/chat' || route.path === '/resume')) {
      e.preventDefault()
      router.push('/')
      return
    }

    if (isTextInputLike(e.target)) return

    // Slash shortcut: open chat modal or focus chat input depending on route.
    if (e.key === '/') {
      // If user is on /chat, focus the main chat input instead of opening modal.
      if (route.path === '/chat') {
        e.preventDefault()
        chatShortcut.focusChatInput()
        return
      }

      // Outside of /chat, open the chat modal.
      e.preventDefault()
      chatShortcut.openModal()
      return
    }

    // Navigation shortcuts (single character keys) only when not typing.
    if (e.key.length !== 1) return

    const key = e.key.toUpperCase()
    const to = shortcuts[key]
    if (!to) return

    // If user is already on home, keep smooth "home" behavior consistent.
    if (key === 'H' && route.path === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    e.preventDefault()
    router.push(to)
  }

  const w = window as unknown as { __jbKeyboardShortcutsInstalled?: boolean }
  if (!w.__jbKeyboardShortcutsInstalled) {
    w.__jbKeyboardShortcutsInstalled = true
    window.addEventListener('keydown', onKeydown, { capture: true })
  }

  return {
    provide: {
      keyboardShortcuts: shortcuts
    }
  }
})
