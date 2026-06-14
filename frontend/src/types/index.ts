export type Grade = 'A' | 'B' | 'C' | 'D' | 'FRAUD'

export type RouteType =
	| 'Amazon Warehouse'
	| 'Amazon Renewed'
	| 'Amazon Outlet'
	| 'Liquidation'
	| 'Donate'
	| 'Recycle'
	| 'Flagged'

export interface Product {
	id: number
	emoji: string
	name: string
	sku: string
	category: string
	grade: Grade
	confidence: number
	route: RouteType
	value: string
	returnReason: string
	date: string
}

export interface DashboardStats {
	totalReturns: number
	productsRecovered: number
	revenueSaved: string
	landfillReduction: string
}

export interface RouteOption {
	name: RouteType
	icon: string
	matchPercent: number
	description: string
	color: string
}

export interface FraudCase {
	id: string
	originalProduct: string
	originalEmoji: string
	returnedProduct: string
	returnedEmoji: string
	fraudProbability: number
	status: 'Flagged' | 'Under Review' | 'Confirmed'
	date: string
}

export interface Buyer {
	name: string
	location: string
	offer: string
	matchScore: number
}

export interface TimelineEvent {
	date: string
	event: string
	detail: string
	done: boolean
}