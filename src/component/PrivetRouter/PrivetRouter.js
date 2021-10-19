import React from "react";
import { Redirect, Route } from "react-router";
import Loader from "react-loader-spinner";

import useDataAndAuth from "../Context/useDataAndAuth";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PrivetRouter = ({ children, ...rest }) => {
  const { usefirebaseByContext } = useDataAndAuth();
  const { user, isLoading } = usefirebaseByContext;
  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    />
  );
};

export default PrivetRouter;
