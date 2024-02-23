import React from "react";
import Snackbar from "./Snackbar";

import { ReactComponent as SnackbarSuccessIcon } from "./icons/Snackbar-info.svg";
import { ReactComponent as SnackbarErrorIcon } from "./icons/Snackbar-error.svg";
import { ReactComponent as SnackbarInfoIcon } from "./icons/Snackbar-info.svg";
import { ReactComponent as SnackbarWarningIcon } from "./icons/Snackbar-warning.svg";


export const Variant={
  error:"error",
  success:"success",
  info:"info",
  warning:"warning",
}

const SnackbarContainer = ({
  variant = Variant.error,
  message = "You have successfully read this message.",
  coordinate
 }) => {
  const snackbarIcon = {
    error: <SnackbarErrorIcon />,
    success: <SnackbarSuccessIcon />,
    info: <SnackbarInfoIcon />,
    warning: <SnackbarWarningIcon />,
  };
  return (
    <div className="snackbar-container" style={coordinate}>
      <Snackbar
        icon={snackbarIcon[variant]}
        message={message}
        variant={variant}
      />
    </div>
  )
};

export default SnackbarContainer;