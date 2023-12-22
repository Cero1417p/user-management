import { Box, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useSearch } from '@/modules/user-management/components/user-list/components/search/useSearch'

const Search = () => {
  const { value, handleSearch } = useSearch()
  return (
    <Box>
      <TextField
        defaultValue={value}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        placeholder="Buscar..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        size="small"
        variant="outlined"
        sx={{ borderRadius: 0 }}
      />
    </Box>
  )
}

export { Search }
