import { createError, H3Event } from 'h3'
import users, { IUser } from '@/../fixture/users'

export interface IContextAuth {
  authenticated: boolean
  user: IUser
}

const ALLOW_ROUTING = ['/api/auth/login']

export default defineEventHandler((event: H3Event) => {
  if (ALLOW_ROUTING.includes(<string>event.req.url) || !event.req.url?.startsWith('/api')) {
    return
  }

  if (!event.req.headers.authorization) {
    throw createError({
      statusCode: 401,
      message: "User isn't Unauthorized",
    })
  }

  event.context.auth = <IContextAuth>{
    authenticated: true,
    user: users[0],
  }
})
