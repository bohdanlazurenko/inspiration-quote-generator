'use client'

import { useState, useEffect } from 'react'
import QuoteCard from '@/components/QuoteCard'
import GenerateButton from '@/components/GenerateButton'
import CopyButton from '@/components/CopyButton'
import { quotes } from '@/lib/quotes'
import { getRandomQuote } from '@/lib/utils'

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0])
  const [isLoading, setIsLoading] = useState(false)

  const generateNewQuote = () => {
    setIsLoading(true)
    setTimeout(() => {
      const newQuote = getRandomQuote(quotes)
      setCurrentQuote(newQuote)
      setIsLoading(false)
    }, 500)
  }

  useEffect(() => {
    const randomQuote = getRandomQuote(quotes)
    setCurrentQuote(randomQuote)
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Inspiration Quote Generator
          </h1>
          <p className="text-lg text-gray-600">
            Discover wisdom and inspiration from great minds
          </p>
        </header>

        <div className="space-y-8">
          <QuoteCard quote={currentQuote} />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GenerateButton
              onClick={generateNewQuote}
              isLoading={isLoading}
            >
              Generate New Quote
            </GenerateButton>
            
            <CopyButton
              text={currentQuote.text}
              author={currentQuote.author}
            />
          </div>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Click "Generate New Quote" for more inspiration</p>
        </footer>
      </div>
    </main>
  )
}