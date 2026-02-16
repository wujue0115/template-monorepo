import { createGreeting } from '@template/core'

export function greetUpper(name: string): string {
  return createGreeting(name).toUpperCase()
}
