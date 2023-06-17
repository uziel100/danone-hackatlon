import { FC } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import { alpha, styled } from '@mui/material/styles';
import { LoadingButtonProps } from '@mui/lab';

interface ButtonStyledProps {
  isUppercase: boolean;
  isDisabled: boolean;
}

const ButtonStyled = styled(LoadingButton, {
  shouldForwardProp: (prop: string) => !['isUppercase', 'isDisabled'].includes(prop)
})<ButtonStyledProps>(({ isUppercase, isDisabled, theme }) => ({
  borderRadius: '24px',
  height: '46px',
  fontSize: '1rem',
  textTransform: isUppercase ? 'uppercase' : 'inherit',
  transition: 'transform 300ms ease',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 700,
  paddingInline: 24,
  ...(isDisabled && {
    backgroundColor: `${alpha(theme.palette.primary.main, 0.1)} !important`
  }),
  ':active': {
    transform: 'scale(1.03)'
  }
}));

export interface BpButtonProps extends Omit<LoadingButtonProps, 'isUppercase'> {
  isUppercase?: boolean;
}

const BpButton: FC<BpButtonProps> = ({
  children,
  isUppercase = false,
  color = 'primary',
  loading = false,
  fullWidth = true,
  variant = 'contained',
  disabled = false,
  ...props
}) => (
  <ButtonStyled
    disableElevation
    isDisabled={disabled || loading}
    disabled={disabled || loading}
    color={color}
    isUppercase={isUppercase}
    loading={loading}
    fullWidth={fullWidth}
    variant={variant}
    loadingIndicator={<CircularProgress color="inherit" size={16} />}
    {...props}
  >
    {children}
  </ButtonStyled>
);

export default BpButton;
