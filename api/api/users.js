const urls = {
  HOME: {
    url: '/',
    title: 'Home',
    icon: 'home-city',
    value: 'home'
  },
  DASHBOARD: {
    url: '/dashboard',
    title: 'Dashboard',
    icon: 'list-box-outline',
    value: 'dashboard'
  },
  ACCOUNT: {
    url: '/account',
    title: 'Account',
    icon: 'account',
    value: 'account'
  },
  USERS: {
    url: '/users',
    title: 'Users',
    icon: 'account-group-outline',
    value: 'users'
  },
};
const users = {
  admin: {
    id: 1,
    name: 'Mr. Admin',
    imgUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
    type: 'admin',
    menu: [
      { ...urls.HOME },
      { ...urls.DASHBOARD },
      { ...urls.ACCOUNT },
      { ...urls.USERS },
    ]
  },
  user: {
    id: 2,
    name: 'Mr. User',
    imgUrl: 'https://randomuser.me/api/portraits/men/86.jpg',
    type: 'user',
    menu: [
      { ...urls.HOME },
      { ...urls.DASHBOARD },
      { ...urls.ACCOUNT },
    ]
  },
  guest: {
    id: 3,
    name: 'Mr. Guest',
    imgUrl: 'https://randomuser.me/api/portraits/lego/5.jpg',
    type: 'guest',
    menu: [
      { ...urls.HOME },
      { ...urls.DASHBOARD },
    ]
  },
}
const accounts = {
  admin: {
    id: 1,
    name: 'Mr. Admin',
    email: 'admin@admin.com',
    password: '123',
  },
  user: {
    id: 2,
    name: 'Mr. User',
    email: 'user@user.com',
    password: '321',
  },
  guest: {
    id: 3,
    name: 'Mr. Guest',
  },
}

module.exports = { users, accounts };
