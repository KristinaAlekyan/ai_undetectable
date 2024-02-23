

const SnackbarContent = ({ children }) => {
  return (
    <div className="snackbar-content-wrapper">
      <div className="snackbar-content">
        {children}
      </div>
    </div>
  );
};

export default SnackbarContent;