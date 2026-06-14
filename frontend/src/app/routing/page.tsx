'use client'

import { useState } from 'react'
import {
	ArrowLeftRight, Cpu, Award, Building2, RefreshCw, Tag, Package,
	Check, Edit3
} from 'lucide-react'
import GradeBadge from '@/components/GradeBadge'

const ROUTE_OPTIONS = [
	{ name: 'Amazon Warehouse', icon: Building2, matchPercent: 87, description: 'Best match based on condition and demand', color: '#00a8e1' },
	{ name: 'Amazon Renewed', icon: RefreshCw, matchPercent: 71, description: 'Eligible after minor refurbishment', color: '#00c851' },
	{ name: 'Amazon Outlet', icon: Tag, matchPercent: 55, description: 'Discounted sale on outlet store', color: '#FFB300' },
	{ name: 'Liquidation Partner', icon: Package, matchPercent: 38, description: 'Bulk resale to liquidation warehouse', color: '#a084fc' },
]

const FLOW_STEPS = [
	{ label: 'Returned', sub: 'Jun 12, 14:30', color: '#FF9900', icon: ArrowLeftRight },
	{ label: 'Inspected by AI', sub: 'Jun 12, 14:31 · 0.8s', color: '#00a8e1', icon: Cpu },
	{ label: 'Grade B Assigned', sub: '87% confidence', color: '#00a8e1', icon: Award },
	{ label: 'Amazon Warehouse', sub: 'Recommended route', color: '#00c851', icon: Building2 },
]

export default function RoutingPage() {
	const [selected, setSelected] = useState(0)

	return (
		<div className="fade-in">
			{/* Header */}
			<div style={{ marginBottom: '20px' }}>
				<h1 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
					Smart Routing Center
				</h1>
				<p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
					AI-powered destination assignment after grading
				</p>
			</div>

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>

				{/* Left — Product + Flow */}
				<div className="amz-card">
					<p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>
						Product Under Review
					</p>

					<div style={{
						display: 'flex', gap: '14px', alignItems: 'center',
						padding: '14px', background: 'var(--surface2)', borderRadius: '8px', marginBottom: '20px'
					}}>
						<div style={{ fontSize: '40px' }}>🎧</div>
						<div>
							<div style={{ fontWeight: 600, fontSize: '15px' }}>Sony WH-1000XM5</div>
							<div style={{ fontSize: '12px', color: 'var(--muted)', margin: '2px 0' }}>B0BXYXY69T · Electronics</div>
							<div style={{ display: 'flex', gap: '6px', marginTop: '6px', alignItems: 'center' }}>
								<GradeBadge grade="B" />
								<span style={{ fontSize: '11px', color: 'var(--muted)' }}>87% confidence</span>
							</div>
						</div>
					</div>

					<p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>
						Routing Flow
					</p>

					<div>
						{FLOW_STEPS.map((step, i) => {
							const Icon = step.icon
							return (
								<div key={i}>
									<div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0' }}>
										<div style={{
											width: '32px', height: '32px', borderRadius: '50%',
											display: 'flex', alignItems: 'center', justifyContent: 'center',
											background: `${step.color}22`, border: `2px solid ${step.color}`, flexShrink: 0
										}}>
											<Icon size={14} color={step.color} />
										</div>
										<div>
											<div style={{ fontSize: '13px', fontWeight: 500 }}>{step.label}</div>
											<div style={{ fontSize: '11px', color: 'var(--muted)' }}>{step.sub}</div>
										</div>
									</div>
									{i < FLOW_STEPS.length - 1 && (
										<div style={{ width: '2px', height: '24px', background: 'var(--border)', marginLeft: '15px' }} />
									)}
								</div>
							)
						})}
					</div>
				</div>

				{/* Right — Route Options */}
				<div className="amz-card">
					<p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>
						AI Route Recommendations
					</p>

					{ROUTE_OPTIONS.map((route, i) => {
						const Icon = route.icon
						const isSelected = selected === i
						return (
							<div
								key={i}
								onClick={() => setSelected(i)}
								style={{
									display: 'flex', alignItems: 'center', justifyContent: 'space-between',
									padding: '12px 14px', background: 'var(--surface2)', borderRadius: '8px',
									border: isSelected ? '1px solid #FF9900' : '1px solid var(--border)',
									marginBottom: '8px', cursor: 'pointer', transition: 'all 0.15s'
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
									<div style={{
										width: '34px', height: '34px', borderRadius: '8px',
										background: `${route.color}18`, display: 'flex',
										alignItems: 'center', justifyContent: 'center'
									}}>
										<Icon size={16} color={route.color} />
									</div>
									<div>
										<div style={{ fontSize: '13px', fontWeight: 500 }}>{route.name}</div>
										<div style={{ fontSize: '11px', color: 'var(--muted)' }}>{route.description}</div>
									</div>
								</div>
								<div style={{ textAlign: 'right' }}>
									<div style={{ fontSize: '14px', fontWeight: 700, color: route.color }}>{route.matchPercent}%</div>
									<div style={{ fontSize: '10px', color: 'var(--muted)' }}>match</div>
								</div>
							</div>
						)
					})}

					{/* Recovery summary */}
					<div style={{
						marginTop: '16px', padding: '12px 14px',
						background: 'rgba(0,200,81,0.07)', border: '1px solid rgba(0,200,81,0.2)',
						borderRadius: '8px'
					}}>
						<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
							<span style={{ fontSize: '12px', color: 'var(--muted)' }}>Recovery value at selected route</span>
							<span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--green)' }}>₹14,500</span>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<span style={{ fontSize: '12px', color: 'var(--muted)' }}>CO₂ emissions prevented</span>
							<span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--green)' }}>1.2 kg</span>
						</div>
					</div>

					{/* Actions */}
					<div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
						<button className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
							<Check size={15} />
							Approve Route
						</button>
						<button className="btn-ghost" style={{ justifyContent: 'center' }}>
							<Edit3 size={14} />
							Override
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}