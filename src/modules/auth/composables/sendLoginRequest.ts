import { FetchOptions } from 'ofetch'
import { IFormLogin } from '@/modules/auth/types'

export const sendLoginRequest = async (body: IFormLogin): Promise<any> => {
  try {
    const res = await useNuxtApp().$api('/api/auth/login', {
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
