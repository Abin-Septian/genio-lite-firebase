import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import Register from '@/views/UserRegister'
import Buku from '@/views/Buku'
import Utang from '@/views/Utang'
import Piutang from '@/views/Piutang'
import LaporanHarian from '@/views/LaporanHarian'
import LaporanBulanan from '@/views/LaporanBulanan'
import LaporanTahunan from '@/views/LaporanTahunan'
import Invoice from '@/views/Invoice'
import Catatan from '@/views/Catatan'
import Kategori from '@/views/Kategori'
import PengaturanBukuKas from '@/views/PengaturanBukuKas'
import Profile from '@/views/Profile'

Vue.use(Router)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
		path: '/',
		redirect: '/buku',
		name: 'Dashboard',
		component: Dashboard,
		children: [
			{
				path:"/buku",
				component: Buku,
			},
			{
				path:"/utang",
				component: Utang,
			},
			{
				path:"/piutang",
				component: Piutang,
			},
			{
				path:"/laporan_harian",
				component: LaporanHarian,
			},
			{
				path:"/laporan_bulanan",
				component: LaporanBulanan,
			},
			{
				path:"/laporan_tahunan",
				component: LaporanTahunan,
			},
			{
				path:"/invoice",
				component: Invoice,
			},
			{
				path:"/catatan",
				component: Catatan,
			},
			{
				path:"/kategori",
				component: Kategori,
			},
			{
				path:"/buku_kas",
				component: PengaturanBukuKas,
			},
			{
				path:"/profile",
				component: Profile,
			},
		]
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/register',
		name: 'register',
		component: Register
	}
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
