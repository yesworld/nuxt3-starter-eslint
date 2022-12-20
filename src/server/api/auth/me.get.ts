import { H3Event } from 'h3'
import { IContextAuth } from '~/server/middleware/jwtcheck'

export default defineEventHandler((event: H3Event) => {
  const contextAuth: IContextAuth = event.context.auth

  return {
    profile: contextAuth.user,
  }
})
