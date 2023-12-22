import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.error(error)
  return (
    <>
      Error user management
      {error}
    </>
  )
}

export { Error }
