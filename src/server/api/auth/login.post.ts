import { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event)
  if (body.email !== 'admin@gmail.com') {
    event.res.statusCode = 401
    event.res.statusMessage = 'Not logged in'
    return {}
  }

  return {
    JWT:
      // eslint-disable-next-line max-len
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTUxNjIzOTAyMn0.BBOywDY8s0oxuX29VTELxSUbrZKJpAj9W4ZlRNbY9L4',
  }
})
