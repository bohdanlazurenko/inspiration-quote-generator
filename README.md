# Inspiration Quote Generator

A beautiful and simple web application that generates random inspirational quotes to brighten your day.

## Features

- 🎯 Generate random inspirational quotes
- 📋 Copy quotes to clipboard with one click
- 🎨 Beautiful, responsive design with Tailwind CSS
- ⚡ Fast and smooth animations
- 📱 Mobile-friendly interface
- 🔒 No external API dependencies

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
inspiration-quote-generator/
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts          # Health check endpoint
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout component
│   └── page.tsx                   # Home page
├── components/
│   ├── CopyButton.tsx             # Copy to clipboard button
│   ├── GenerateButton.tsx         # Generate new quote button
│   └── QuoteCard.tsx              # Quote display card
├── lib/
│   ├── quotes.ts                  # Quotes database
│   └── utils.ts                   # Utility functions
├── public/                        # Static assets
├── .gitignore                     # Git ignore file
├── next.config.js                 # Next.js configuration
├── package.json                   # Dependencies and scripts
├── postcss.config.js              # PostCSS configuration
├── README.md                      # This file
├── tailwind.config.ts             # Tailwind CSS configuration
└── tsconfig.json                  # TypeScript configuration
```

## Build and Deploy

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for your own inspiration!