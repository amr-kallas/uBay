import {
  Autocomplete,
  Box,
  Paper,
  Stack,
  TextField,
  useTheme,
} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import { queries as queryCategory } from '../../../category/api/query'
import { queries as queryCity } from '../../../cities/api/queries'
import Submit from '../../../../components/button/Submit'
import queries, { keys } from '../../api/queries'
import { keys as postKeys } from '../../../post/api/queries'
import { Controller, useForm } from 'react-hook-form'
import { useSnackbarContext } from '../../../../context/snackbarContext'
import { useQueryClient } from 'react-query'
import { defaultValues, favoriteBody } from './type'
import { useEffect } from 'react'

const Preferences = () => {
  const me = queries.GetMe()
  const snackbar = useSnackbarContext()
  const { control, handleSubmit, reset } = useForm({
    defaultValues: me.isSuccess ? favoriteBody(me.data) : defaultValues,
  })
  const theme = useTheme()
  const { data: category } = queryCategory.Categories()
  const { data: city } = queryCity.Cities()
  useEffect(() => {
    reset(favoriteBody(me.data))
  }, [reset, me.data])

  const favorite = queries.Favorite()
  const queryClient = useQueryClient()
  const categories = category
    ? category.data.map((cat) => {
        return {
          name: cat.name,
          _id: cat._id,
        }
      })
    : []
  const cities = city
    ? city.data.map((item) => {
        return {
          name: item.name,
          _id: item._id,
        }
      })
    : []
  const onSubmit = (data: any) => {
    const cityID = data.favoriteCities.map((item: any) => item._id)
    const categoryID = data.favoriteCategories.map((item: any) => item._id)
    favorite.mutate(
      { favoriteCities: cityID, favoriteCategories: categoryID },
      {
        onSuccess: (data) => {
          console.log(data)
          queryClient.invalidateQueries(keys.getMe._def)
          queryClient.invalidateQueries(postKeys.getAll._def)
          snackbar({
            message: 'the prefernces has been updated successfully',
            severity: 'success',
          })
        },
        onError: (error) => {
          console.log(error)
        },
      }
    )
  }
  return (
    <Box mx={2} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Paper
        sx={{
          maxWidth: 600,
          width: 1,
          mt: 2,
          mx: 'auto',
          p: 5,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Stack gap={2}>
          <Controller
            name="favoriteCategories"
            control={control}
            render={({ field }) => (
              <Autocomplete
                multiple
                options={categories}
                disabled={me.isLoading}
                getOptionLabel={(option) => option.name}
                onChange={(_e, data) => field.onChange(data)}
                value={field.value}
                isOptionEqualToValue={(option, value) =>
                  option._id === value._id
                }
                renderInput={(params) => (
                  <TextField {...params} label="Favorite Categories" />
                )}
                sx={{
                  width: '90%',
                  m: 'auto !important',
                  '.MuiAutocomplete-tag': {
                    bgcolor: theme.palette.secondary[700],
                    color: 'white',
                    svg: {
                      color: 'white !important',
                    },
                  },
                }}
              />
            )}
          />
          <Controller
            name="favoriteCities"
            control={control}
            render={({ field }) => (
              <Autocomplete
                multiple
                disabled={me.isLoading}
                options={cities}
                getOptionLabel={(option) => option.name}
                onChange={(_e, data) => field.onChange(data)}
                value={field.value}
                isOptionEqualToValue={(option, value) =>
                  option._id === value._id
                }
                renderInput={(params) => (
                  <TextField {...params} label="Favorite Cities" />
                )}
                sx={{
                  width: '90%',
                  m: 'auto !important',
                  '.MuiAutocomplete-tag': {
                    bgcolor: theme.palette.secondary[700],
                    color: 'white',
                    svg: {
                      color: 'white !important',
                    },
                  },
                }}
              />
            )}
          />
          <Submit
            sx={{
              width: 'fit-content',
              m: 'auto',
            }}
            isLoading={favorite.isLoading}
          >
            Save{' '}
            {!favorite.isLoading && (
              <SaveIcon sx={{ color: 'white', ml: '8px' }} />
            )}
          </Submit>
        </Stack>
      </Paper>
    </Box>
  )
}

export default Preferences
