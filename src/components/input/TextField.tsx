import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'
import { Control, Controller } from 'react-hook-form'

export type TextFieldProps<controlled extends boolean = false> =
  MuiTextFieldProps &
    (controlled extends true
      ? {
          name: string
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          control: Control<any>
          disabled?:boolean
        }
      : { control?: undefined })
const TextField = ({
  name,
  control,
  disabled,
  ...props
}: TextFieldProps<true | false>) => {
  if (control) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <MuiTextField
            {...props}
            {...field}
            error={!!error}
            helperText={error?.message}
            disabled={disabled}
          />
        )}
      />
    )
  }
  return <MuiTextField {...props} />
}

export default TextField
