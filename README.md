# Intelligent Bridge

AI-powered reverse logistics platform for Amazon — built for Amazon Hackathon 2026.

## Problem

Amazon returns generated an estimated 29 million metric tons of carbon emissions in 2024, with 9.8 billion pounds ending up in landfills. Intelligent Bridge addresses this through AI-powered grading, smart routing, fraud detection, and marketplace matching.

## Tech Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui (Nova preset)
- Recharts for data visualization
- Lucide React for icons
- Axios for API calls

## Pages

| Route          | Description                                                                       |
| -------------- | --------------------------------------------------------------------------------- |
| `/dashboard`   | Live stats, returns vs recovered chart, routing distribution, returns queue table |
| `/grading`     | AI product inspection — upload image, get grade + routing recommendation          |
| `/routing`     | Smart routing center — flow diagram + AI route recommendations                    |
| `/fraud`       | Fraud detection — flagged return cases with side-by-side comparison               |
| `/marketplace` | Buyer matching engine — find buyers for graded returns                            |
| `/lifecycle`   | Digital product passport — full lifecycle timeline + sustainability metrics       |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Mock API

All pages currently use mock API routes under `src/app/api/*` that simulate AI processing delays. Replace these with real AWS Bedrock / SageMaker calls for production.

## Team

Built by Coderaki for Amazon Hackathon 2026.
