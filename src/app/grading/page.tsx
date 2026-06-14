'use client'

import { useState } from 'react'
import { Cpu, RefreshCw } from 'lucide-react'
import UploadZone from '@/components/UploadZone'
import GradeBadge from '@/components/GradeBadge'
import RouteBadge from '@/components/RouteBadge'
import { gradeProduct } from '@/services/api'
import type { Grade, RouteType } from '@/types'

type Stage = 'upload' | 'ready' | 'analyzing' | 'result'

export default function GradingPage() {
	const [stage, setStage] = useState<Stage>('upload')
	const [preview, setPreview] = useState<string | null>(null)
	const [result, setResult] = useState<any>(null)

	function handleFile(file: File) {
		setPreview(URL.createObjectURL(file))
		setStage('ready')
	}

	function handleAnalyze() {
		setStage('analyzing')
		gradeProduct()
			.then(response => {
				setResult(response)
				setStage('result')
			})
			.catch(error => {
				console.error(error)
				setResult({
					product: { name: 'Sony WH-1000XM5', emoji: '🎧' },
					grade: 'B',
					confidence: 87,
					estimatedResale: '₹14,500',
					suggestedRoute: 'Amazon Warehouse',
					reason: 'Minor cosmetic scratches...',
				})
				setStage('result')
			})
	}

	function handleReset() {
		setStage('upload')
		setPreview(null)
	}

	return (
		<div className="fade-in">
			{/* Header */}
			<div style={{ marginBottom: '20px' }}>
				<h1 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
					Product Inspection
				</h1>
				<p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
					AI-powered grading from product images using Amazon Bedrock
				</p>
			</div>

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>

				{/* Left — Upload */}
				<div className="amz-card">
					<p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>
						Upload Product Image
					</p>

					{stage === 'upload' && (
						<>
							<UploadZone onFileSelect={handleFile} />
							<div style={{ marginTop: '16px' }}>
								<p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '8px' }}>
									Or load a demo product:
								</p>
								<div style={{ display: 'flex', gap: '8px' }}>
									{['🎧', '👟', '📱', '🍳'].map((emoji, i) => (
										<button
											key={i}
											className="btn-ghost"
											style={{ fontSize: '20px', padding: '8px 14px' }}
											onClick={() => { setPreview(null); setStage('ready') }}
										>
											{emoji}
										</button>
									))}
								</div>
							</div>
						</>
					)}

					{(stage === 'ready' || stage === 'analyzing' || stage === 'result') && (
						<div>
							{/* Image preview */}
							<div style={{
								width: '100%', aspectRatio: '1',
								borderRadius: '10px', background: 'var(--surface2)',
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontSize: '80px', border: '1px solid var(--border)', marginBottom: '12px',
								overflow: 'hidden'
							}}>
								{preview
									? <img src={preview} alt="product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
									: '🎧'
								}
							</div>

							{stage === 'ready' && (
								<button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleAnalyze}>
									<Cpu size={15} />
									Analyze with AI
								</button>
							)}

							{stage === 'analyzing' && (
								<div style={{ textAlign: 'center', padding: '16px 0' }}>
									<div className="spinner" style={{ margin: '0 auto 12px' }} />
									<div style={{ fontSize: '13px', color: 'var(--muted)' }}>Analyzing with Amazon Bedrock…</div>
									<div style={{ fontSize: '11px', color: 'var(--muted)', opacity: 0.6, marginTop: '4px' }}>
										Grading · Fraud check · Route recommendation
									</div>
								</div>
							)}

							{stage === 'result' && (
								<button className="btn-ghost" style={{ width: '100%', justifyContent: 'center' }} onClick={handleReset}>
									<RefreshCw size={14} />
									Inspect Another
								</button>
							)}
						</div>
					)}
				</div>

				{/* Right — Result */}
				<div className="amz-card">
					<p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>
						AI Analysis Result
					</p>

					{(stage === 'upload' || stage === 'ready') && (
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', gap: '12px' }}>
							<div style={{ fontSize: '40px', opacity: 0.2 }}>🔍</div>
							<p style={{ fontSize: '13px', color: 'var(--muted)' }}>Upload an image to see AI grading</p>
						</div>
					)}

					{stage === 'analyzing' && (
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', gap: '12px' }}>
							<div className="spinner" />
							<p style={{ fontSize: '13px', color: 'var(--muted)' }}>Running inspection…</p>
						</div>
					)}

					{stage === 'result' && (
						<div className="fade-in">
							{/* Product header */}
							<div style={{
								display: 'flex', alignItems: 'center', gap: '12px',
								padding: '12px 14px', background: 'var(--surface2)',
								borderRadius: '8px', marginBottom: '16px'
							}}>
								<div style={{ fontSize: '36px' }}>{result?.product?.emoji ?? '🎧'}</div>
								<div>
									<div style={{ fontWeight: 600, fontSize: '15px' }}>{result?.product?.name ?? 'Sony WH-1000XM5'}</div>
									<div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>
										Returned Jun 12 · Electronics
									</div>
								</div>
							</div>

							{/* Result rows */}
							<div style={{ background: 'var(--surface2)', borderRadius: '10px', padding: '4px 0', marginBottom: '12px' }}>
								{[
									{ label: 'Grade', value: <GradeBadge grade={(result?.grade ?? 'B') as Grade} /> },
									{ label: 'Confidence Score', value: <span style={{ fontWeight: 600 }}>{result?.confidence ?? 87}%</span> },
									{ label: 'Estimated Resale', value: <span style={{ color: 'var(--green)', fontWeight: 700 }}>{result?.estimatedResale ?? '₹14,500'}</span> },
									{ label: 'Suggested Route', value: <RouteBadge route={(result?.suggestedRoute ?? 'Amazon Warehouse') as RouteType} /> },
								].map((row, i) => (
									<div key={i} style={{
										display: 'flex', justifyContent: 'space-between', alignItems: 'center',
										padding: '11px 14px',
										borderBottom: i < 3 ? '1px solid var(--border)' : 'none'
									}}>
										<span style={{ fontSize: '12px', color: 'var(--muted)' }}>{row.label}</span>
										<span>{row.value}</span>
									</div>
								))}
							</div>

							{/* AI Reasoning */}
							<div style={{
								padding: '12px 14px',
								background: 'rgba(0,168,225,0.07)',
								border: '1px solid rgba(0,168,225,0.2)',
								borderRadius: '8px'
							}}>
								<div style={{ fontSize: '11px', color: 'var(--muted)', marginBottom: '4px' }}>
									AI Reasoning
								</div>
								<div style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.6 }}>
									{result?.reason ?? 'Minor cosmetic scratches...'}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}