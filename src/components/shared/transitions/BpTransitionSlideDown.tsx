import { Slide, SlideProps } from '@mui/material'
import { forwardRef } from 'react'

const BpTransitionSlideDown = forwardRef((props: SlideProps, ref) => (
  <Slide exit in={false} unmountOnExit direction="down" ref={ref} {...props} />
))

export default BpTransitionSlideDown
