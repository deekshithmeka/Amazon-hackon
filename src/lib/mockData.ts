import { Product, DashboardStats, FraudCase, Buyer, TimelineEvent, RouteOption } from '@/types'

export const PRODUCTS: Product[] = [
	{ id: 1, emoji: '🎧', name: 'Sony WH-1000XM5', sku: 'B0BXYXY69T', category: 'Electronics', grade: 'B', confidence: 87, route: 'Amazon Warehouse', value: '₹14,500', returnReason: 'Wrong item', date: 'Jun 12' },
	{ id: 2, emoji: '👟', name: 'Nike Air Max 270', sku: 'AH8050-100', category: 'Footwear', grade: 'A', confidence: 95, route: 'Amazon Renewed', value: '₹8,200', returnReason: 'Size issue', date: 'Jun 12' },
	{ id: 3, emoji: '📱', name: 'iPhone 14 Pro', sku: 'MQ0E3LL/A', category: 'Electronics', grade: 'FRAUD', confidence: 94, route: 'Flagged', value: '—', returnReason: 'Return fraud', date: 'Jun 12' },
	{ id: 4, emoji: '🍳', name: 'Instant Pot Duo 7-in-1', sku: 'IP-DUO60', category: 'Kitchen', grade: 'C', confidence: 72, route: 'Liquidation', value: '₹2,100', returnReason: 'Defective', date: 'Jun 11' },
	{ id: 5, emoji: '🧱', name: 'LEGO Creator 42161', sku: '6431827', category: 'Toys', grade: 'A', confidence: 98, route: 'Amazon Renewed', value: '₹5,800', returnReason: 'Changed mind', date: 'Jun 11' },
	{ id: 6, emoji: '⌨️', name: 'Keychron K2 Pro', sku: 'K2P-A1', category: 'Electronics', grade: 'B', confidence: 81, route: 'Amazon Warehouse', value: '₹9,000', returnReason: 'Bought wrong version', date: 'Jun 11' },
	{ id: 7, emoji: '👜', name: 'Fossil Gen 6 Watch', sku: 'FTW7069', category: 'Accessories', grade: 'D', confidence: 63, route: 'Recycle', value: '₹400', returnReason: 'Damaged in transit', date: 'Jun 10' },
	{ id: 8, emoji: '💡', name: 'Philips Hue Starter Kit', sku: '562877', category: 'Smart Home', grade: 'A', confidence: 91, route: 'Amazon Renewed', value: '₹4,500', returnReason: 'Duplicate order', date: 'Jun 10' },
]

export const DASHBOARD_STATS: DashboardStats = {
	totalReturns: 1284,
	productsRecovered: 892,
	revenueSaved: '₹45.2L',
	landfillReduction: '72%',
}

export const WEEKLY_DATA = [
	{ day: 'Mon', returns: 198, recovered: 142 },
	{ day: 'Tue', returns: 224, recovered: 167 },
	{ day: 'Wed', returns: 187, recovered: 141 },
	{ day: 'Thu', returns: 256, recovered: 198 },
	{ day: 'Fri', returns: 312, recovered: 244 },
	{ day: 'Sat', returns: 285, recovered: 220 },
	{ day: 'Sun', returns: 284, recovered: 221 },
]

export const ROUTE_DISTRIBUTION = [
	{ name: 'Resell', value: 55, color: '#00a8e1' },
	{ name: 'Refurbish', value: 20, color: '#00c851' },
	{ name: 'Donate', value: 15, color: '#a084fc' },
	{ name: 'Recycle', value: 10, color: '#7ec87e' },
]

export const FRAUD_CASES: FraudCase[] = [
	{ id: 'FR-4821', originalProduct: 'Apple AirPods Pro', originalEmoji: '🎧', returnedProduct: 'Generic Earbuds', returnedEmoji: '🎵', fraudProbability: 94, status: 'Flagged', date: 'Jun 12' },
	{ id: 'FR-4819', originalProduct: 'iPhone 14 Pro', originalEmoji: '📱', returnedProduct: 'Non-Apple Smartphone', returnedEmoji: '📲', fraudProbability: 88, status: 'Flagged', date: 'Jun 12' },
	{ id: 'FR-4815', originalProduct: 'Ray-Ban Aviators', originalEmoji: '🕶️', returnedProduct: 'Replica Sunglasses', returnedEmoji: '🕶️', fraudProbability: 79, status: 'Under Review', date: 'Jun 11' },
]

export const BUYERS: Buyer[] = [
	{ name: 'Ravi M.', location: 'Hyderabad', offer: '₹13,800', matchScore: 96 },
	{ name: 'Priya S.', location: 'Bangalore', offer: '₹13,500', matchScore: 91 },
	{ name: 'Arjun K.', location: 'Chennai', offer: '₹12,900', matchScore: 87 },
	{ name: 'Neha T.', location: 'Mumbai', offer: '₹12,500', matchScore: 82 },
]

export const TIMELINE_EVENTS: TimelineEvent[] = [
	{ date: 'May 10, 09:14', event: 'Customer return initiated', detail: 'Reason: Wrong size · Order #114-2938821', done: true },
	{ date: 'May 10, 14:30', event: 'Arrived at fulfillment center', detail: 'FC-BLR2 · Bengaluru', done: true },
	{ date: 'May 10, 14:31', event: 'AI inspection completed', detail: 'Grade B · 87% confidence · 0.8 seconds', done: true },
	{ date: 'May 11, 10:00', event: 'Routed to refurbishment', detail: 'Minor scratch polish · packaging replacement', done: true },
	{ date: 'May 11, 16:00', event: 'Re-listed on Amazon Warehouse', detail: '₹14,500 · Condition: Like New', done: true },
	{ date: 'May 14, 13:22', event: 'Sold to new buyer', detail: 'Ravi M. · Hyderabad · ₹13,800', done: true },
	{ date: 'May 14, 13:22', event: 'Life cycle complete', detail: 'Item diverted from landfill · 1.2 kg CO₂ saved', done: true },
]

export const ROUTE_OPTIONS: RouteOption[] = [
	{ name: 'Amazon Warehouse', icon: 'Building2', matchPercent: 87, description: 'Best match based on condition and demand', color: '#00a8e1' },
	{ name: 'Amazon Renewed', icon: 'RefreshCw', matchPercent: 71, description: 'Eligible after minor refurbishment', color: '#00c851' },
	{ name: 'Amazon Outlet', icon: 'Tag', matchPercent: 55, description: 'Discounted sale on outlet store', color: '#FFB300' },
	{ name: 'Liquidation', icon: 'Package', matchPercent: 38, description: 'Bulk resale to liquidation warehouse', color: '#a084fc' },
]