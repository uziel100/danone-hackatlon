import React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { Divider, IconButton, LinearProgress, styled } from '@mui/material';
import { BpTransitionSlideUp } from '../../transitions';
import BpTypography from '../../typography/BpTypography';

export interface BpModalProps extends DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  loading?: boolean;
}

export interface DialogTitleProps {
  children?: React.ReactNode;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.spacing(1)
  }
}));

const BpDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <>
      <DialogTitle component="div" sx={{ m: 0, px: 3, mb: children ? 0 : 3 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <Divider />
    </>
  );
};

const BpModal: React.FC<BpModalProps> = ({ children, open, onClose, title, loading = false, ...props }) => (
    <StyledDialog {...props} open={open} TransitionComponent={BpTransitionSlideUp}>
      {loading && <LinearProgress />}
      <BpDialogTitle onClose={onClose}>
        <BpTypography fontWeight={600} component="h2" variant="body1" color="grey.900">
          {title}
        </BpTypography>
      </BpDialogTitle>
      {children}
    </StyledDialog>
  );

export default BpModal;
