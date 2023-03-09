import { defineStore } from 'pinia'

type IAuthState = {
  loggedIn: boolean
  user?: any // TODO: add User interface
  jwt: string
}
type IAuthGetters = {
  isLoggedIn: (state: IAuthState) => boolean
  token: (state: IAuthState) => string
}
type IAuthActions = {
  // login: () => Promise<void>
  logout: () => void
  setToken: (jwt: string) => void
}

export const KEY_AUTH_LOCALSTORAGE = '_jwt'
const useAuthStore = defineStore<string, IAuthState, IAuthGetters, IAuthActions>('auth', {
  state: (): IAuthState => ({
    loggedIn: false,
    jwt: '',
    user: undefined,
  }),
  getters: {
    isLoggedIn(state: IAuthState): boolean {
      return state.loggedIn
    },
    token(state: IAuthState) {
      return state.jwt
    },
  },
  actions: {
    setToken(jwt) {
      this.jwt = jwt
      this.loggedIn = jwt !== ''
      localStorage.setItem(KEY_AUTH_LOCALSTORAGE, this.jwt)
    },
    logout() {
      this.jwt = ''
      this.loggedIn = false
      localStorage.removeItem(KEY_AUTH_LOCALSTORAGE)
    },
    // async login() {
    //   try {
    //     // const response = await request.post()
    //     // this.session = response.toModel()
    //
    //     this.loggedIn = true
    //   } catch (e) {
    //     console.log(e)
    //   }
    // },
  },
})

export default useAuthStore
