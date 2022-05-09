import { ProviderContext, useSnackbar } from "notistack";

// Must be imported at least once in the app to initialize the ref
let snackbar: ProviderContext;

export function SnackbarConfigurator() {
  snackbar = useSnackbar();
  return null;
}

// Export no-named default so consumer can name as desired/required
const Snackbar = {
  success(message: string, options = {}) {
    this.toast(message, { ...options, variant: "success" });
  },
  warning(message: string, options = {}) {
    this.toast(message, { ...options, variant: "warning" });
  },
  info(message: string, options = {}) {
    this.toast(message, { ...options, variant: "info" });
  },
  error(message: string, options = {}) {
    this.toast(message, { ...options, variant: "error" });
  },
  toast(message: string, options = {}) {
    snackbar.enqueueSnackbar(message, options);
  },
};

export default Snackbar;
