import { ref } from 'vue'

type VoidFn = () => void

// Module-scoped refs so both plugin and components can share callbacks.
const openModalHandler = ref<VoidFn | null>(null)
const focusChatInputHandler = ref<VoidFn | null>(null)

export function useChatShortcut() {
  function registerOpenModal(handler: VoidFn) {
    openModalHandler.value = handler
  }

  function unregisterOpenModal() {
    if (openModalHandler.value) {
      openModalHandler.value = null
    }
  }

  function registerFocusChat(handler: VoidFn) {
    focusChatInputHandler.value = handler
  }

  function unregisterFocusChat() {
    if (focusChatInputHandler.value) {
      focusChatInputHandler.value = null
    }
  }

  return {
    registerOpenModal,
    unregisterOpenModal,
    registerFocusChat,
    unregisterFocusChat
  }
}

export function getChatShortcutApi() {
  return {
    openModal() {
      openModalHandler.value?.()
    },
    focusChatInput() {
      focusChatInputHandler.value?.()
    }
  }
}

