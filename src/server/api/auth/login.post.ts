import { H3Event } from 'h3'

interface IResponse {
  code: number
  message: string
  data: any
}

export default defineEventHandler(async (event: H3Event): Promise<IResponse> => {
  const body = await readBody(event)
  if (body.email !== 'admin@gmail.com') {
    event.res.statusCode = 401
    event.res.statusMessage = 'Not logged in'

    return {
      code: event.res.statusCode,
      message: event.res.statusMessage,
      data: {},
    }
  }

  return {
    code: 200,
    message: 'ok',
    data: {
      JWT:
        // eslint-disable-next-line max-len
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTUxNjIzOTAyMn0.BBOywDY8s0oxuX29VTELxSUbrZKJpAj9W4ZlRNbY9L4',
    },
  }
})
