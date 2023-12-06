import { Slide, useScrollTrigger } from '@mui/material';
import React from 'react'
type HideOnScroll={
    window?: () => Window;
  children: React.ReactElement;
}
const HideOnScroll = ({ children, window }:HideOnScroll) => {
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

export default HideOnScroll