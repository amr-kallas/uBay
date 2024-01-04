import { Box, Tab, Tabs as MuiTabs, useTheme } from '@mui/material'
import { useState } from 'react'
//@ts-expect-error nothing
import SwipeableViews from 'react-swipeable-views'
import Purchases from './Purchases'
import Sales from './Sales'
import Storage from '../../../utils/Storage'
type TabPanelProps = {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}
const Tabs = () => {
  const [value, setValue] = useState(
    Number(Storage.getChatTab() as unknown as number) ?? 0
  )
  const theme = useTheme()
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    Storage.setChatTab(newValue as unknown as string)
  }
  const handleChangeIndex = (index: number) => {
    setValue(index)
  }
  function TabPanel(props: TabPanelProps) {
    const { children, value, index } = props

    return (
      <div hidden={value !== index}>
        {value === index && <Box>{children}</Box>}
      </div>
    )
  }
  return (
    <Box
      sx={{
        borderRight: '1px solid #eee',
        bgcolor: 'white',
        flex: 1.3,
      }}
    >
      <MuiTabs
        value={value}
        onChange={handleChange}
       
      >
        <Tab
          sx={{
            fontSize: 15,
            flex: 1,
            borderRight: '1px solid #ddd',
          }}
          label="My Purchases"
        />
        <Tab sx={{ fontSize: 15, flex: 1 }} label="My Sales" />
      </MuiTabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
        style={{
          maxWidth: { xs: 600, md: 'auto' },
          m: 'auto',
        }}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Purchases />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Sales />
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}

export default Tabs
