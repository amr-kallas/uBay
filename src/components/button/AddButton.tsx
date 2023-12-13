import AddIcon from '@mui/icons-material/Add'
import { Fab } from '@mui/material'
import HideOnScroll from '../../features/layout/components/HideOnScroll'

const AddButton = () => {
  return (
    <HideOnScroll direction="up" active={true}>
      <Fab
        color="primary"
        sx={{ svg: { color: 'white' }, position: 'fixed', bottom: 15, left: 15 }}
      >
        <AddIcon />
      </Fab>
    </HideOnScroll>
  )
}

export default AddButton
