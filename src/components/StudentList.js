import React from "react";
import { Table, Popconfirm, Button } from "antd";

const StudentList = ({ onDelete, students }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Mark",
      dataIndex: "mark",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>List of Students</h2>
      <Table dataSource={students} columns={columns} />
    </div>
  );
};

export default StudentList;
