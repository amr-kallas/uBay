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
  Post:{
    root:'products',
    GET_ALL:'',
    ADD_POST:'',
    GET:(id:string)=>id,
    EDIT:(id:string)=>id,
    DELETE:(id:string)=>id,
    LIKE:(id:string)=>`${id}/likes`,
    UNLIKE:(id:string)=>`${id}/likes`,
    COMMENTS:(id:string)=>`${id}/comments`
    
  },
  Comment:{
    root:'comments',
    ADD:'',
    GET:(id:string)=>id,
    EDIT:(id:string)=>id,
    DELETE:(id:string)=>id,
  }
}
const controllersArr = Object.entries(API_ROUTES).map(
  ([controllerKey, { root, ...routes }]) => {
    const routesArr = Object.entries(routes)
    const routesPrefixed = Object.fromEntries(
      routesArr.map(([routeKey, route]) => {
        if (typeof route === "function") {
          return [routeKey, (...params: any[]) => `${root}/${route(...params)}`];
        }
        return [routeKey, `${root}/${route}`]
      })
    )
    return [controllerKey, { ...routesPrefixed, root }]
  }
)
API_ROUTES = Object.fromEntries(controllersArr) as typeof API_ROUTES
export default API_ROUTES
