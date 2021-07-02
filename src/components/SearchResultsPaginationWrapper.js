import React from "react";
import { useViewPort } from "../custom-hooks/useViewPort";
import SearchResultsPaginationDesktop from "./SearchResultsPaginationDesktop";
import SearchResultsPaginationMobile from "./SearchResultsPaginationMobile";

function SeaarchResultsPaginationWrapper(props) {
  /** Destructure width variable from useViewPort hook */
  const { width } = useViewPort();

  /** Declare variable for minimum breakpoint value */
  const breakpoint = 381;

  return (
    <React.Fragment>
      {width > breakpoint && <SearchResultsPaginationDesktop {...props} />}
      {width < breakpoint && <SearchResultsPaginationMobile {...props} />}
    </React.Fragment>
  );
}

export default SeaarchResultsPaginationWrapper;
