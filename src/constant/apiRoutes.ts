let API_ROUTES = {
  Auth: {
    root: 'users',
    SIGN: 'signup',
    LOGIN: 'login',
    FORGOT_PASSWORD: 'forgotPassword',
    RESET_PASSWORD: 'resetPassword',
    UPDATE_PASSWORD: 'updateMyPassword',
  },
  Users:{
    root:'users',
    ME:'me'
  },
  Product:{
    root:'products',
    GET_ALL:'',
    ADD_POST:'',
    LIKE:(id:string)=>`${id}/likes`
    
  }
}
const controllersArr = Object.entries(API_ROUTES).map(
  ([controllerKey, { root, ...routes }]) => {
    const routesArr = Object.entries(routes)
    const routesPrefixed = Object.fromEntries(
      routesArr.map(([routeKey, route]) => {
        if (typeof route === "function") {
          return [routeKey, (...params: Parameters<typeof route>) => `${root}/${route(...params)}`];
        }
        return [routeKey, `${root}/${route}`]
      })
    )
    return [controllerKey, { ...routesPrefixed, root }]
  }
)
API_ROUTES = Object.fromEntries(controllersArr) as typeof API_ROUTES
export default API_ROUTES
