import { FC } from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { BpTransitionSlideUp } from '@/components/shared';

interface ModalCommonProps extends DialogProps {
  children: React.ReactNode;
}

const ModalCommon: FC<ModalCommonProps> = ({ open = false, onClose, children }) => (
  <Dialog
    open={open}
    onClose={onClose || undefined}
    PaperProps={{
      sx: {
        borderRadius: 2,
        textAlign: 'center',

        maxWidth: 560
      }
    }}
    TransitionComponent={BpTransitionSlideUp}
  >
    <DialogContent>{children}</DialogContent>
  </Dialog>
);

export default ModalCommon;
