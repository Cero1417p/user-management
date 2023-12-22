import { useLocation, useSearchParams } from 'react-router-dom'
import { debounce } from '@mui/material'

const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  console.log('location: ', location.pathname)

  const handleSearch = debounce((term: string) => {
    console.log(`Searching... ${term}`)

    const params = new URLSearchParams(searchParams)
    //params.set('page', '1');
    if (term) {
      params.set('q', term)
    } else {
      params.delete('q')
    }
    setSearchParams(params)
    //replace(`${pathname}?${params.toString()}`);
  }, 300)

  return { value: searchParams.get('q')?.toString() || '', handleSearch }
}
export { useSearch }
