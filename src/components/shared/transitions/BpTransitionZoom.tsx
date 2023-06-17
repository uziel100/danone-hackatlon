import { Zoom, SlideProps } from '@mui/material'
import { forwardRef } from 'react'

const BpTransitionZoom = forwardRef((props: SlideProps, ref) => (
  <Zoom exit in={false} unmountOnExit ref={ref} {...props} />
))
export default BpTransitionZoom
