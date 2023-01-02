export const navigation = [
  {
    name: 'Home',
    route: '/',
    requireAuth: false,
    type: 'route'
  },
  {
    name: 'Users',
    route: '/users?page=1&per_page=4',
    requireAuth: false,
    type: 'route'
  },
  {
    name: 'Sign in',
    route: '/auth/sign-in',
    requireAuth: false,
    type: 'route'
  },
  {
    name: 'Home',
    route: '/',
    requireAuth: true,
    type: 'route'
  },
  {
    name: 'Users',
    route: '/users?page=1&per_page=4',
    requireAuth: true,
    type: 'route'
  },
  {
    name: 'Logout',
    route: '',
    requireAuth: true,
    type: 'func'
  }
]