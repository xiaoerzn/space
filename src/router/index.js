import { createRouter, createWebHistory } from 'vue-router'
import SatelliteTrack from '../components/CesiumViewer.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: SatelliteTrack
		},
	]
})

export default router
