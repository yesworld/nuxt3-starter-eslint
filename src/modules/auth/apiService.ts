import { $Fetch, $fetch } from 'ohmyfetch'

export default class ApiService {
  private apiBase: string
  private defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  }

  public $api: $Fetch

  constructor(apiBase: string) {
    this.apiBase = apiBase
    this.$api = $fetch.create({
      baseURL: this.apiBase,
      headers: this.defaultHeaders,
    })
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
}
