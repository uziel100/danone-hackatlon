import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

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
  background: !isScroll ? '#FFF' : 'rgba(255,255,255,0.6)',
  backdropFilter: 'blur(15px)',
  justifyContent: 'center'
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
