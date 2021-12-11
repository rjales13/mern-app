import "../common/template/dependencies";
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import App from "./app";
import Auth from "../auth/auth";
import * as authActionCreators from "../auth/authActions";

export default (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { validateToken } = bindActionCreators(authActionCreators, dispatch);

  useEffect(() => {
    if (auth.user) validateToken(auth.user.token);
  }, []);

  if (auth.user && auth.validToken) {
    axios.defaults.headers.common["authorization"] = auth.user.token;
    return <App>{props.children}</App>;
  } else if (!auth.user && !auth.validToken) {
    return <Auth />;
  } else {
    return false;
  }
};
