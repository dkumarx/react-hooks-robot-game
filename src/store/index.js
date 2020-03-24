import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
  x: 0,
  y: 0
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
