import { Slide, SlideProps } from '@mui/material'
import { forwardRef } from 'react'

const BpTransitionSlideUp = forwardRef((props: SlideProps, ref) => (
  <Slide exit in={false} unmountOnExit direction="up" ref={ref} {...props} />
))
export default BpTransitionSlideUp
