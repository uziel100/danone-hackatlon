import { styled } from '@mui/material/styles';
import { alpha, AppBar, Badge, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter
    })
  }
}));

interface ListItemStyleProps {
  activeRoot: boolean;
}

export const ListItemStyle = styled(ListItemButton, {
  shouldForwardProp: prop => prop !== 'activeRoot' && prop !== 'activeSub' && prop !== 'subItem'
})<ListItemStyleProps>(({ activeRoot, theme }) => ({
  ...theme.typography.body2,
  position: 'relative',
  height: 46,
  fontWeight: 600,
  textTransform: 'capitalize',
  padding: 8,
  gap: 12,
  marginBottom: theme.spacing(1),
  '& svg': {
    color: theme.palette.grey[700]
  },
  '& .MuiBadge-badge': {
    background: '#7A39CD',
    color: '#fff'
  },
  color: theme.palette.grey[700],
  borderRadius: 8,
  // activeRoot
  ...(activeRoot && {
    color: theme.palette.primary.main,
    backgroundColor: '#D8E1FF',
    ':hover': {
      backgroundColor: alpha('#D8E1FF', 0.5)
    },
    '& svg': {
      color: theme.palette.primary.main
    },
    '& .MuiBadge-badge': {
      background: theme.palette.primary.main,
      color: '#fff'
    }
  })
}));

export const ListItemTextStyle = styled(ListItemText)(({ theme }) => ({
  whiteSpace: 'nowrap',
  transition: theme.transitions.create(['width', 'opacity'], {
    duration: theme.transitions.duration.shorter
  })
}));

export const ListItemIconStyle = styled(ListItemIcon)({
  width: 26,
  height: 26,
  minWidth: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': { width: '100%', height: '100%' }
});

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
  background: '#E8EAF3',
  cursor: 'pointer',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 216,
  '&:hover': {
    background: alpha('#E8EAF3', 0.8),
    boxShadow: '4.5px 4px 7px -4.5px #dddddd'
  },
  transition: theme.transitions.create(['boxShadow', 'background', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  })
}));
