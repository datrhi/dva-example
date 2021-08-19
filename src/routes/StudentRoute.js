import { Button, Layout, Spin } from "antd";
import { connect } from "dva";
import React, { useEffect } from "react";
import { Redirect } from "dva/router";
import StudentList from "../components/StudentList";
import styles from "./index.css";
const StudentRoute = connect(
  ({ loading, students: { items }, auth: { isAuthenticated }, dispatch }) => ({
    loading: loading.models.students,
    items: items,
    dispatch,
    isAuthenticated,
  })
)(function (props) {
  useEffect(() => {
    props.dispatch({
      type: "students/fetchStudents",
      payload: {
        _limit: 100,
        _page: 1,
      },
    });
  }, []);
  const handleDelete = (id) => {
    props.dispatch({
      type: "students/delete",
      payload: id,
    });
  };
  const { loading, items, isAuthenticated } = props;
  // console.log(items);
  return isAuthenticated ? (
    <div className={styles.loginWrapper}>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Layout.Content
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 100px)",
            margin: "30px auto",
            backgroundColor: "white",
            padding: "20px",
          }}
        >
          <Button
            type="primary"
            style={{ alignSelf: "flex-end" }}
            onClick={() => props.dispatch({ type: "auth/logout" })}
          >
            Logout
          </Button>

          <StudentList students={items} onDelete={handleDelete} />
        </Layout.Content>
      )}
    </div>
  ) : (
    <Redirect to="/login" />
  );
});

export default StudentRoute;
