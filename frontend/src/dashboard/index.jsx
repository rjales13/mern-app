import React from "react";
import { useSelector } from "react-redux";

export default (props) => {
  const user = useSelector((state) => state.auth.user);
  return <div>Hello <strong>{user.name}</strong></div>;
};