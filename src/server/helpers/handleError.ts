import { sendError, createError, H3Event } from 'h3'

interface IErrorResponse {
  code: number
  message: string
}

export default function handleError(err: IErrorResponse, event: H3Event) {
  const error = createError({
    statusCode: err.code,
    statusMessage: err.message,
  })

  sendError(event, error, false)
}
