import { UseFormSetError } from 'react-hook-form'
import { snackbar } from '../context/snackbarContext'
type err = {
  feedback?: UseFormSetError<any>
  Err: any
  snackbar: (props: snackbar) => void
}
const parseError = ({ feedback, Err,snackbar }: err) => {
  const data = Err.response.data
  switch (data.type) {
    case 'form':
      data.errors.forEach((error: { path: any; message: string }) => {
        const message = error.message
        if(feedback)
        feedback(`${error.path}`, { message })
      })
      break;
      default:
        snackbar({message:data.message,severity:'error'})
  }
}
export const paginateParams=(params:any)=>{
  return {...params}
}
export default parseError
