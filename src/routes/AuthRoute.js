import { Alert, Button, Input, Spin, Typography } from "antd";
import { connect } from "dva";
import { Redirect } from "dva/router";
import React, { useEffect, useState } from "react";
import styles from "./index.css";
const AuthRoute = connect(
  ({ loading, auth: { isAuthenticated, user }, dispatch }) => ({
    loading: loading.models.auth,
    isAuthenticated,
    user,
    dispatch,
  })
)(function (props) {
  const { loading, isAuthenticated, dispatch } = props;
  const [username, setUsername] = useState("");
  useEffect(() => {
    dispatch({ type: "auth/checkLogin" });
  }, []);

  return isAuthenticated ? (
    <Redirect to="/" />
  ) : loading ? (
    <Spin size="large" />
  ) : (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <Typography.Title type="secondary">Login</Typography.Title>
        <Input
          size="large"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          style={{ marginTop: "15px" }}
          type="primary"
          onClick={() =>
            dispatch({
              type: "auth/login",
              payload: {
                username: username,
              },
            })
          }
        >
          FAKE LOGIN
        </Button>
        {/* <Alert
          style={{ marginTop: "20px" }}
          message="Username cannot be blank"
          type="error"
          showIcon
        /> */}
      </div>
    </div>
  );
});

export default AuthRoute;
