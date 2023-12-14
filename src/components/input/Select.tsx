import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material'
import { Control, Controller } from 'react-hook-form'
type SelectProps = {
  control: Control<any>
  children: React.ReactNode
  name: string
} & MuiSelectProps

const Select = ({ control, children, name, ...props }: SelectProps) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <FormControl fullWidth error={!!error}>
                <InputLabel id="demo-simple-select-label">{name}</InputLabel>
                <MuiSelect
                  labelId="controlled-select-label"
                  id="controlled-select"
                  label={name}
                  {...field}
                  {...props}
                  error={!!error}
                >
                  {children}
                </MuiSelect>
                <FormHelperText>{error && error.message}</FormHelperText>
              </FormControl>
            </>
          )
        }}
      />
    </div>
  )
}

export default Select
