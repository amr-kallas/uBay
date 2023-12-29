const tokenChangeEvent = new Event('tokenChange')
const Storage = {
  setToken: (token: string) => {
    localStorage.setItem('token', token)
    window.dispatchEvent(tokenChangeEvent)
  },
  getToken: () => {
    return localStorage.getItem('token')
  },
  removeToken: () => {
    localStorage.removeItem('token')
  },
  setTransaction: (index: string) => {
    localStorage.setItem('transaction', index)
  },
  getTransaction: () => {
    return localStorage.getItem('transaction')
  },
}
export default Storage
