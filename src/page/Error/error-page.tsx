import { useRouteError } from 'react-router-dom'

interface RouterError {
  status: number
  statusText: string
  internal: boolean
  data: string
  error: RouterError
  message: string
}

export function ErrorPage() {
  const error = useRouteError() as RouterError
  console.error(error)

  return (
    <div id="error-page" className="container flex justify-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
