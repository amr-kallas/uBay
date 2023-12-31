let API_ROUTES = {
  Auth: {
    root: 'users',
    SIGN: 'signup',
    LOGIN: 'login',
    FORGOT_PASSWORD: 'forgotPassword',
    RESET_PASSWORD: 'resetPassword',
  },
  Users: {
    root: 'users',
    ME: 'me',
    UPDATE_PASSWORD: 'updateMyPassword',
    FORGOT_PASSWORD: 'forgotPassword',
    FAVORITE:'favorites'
  },
  Post: {
    root: 'products',
    GET_ALL: '',
    ADD_POST: '',
    GET: (id: string) => id,
    EDIT: (id: string) => id,
    DELETE: (id: string) => id,
    LIKE: (id: string) => `${id}/likes`,
    UNLIKE: (id: string) => `${id}/likes`,
    COMMENTS: (id: string) => `${id}/comments`,
    MINE: 'mine',
  },
  Comment: {
    root: 'comments',
    ADD: '',
    GET: (id: string) => id,
    EDIT: (id: string) => id,
    DELETE: (id: string) => id,
  },
  Categories: {
    root: 'categories',
    GETALL: '',
    Add: '',
    GET: (id: string) => id,
    EDIT: (id: string) => id,
    DELETE: (id: string) => id,
  },
  Stores: {
    root: 'stores',
    GETALL: '',
  },
  Payments: {
    root: 'payments',
    PAY: '',
  },
  Delivires: {
    root: 'deliveries',
    SELLER: 'generateQrForSeller',
    CUSTOMER: 'generateQrForCustomer',
  },
  Cities:{
    root:'cities',
    GETALL: '',
    Add: '',
    GET: (id: string) => id,
    EDIT: (id: string) => id,
    DELETE: (id: string) => id,
  }
}
const controllersArr = Object.entries(API_ROUTES).map(
  ([controllerKey, { root, ...routes }]) => {
    const routesArr = Object.entries(routes)
    const routesPrefixed = Object.fromEntries(
      routesArr.map(([routeKey, route]) => {
        if (typeof route === 'function') {
          return [routeKey, (...params: any[]) => `${root}/${route(params[0])}`]
        }
        return [routeKey, `${root}/${route}`]
      })
    )
    return [controllerKey, { ...routesPrefixed, root }]
  }
)
API_ROUTES = Object.fromEntries(controllersArr) as typeof API_ROUTES
export default API_ROUTES
