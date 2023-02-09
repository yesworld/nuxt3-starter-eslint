import { FetchOptions } from 'ohmyfetch'
import ApiService from '@/modules/auth/apiService'
import { IFormLogin } from '@/modules/auth/types'

export const sendLoginRequest = async (body: IFormLogin): Promise<any> => {
  const httpClient = useNuxtApp().$http as ApiService

  try {
    const res = await httpClient.$api('/api/auth/login', {
      initialCache: false,
      method: 'post',
      body,
    } as FetchOptions)

    return {
      status: 200,
      error: null,
      data: res.token,
    }
  } catch (err: any) {
    return {
      status: err.response.status,
      error: err.response.statusText || 'Error auth',
      data: null,
    }
  }
}
