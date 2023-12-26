import { Box, Tab, Tabs, useTheme } from '@mui/material'
import { useState } from 'react'
//@ts-expect-error nothing
import SwipeableViews from 'react-swipeable-views'
import {  Mine} from '../features/post'
import Storage from '../utils/Storage'
type TabPanelProps = {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}
const Transaction = () => {
  const [value, setValue] = useState(
    Number(Storage.getTransaction() as unknown as number) ?? 0
  )
  const theme = useTheme()
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    Storage.setTransaction(newValue as unknown as string)
  }
  const handleChangeIndex = (index: number) => {
    setValue(index)
  }
  function TabPanel(props: TabPanelProps) {
    const { children, value, index } = props

    return (
      <div hidden={value !== index}>
        {value === index && (
          <Box
            sx={{ maxWidth: 575, m: 'auto', px: 1, mb: { xs: 9, sm: 'auto' } }}
          >
            {children}
          </Box>
        )}
      </div>
    )
  }
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          bgcolor: 'white',
          '.MuiTabs-flexContainer': {
            justifyContent: 'center',
          },
          mt: 7,
        }}
      >
        <Tab
          sx={{
            fontSize: 15,
            minWidth: 200,
            borderRight: '1px solid #ddd',
          }}
          label="My Purchases"
        />
        <Tab sx={{ fontSize: 15, minWidth: 200 }} label="My Sales" />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
        style={{ minHeight: '100vh'}}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Mine isBuy={true} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Mine isBuy={false} />
        </TabPanel>
      </SwipeableViews>
    </>
  )
}

export default Transaction
