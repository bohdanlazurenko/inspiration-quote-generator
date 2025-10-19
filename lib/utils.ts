import { Quote } from './quotes'

export function getRandomQuote(quotes: Quote[]): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}

export function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text)
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.left = '-999999px'
    textArea.style.top = '-999999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    return new Promise((resolve, reject) => {
      if (!document.execCommand('copy')) {
        reject(new Error('Failed to copy text'))
      } else {
        resolve()
      }
      textArea.remove()
    })
  }
}