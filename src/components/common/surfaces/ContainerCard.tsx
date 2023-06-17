import type { ReactNode, FC } from 'react';
import { Box, Card } from '@mui/material';

interface ContainerCardProps {
  children: ReactNode;
}

const ContainerCard: FC<ContainerCardProps> = ({ children }):JSX.Element => (
  <Box component={Card} elevation={0} borderRadius="0.75rem" border="1px solid #EAE9EA">
    {children}
  </Box>
);
export default ContainerCard;
