import address from './address'
import classify from './classify'
import home from './home'
import mine from './mine'
import news from './news'
import notfound from './404'
import order from './order'
import service from './service'
import user from './user'

export default [
  {
    path: '*',
    redirect: '404/entry'
  },
  {
    path: '/',
    redirect: 'home/entry'
  }
].concat(home, classify, news, mine, service, notfound, order, address, user)
