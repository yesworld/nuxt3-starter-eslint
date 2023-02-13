import { $Fetch, $fetch } from 'ofetch'

export default class ApiService {
  private apiBase: string
  private defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  }

  // @ts-ignore
  public $api: $Fetch

  constructor(apiBase: string) {
    this.apiBase = apiBase
    this.init()
  }

  setJwt(jwt: string) {
    this.$api = this.$api.create({
      baseURL: this.apiBase,
      headers: {
        ...this.defaultHeaders,
        Authorization: `Bearer ${jwt}`,
      },
    })
  }

  init() {
    this.$api = $fetch.create({
      baseURL: this.apiBase,
      headers: this.defaultHeaders,
    })
  }
}
