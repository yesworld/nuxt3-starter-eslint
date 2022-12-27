import { useNuxtApp } from 'nuxt/app'
import { FetchOptions } from 'ohmyfetch'
import ApiService from '@/modules/auth/apiService'
import { IFormLogin } from '@/modules/auth/types'

export const sendLoginRequest = async (body: IFormLogin): Promise<any> => {
  const httpClient = useNuxtApp().$http as ApiService

  try {
    return await httpClient.$api('/api/auth/login', {
      initialCache: false,
      method: 'post',
      body,
    } as FetchOptions)
  } catch (err: any) {
    // TODO: Обработать ошибки
    return {
      status: err.response.status,
      data: err.response.statusText || 'Error auth',
    }
  }
}
