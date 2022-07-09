import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "../../ContextAPI/AuthContext";

const ProtectedPage = props => {
  const { currentUser } = useAuth();
  const { path } = props;
  const location = useLocation();

  if (
    path === "/signin" ||
    path === "/register" ||
    path === '/forgot-password' ||
    path === "/reset-password"
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? "/"} />
    ) : (
      <Route {...props} />
    );
  }

  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/signin",
        state: { from: path },
      }}
    />
  );
};

export default ProtectedPage;
