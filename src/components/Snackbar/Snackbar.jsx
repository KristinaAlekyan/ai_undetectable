import React from "react";

import DangerouslyDescriptionUI from "../../shared/DangerouslyDescriptionUI"
import SnackbarContent from "./SnackbarContent";
import SnackbarIconFrame from "./SnackbarIconFrame";

import "./styles/snackbar.css";


const Snackbar = ({
  icon,
  variant,
  message,
}) => {
  return (
    <div className={`snackbar snackbar--${variant}`}>
      <SnackbarContent>
        <SnackbarIconFrame>{icon}</SnackbarIconFrame>
        <DangerouslyDescriptionUI
          text={message}
          size="16px"
          textAlign="left"
          lineHeight="24px"
        />
      </SnackbarContent>
    </div>
  );
};

export default Snackbar;