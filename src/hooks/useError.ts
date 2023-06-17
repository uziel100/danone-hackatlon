import { getValidationError } from '@/const/index';
import { useSnackbar, VariantType } from 'notistack';

/**
 * Hook to display a snackbar message when an error occurs.
 */
const useError = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleShowAlert = (msg: any) => {
    const finalMsg = getValidationError(msg);
    return finalMsg;
  };

  const showAlert = {
    toast(msg: string, variant: VariantType) {
      const formatMsg = handleShowAlert(msg);
      enqueueSnackbar(formatMsg, { variant });
    },
    success(msg: string) {
      this.toast(msg, 'success');
    },
    error(msg: string) {
      this.toast(msg, 'error');
    },
    info(msg: string) {
      this.toast(msg, 'info');
    },
    warning(msg: string) {
      this.toast(msg, 'warning');
    }
  };

  const logError = (error: any, message?: string): void => {
    if (error.message) {
      const customMessage = message || error.message.split(':').pop().trim();
      const finalMsg = getValidationError(customMessage);
      showAlert.error(finalMsg);
    }
  };

  return {
    logError,
    showAlert
  };
};

export default useError;
