import { InputAdornment } from '@mui/material'
import TextField from '../../../components/input/TextField'
import SearchIcon from '@mui/icons-material/Search'
const Search = () => {
  return (
    <form style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{
          maxWidth: 250,
          margin: '10px auto',
          mt:2,
          '.MuiInputBase-root': {
            pl: '6px',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {/* <IconButton type="submit" aria-label="search"></IconButton> */}
    </form>
  )
}

export default Search
