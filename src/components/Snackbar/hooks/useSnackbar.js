import React, { useMemo, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import SnackbarContainer from "../SnackbarContainer";

const useSnackbar = () => {
 const notifyBar = useRef();
  const timeoutHistory = useRef();

  const wrapperElement = useMemo(() => {
    let wrapperElement = document.getElementById("wrapperId");

    if (!wrapperElement) {
      wrapperElement = document.createElement("div");
      wrapperElement.setAttribute("id", "wrapperId");
      document.body.appendChild(wrapperElement);
    }

    return wrapperElement;
  }, []);

  const toHtml = (htmlString) => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, "text/html");
    const notifyBarNode = html.body.children[0];
    return { notifyBarNode };
  };

  const removeItem = () => {
    wrapperElement.innerHTML = "";
    if (timeoutHistory.current) clearTimeout(timeoutHistory.current);
    timeoutHistory.current = undefined;
  };

  const appendSnackbar = (variant, options,coordinate) => {
    removeItem();

    try {
      const { message, autoHideDuration = 6000 } = options;

      const { notifyBarNode } = toHtml(
        renderToStaticMarkup(
          <SnackbarContainer
            handleClose={removeItem}
            variant={variant}
            message={message}
            coordinate={coordinate}
          />
        )
      );

      wrapperElement.appendChild(notifyBarNode);

      notifyBar.current = notifyBarNode;

      timeoutHistory.current = setTimeout(
        removeItem,
        autoHideDuration < 2000 ? 2000 : autoHideDuration
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { appendSnackbar };
};

export default useSnackbar;