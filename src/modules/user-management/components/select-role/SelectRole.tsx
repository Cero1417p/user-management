import { Dispatch, SetStateAction, useState } from 'react'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material'

interface ISelectRole extends SelectProps<string> {
  select?: string
  setSelect?: Dispatch<SetStateAction<string>>
  label?: boolean
  error?: boolean
  helperText?: string
  onChange: (event: SelectChangeEvent<string>) => void
}
const SelectRole = ({
  select,
  label = true,
  error = false,
  helperText = 'Error',
  onChange,
  ...rest
}: ISelectRole) => {
  const [role, setRole] = useState<string>(select ? select : '')
  const [open, setOpen] = useState(false)

  const handleChange = (event: SelectChangeEvent<typeof role>) => {
    setRole(event.target.value)
    //setSelect && setSelect(event.target.value)
    onChange && onChange(event)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div style={{ width: '100%' }}>
      {/* Contenedor del ancho deseado */}
      <FormControl fullWidth error={error}>
        {label && <InputLabel>Rol</InputLabel>}
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={role}
          label={label ? 'Rol' : null}
          onChange={handleChange}
          {...rest}
        >
          <MenuItem value="">
            <em>none</em>
          </MenuItem>
          <MenuItem value="ADMIN">ADMIN</MenuItem>
          <MenuItem value="USER">USER</MenuItem>
          <MenuItem value="OPERATOR">OPERATOR</MenuItem>
        </Select>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </div>
  )
}
export { SelectRole }
