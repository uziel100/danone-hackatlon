import { styled } from '@mui/material/styles';
import { AppBar, Badge } from '@mui/material';

export const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter
    })
  }
}));

export const BadgeStyle = styled(Badge)({
  marginRight: 16,
  display: 'block'
});

interface RootAppBarStyleProps {
  isScroll: boolean;
}

export const RootAppBarStyle = styled(AppBar, {
  shouldForwardProp: (prop: string) => !['isScroll'].includes(prop)
})<RootAppBarStyleProps>(({ theme, isScroll }) => ({
  transition: theme.transitions.create(['top', 'background', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  width: '100%',
  position: 'fixed',
  height: '70px',
  zIndex: theme.zIndex.appBar,
  padding: theme.spacing(1, 0),
  boxShadow: !isScroll ? 'none' : '0px 10px 15px -11px rgba(0,0,0,0.1)',
  top: 0,
  background: !isScroll ? '#F2F3F7' : 'rgba(255,255,255,0.6)',
  backdropFilter: 'blur(15px)'
}));

export const SessionMenuStyle = styled('button', {
  shouldForwardProp: (prop: string) => !['some'].includes(prop)
})(({ theme }) => ({
  padding: 8,
  paddingRight: 12,
  borderRadius: 36,
  background: 'transparent',
  cursor: 'pointer',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 216,
  '&:hover': {
    background: '#fff',
    boxShadow: 'none'
  },
  transition: theme.transitions.create(['boxShadow', 'background', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  })
}));
