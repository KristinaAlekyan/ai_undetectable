import React from "react";


const SnackbarIconFrame = ({ children }) => {
  return (
    <div className="snackbar-icon-frame-wrapper">
      <div className="snackbar-icon-frame">
        <div className="snackbar-icon">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SnackbarIconFrame;