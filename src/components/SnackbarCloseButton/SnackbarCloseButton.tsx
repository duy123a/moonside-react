import { useSnackbar, SnackbarKey } from 'notistack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export interface SnackbarCloseButtonProps {
  snackbarKey: SnackbarKey;
}

export default function SnackbarCloseButton({ snackbarKey }: SnackbarCloseButtonProps) {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)}>
      <CloseIcon />
    </IconButton>
  );
}
