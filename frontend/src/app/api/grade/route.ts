import { NextResponse } from 'next/server'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function POST(_req: Request) {
  await delay(1500)

  return NextResponse.json({
    product: { name: 'Sony WH-1000XM5', emoji: '🎧', category: 'Electronics' },
    grade: 'B',
    confidence: 87,
    estimatedResale: '₹14,500',
    suggestedRoute: 'Amazon Warehouse',
    reason: 'Minor cosmetic scratches on left earcup. All functions intact. Noise cancellation verified working. Original accessories present.',
    fraudDetected: false,
  })
}