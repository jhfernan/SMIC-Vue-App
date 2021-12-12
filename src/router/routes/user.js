
export default [
	{
		path: '/manage_users',
		name: 'Manage Users',
		component: () => import('../../views/users/Users.vue'),
		meta: {
			auth: 'admin',
			requiresAuth: true
		}
	},
	{
		path: '/manage_users/create_user',
		name: 'Create User',
		component: () => import('../../views/users/Add.vue'),
		meta: {
			auth: 'admin',
			requiresAuth: true
		}
	},
	{
		path: '/account_verification/:id',
		name: 'Verify User',
		component: () => import('../../views/users/Verify.vue'),
		meta: {
			requiresLoggedOut: true
		}
	},
]
