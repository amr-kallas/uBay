import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuProps,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material'
import { Control, Controller } from 'react-hook-form'
type SelectProps = {
  control: Control<any>
  children: React.ReactNode
  name: string
} & MuiSelectProps
const MenuProps:Partial<MenuProps>={
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
  anchorOrigin: {
    vertical: "top",
    horizontal: "left"
  },
  transformOrigin: {
    vertical: "bottom",
    horizontal: "left"
  },
  // getContentAnchorEl: null
}
// MenuProps={{
//   anchorOrigin: {
//     vertical: "bottom",
//     horizontal: "left"
//   },
//   transformOrigin: {
//     vertical: "top",
//     horizontal: "left"
//   },
//   getContentAnchorEl: null
// }}
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
                  MenuProps={MenuProps}
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
