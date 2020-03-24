import _import from './_import'
export default [
  {
    path: '/',
    component: _import('order'),
    children: [
      {
        path: '/order',
        name: 'Order',
        component: _import('order'),
        children: [
          {
            path: 'list',
            name: 'OrderList',
            component: _import('order/list'),
            meta: { title: '我的订单' }
          },
          {
            path: 'paySuccess',
            name: 'OrderPaySuccess',
            component: _import('order/paySuccess'),
            meta: { title: '支付成功' }
          },
          {
            path: 'detail',
            name: 'OrderDetail',
            component: _import('order/prescriptionDetail'),
            meta: { title: '订单详情' }
          }
        ]
      }
    ]
  }
]
