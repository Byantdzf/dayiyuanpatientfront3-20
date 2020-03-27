import _import from './_import'
// 我的
export default [
  {
    path: '/user',
    component: _import('user'),
    children: [
      {
        path: '/user',
        name: 'User',
        component: _import('user'),
        meta: {
          title: '我的'
        },
        children: [
          {
            path: 'register',
            name: 'mineRegister',
            component: _import('user/register'),
            meta: { title: '注册' }
          },
          {
            path: 'setting',
            name: 'mineSetting',
            component: _import('user/setting'),
            meta: { title: '个人信息' }
          },
          {
            path: 'consultOrders',
            name: 'mineConsultOrders',
            component: _import('user/consultOrders'),
            meta: { title: '咨询订单' }
          },
          {
            path: 'consultOrderDetail',
            name: 'mineConsultOrderDetail',
            component: _import('user/consultOrderDetail'),
            meta: { title: '咨询订单详情' }
          },
          {
            path: 'prescription',
            name: 'minePrescription',
            component: _import('user/prescription'),
            meta: { title: '我的处方' }
          },
          {
            path: 'prescriptionDetail',
            name: 'minePrescriptionDetail',
            component: _import('user/prescriptionDetail'),
            meta: { title: '处方详情' }
          },
          {
            path: 'caseFile',
            name: 'mineCaseFile',
            component: _import('user/caseFile'),
            meta: { title: '病例档案' }
          },
          {
            path: 'addCaseFile',
            name: 'mineAddCaseFile',
            component: _import('user/addCaseFile'),
            meta: { title: '新增病例' }
          },
          {
            path: 'patientsMsg',
            name: 'minePatientsMsg',
            component: _import('user/patientsMsg'),
            meta: { title: '患者信息' }
          },
          {
            path: 'addPatientsMsg',
            name: 'mineAddPatientsMsg',
            component: _import('user/addPatientsMsg'),
            meta: { title: '新增患者' }
          },
          {
            path: 'address',
            name: 'mineAddress',
            component: _import('user/address'),
            meta: { title: '我的地址' }
          },
          {
            path: 'addAddress',
            name: 'mineAddAddress',
            component: _import('user/addAddress'),
            meta: { title: '新建地址' }
          },
          {
            path: 'feedback',
            name: 'mineFeedback',
            component: _import('user/feedback'),
            meta: { title: '用户反馈' }
          },
          {
            path: 'about',
            name: 'mineAbout',
            component: _import('user/about'),
            meta: { title: '关于我们' }
          }
        ]
      }
    ]
  }
]
