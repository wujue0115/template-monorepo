import { createGreeting } from '@template/core'
import { greetUpper } from '@template/utils'

const output = document.querySelector('#output')
if (output) {
  output.textContent = `${createGreeting('Template')} | ${greetUpper('Monorepo')}`
}
