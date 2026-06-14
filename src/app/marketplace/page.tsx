'use client'

import { useState } from 'react'
import { CheckCircle, Search, Send, User, Users } from 'lucide-react'
import { BUYERS } from '@/lib/mockData'
import type { Buyer } from '@/types'

export default function MarketplacePage() {
	const [searching, setSearching] = useState(false)
	const [matched, setMatched] = useState(false)

	const handleFindBuyers = () => {
		setSearching(true)
		setMatched(false)

		setTimeout(() => {
			setSearching(false)
			setMatched(true)
		}, 2000)
	}

	return (
		<div className="fade-in">
			<div style={{ marginBottom: '20px' }}>
				<h1 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
					Marketplace Matching
				</h1>
				<p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
					Connect returned items to interested buyers in real time
				</p>
			</div>

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
				<div className="amz-card">
					<p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>
						Item Ready for Matching
					</p>

					<div style={{ padding: '14px', background: 'var(--surface2)', borderRadius: '8px', marginBottom: '16px' }}>
						<div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
							<div style={{ fontSize: '36px' }}>🎧</div>
							<div>
								<div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)' }}>Sony WH-1000XM5</div>
								<div style={{ fontSize: '12px', color: 'var(--muted)' }}>Electronics · Grade B</div>
							</div>
						</div>

						<div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid var(--border)', fontSize: '13px' }}>
							<span>Original price</span>
							<span>₹19,990</span>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid var(--border)', fontSize: '13px' }}>
							<span>AI Estimated resale</span>
							<span>₹14,500</span>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid var(--border)', fontSize: '13px' }}>
							<span>Buyer discount offered</span>
							<span>27%</span>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: '13px' }}>
							<span>Potential buyers</span>
							<span style={{ color: matched ? 'var(--green)' : 'var(--text)', fontWeight: matched ? 700 : 400 }}>
								{matched ? '23 found' : '—'}
							</span>
						</div>
					</div>

					{!searching && !matched && (
						<button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleFindBuyers}>
							<Search size={15} />
							Find Buyers
						</button>
					)}

					{searching && (
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '24px' }}>
							<div className="spinner" />
							<div style={{ fontSize: '13px', color: 'var(--muted)' }}>Scanning buyer wishlists…</div>
							<div style={{ fontSize: '11px', color: 'var(--muted)', opacity: 0.6 }}>Matching 2.4M active listings</div>
						</div>
					)}

					{matched && (
						<div style={{ padding: '12px', background: 'rgba(0,200,81,0.07)', border: '1px solid rgba(0,200,81,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
							<CheckCircle size={22} color="var(--green)" />
							<div>
								<div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--green)' }}>23 buyers matched!</div>
								<div style={{ fontSize: '11px', color: 'var(--muted)' }}>Best offer: ₹13,800 · 96% compatibility</div>
							</div>
						</div>
					)}
				</div>

				<div className="amz-card">
					<p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>
						Top Buyer Matches
					</p>

					{!matched && (
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '240px', gap: '12px' }}>
							<Users size={36} color="var(--border)" />
							<div style={{ fontSize: '13px', color: 'var(--muted)' }}>Click 'Find Buyers' to start matching</div>
						</div>
					)}

					{matched && (
						<div className="fade-in">
							{BUYERS.map((buyer: Buyer) => (
								<div
									key={buyer.name}
									style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'var(--surface2)', borderRadius: '8px', marginBottom: '8px', border: '1px solid var(--border)' }}
								>
									<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
										<div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)', animation: 'pulse 1.5s infinite' }} />
										<div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0,168,225,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<User size={14} color="var(--amz-blue)" />
										</div>
										<div>
											<div style={{ fontSize: '13px', fontWeight: 500 }}>{buyer.name}</div>
											<div style={{ fontSize: '11px', color: 'var(--muted)' }}>{buyer.location}</div>
										</div>
									</div>
									<div style={{ textAlign: 'right' }}>
										<div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--green)' }}>{buyer.offer}</div>
										<div style={{ fontSize: '11px', color: 'var(--muted)' }}>{buyer.matchScore}% match</div>
									</div>
								</div>
							))}

							<button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
								<Send size={15} />
								Send Offer to Top Buyer
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}