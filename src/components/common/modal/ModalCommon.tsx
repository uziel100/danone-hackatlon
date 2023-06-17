import { FC } from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { BpTransitionSlideUp, BpTypography } from '@/components/shared';

interface ModalCommonProps extends DialogProps {
  IconComponent: JSX.Element;
  ButtonActions: JSX.Element;
  textPrimary?: string;
  textSecondary?: string;
}

const ModalCommon: FC<ModalCommonProps> = ({
  open = false,
  ButtonActions,
  IconComponent,
  textPrimary,
  textSecondary
}) => (
  <Dialog
    open={open}
    PaperProps={{
      sx: {
        borderRadius: 4,
        textAlign: 'center',
        paddingX: 3,
        paddingY: 2,
        maxWidth: 560
      }
    }}
    TransitionComponent={BpTransitionSlideUp}
  >
    <DialogContent>
      {IconComponent}
      <BpTypography mt={1} component="h2" variant="h5" color="primary.main" fontWeight={700}>
        {textPrimary}
      </BpTypography>
      <BpTypography mt={2} component="p" variant="body2" color="grey.700" fontWeight={400}>
        {textSecondary}
      </BpTypography>
    </DialogContent>
    <DialogActions sx={{ gap: 1 }}>{ButtonActions}</DialogActions>
  </Dialog>
);

export default ModalCommon;
