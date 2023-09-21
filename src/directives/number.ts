import { App } from 'vue'

export default function(app: App) {
  app.directive('number', {
    mounted(el: Element, binding: any) {
      const { modifiers } = binding
      let content
      el.addEventListener('keypress', (e: any) => {
        const inputKey = String.fromCharCode(typeof e.charCode === 'number' ? e.charCode : e.keyCode)
        content = e.target.value

        if (modifiers.int) {
          if (!/\d/.test(inputKey) && !e.ctrlKey) {
            preventInput(e)
          }
        } else if (!modifiers.int && !/\d|\.|-/.test(inputKey) && !e.ctrlKey) {
          preventInput(e)
        } else if (!modifiers.int && content.includes('.') && inputKey === '.') {
          preventInput(e)
        }
      })
    }
  })
}

function preventInput(e: any) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false
  }
}