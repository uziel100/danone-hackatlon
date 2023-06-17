import { ElementType, FC } from 'react';
import Container, { ContainerProps } from '@mui/material/Container';

const defaultWidth = {
  maxWidth: '768px',
  minWidth: '320px'
};

interface ContainerAppProps extends ContainerProps {
  component?: ElementType;
}

const ContainerApp: FC<ContainerAppProps> = ({
  maxWidth = 'sm',
  children,
  component = 'div',
  disableGutters = false,
  sx = {}
}): JSX.Element => (
  <Container maxWidth={maxWidth} component={component} disableGutters={disableGutters} sx={{ ...defaultWidth, ...sx }}>
    {children}
  </Container>
);

export default ContainerApp;
