import { Quote } from '@/lib/quotes'

interface QuoteCardProps {
  quote: Quote
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto transform transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <svg
          className="absolute -top-4 -left-4 w-8 h-8 text-indigo-200"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote className="quote-text text-gray-700 italic pl-6">
          "{quote.text}"
        </blockquote>
      </div>
      <footer className="mt-6 text-right">
        <cite className="quote-author text-gray-600 not-italic">
          — {quote.author}
        </cite>
      </footer>
    </div>
  )
}