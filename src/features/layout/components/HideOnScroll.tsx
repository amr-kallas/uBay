import { Slide, useScrollTrigger } from '@mui/material';
import React from 'react'
type HideOnScroll={
    window?: () => Window;
  children: React.ReactElement;
  direction:'left'|'up'|'down'|'right'
  active:boolean
}
const HideOnScroll = ({ children, window ,direction,active}:HideOnScroll) => {
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    })&&active;
  
    return (
      <Slide appear={false} direction={direction} in={!trigger}>
        {children}
      </Slide>
    );
}

export default HideOnScroll