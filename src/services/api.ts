import axios from 'axios'

export const gradeProduct = (formData?: FormData) =>
	axios.post('/api/grade', formData).then(res => res.data)

export const getRouteRecommendations = (gradeData?: object) =>
	axios.post('/api/route', gradeData).then(res => res.data)

export const checkFraud = (formData?: FormData) =>
	axios.post('/api/fraud', formData).then(res => res.data)

export const getDashboardData = () =>
	axios.get('/api/dashboard').then(res => res.data)

export const findBuyerMatches = () =>
	axios.get('/api/match').then(res => res.data)