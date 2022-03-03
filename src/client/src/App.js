import "./App.css";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import { Table } from "antd";
import axios from "axios";

const App = () => {
  // Component level State
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios
      .get(`/students`)
      .then((resp) => {
        const data = resp.data;
        setStudents(data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  if (students && students.length) {
    const dataSource = students;

    const columns = [
      {
        title: "UUID",
        dataIndex: "studentId",
        key: "studentId",
      },
      {
        title: "First Name",
        dataIndex: "firstName",
        key: "firstName",
      },
      {
        title: "Last Name",
        dataIndex: "lastName",
        key: "address",
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
    ];

    return (
      <Container>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </Container>
    );
  } else {
    return <h1>No Students registered yet</h1>;
  }
};

export default App;
