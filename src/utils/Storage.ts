const Storage = {
  setToken: (token: string) => {
    localStorage.setItem('token', token)
  },
  getToken: () => {
    return localStorage.getItem('token')
  },
  setTransaction: (index: string) => {
    localStorage.setItem('transaction', index)
  },
  getTransaction: () => {
    return localStorage.getItem('transaction')
  },
}
export default Storage
