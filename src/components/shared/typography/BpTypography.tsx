import Typography, { TypographyProps } from '@mui/material/Typography';
import { forwardRef, ElementType } from 'react';

type FontVariant = 'primary' | 'secondary' | 'tertiary';

interface BpTypographyProps extends Omit<TypographyProps, 'fontFamily' | 'ref'> {
  label?: string;
  isUpperCase?: boolean;
  fontVariant?: FontVariant;
  fontWeight?: TypographyProps['fontWeight'];
  textAlign?: TypographyProps['textAlign'];
  component: ElementType;
  sx?: TypographyProps['sx'];
}

const FONT_FAMILY_VARIANT: Record<FontVariant, string> = {
  primary: 'Inter, Helvetica, Arial, sans-serif',
  secondary: 'Arial, sans-serif',
  tertiary: 'Helvetica, Arial, sans-serif'
};

const BpTypography = forwardRef<HTMLParagraphElement, BpTypographyProps>(
  (
    {
      variant = 'body1',
      label = '',
      isUpperCase = false,
      children,
      color = '#555',
      sx = {},
      fontVariant = 'primary',
      fontWeight = 400,
      textAlign = 'inherit',
      component = 'p',
      ...props
    },
    ref
  ) => (
    <Typography
      ref={ref}
      color={color}
      component={component}
      variant={variant}
      fontWeight={fontWeight}
      textAlign={textAlign}
      fontFamily={FONT_FAMILY_VARIANT[fontVariant]}
      sx={sx}
      {...props}
    >
      {isUpperCase && label.toUpperCase()}
      {!isUpperCase && label}
      {children && children}
    </Typography>
  )
);

export default BpTypography;
