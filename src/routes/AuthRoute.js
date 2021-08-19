import { Button, Typography } from "antd";
import { connect } from "dva";
import { Redirect } from "dva/router";
import React, { useEffect } from "react";
import styles from "./index.css";
const AuthRoute = connect(
  ({ loading, auth: { isAuthenticated, user }, dispatch }) => ({
    loading: loading.models.auth,
    isAuthenticated,
    user,
    dispatch,
  })
)(function (props) {
  const { loading, isAuthenticated, user, dispatch } = props;
  useEffect(() => {
    dispatch({ type: "auth/checkLogin" });
  }, []);
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <Typography.Title type="secondary">Login</Typography.Title>
        <Button
          type="primary"
          onClick={() =>
            dispatch({
              type: "auth/login",
              payload: {
                username: "",
                password: "",
              },
            })
          }
        >
          FAKE LOGIN
        </Button>
      </div>
    </div>
  );
});

export default AuthRoute;
