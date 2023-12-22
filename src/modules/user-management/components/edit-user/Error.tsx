import { useRouteError } from 'react-router-dom'
import { ErrorTypes } from '@/modules/user-management/types'

const Error = () => {
  const error = useRouteError() as ErrorTypes
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export { Error }
