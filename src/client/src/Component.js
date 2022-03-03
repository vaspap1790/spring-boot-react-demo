import React, { useState, useEffect } from "react";
import axios from "axios";

const Component = () => {
  // Component level State
  const [students, setStudents] = useState([]);

  const getStudents = () => {
    axios
      .get(`/students`)
      .then((resp) => {
        const data = resp.data;
        console.log(data);
        setStudents(data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      {students.map((student) => (
        <h1>{student.studentId}</h1>
      ))}
    </>
  );
};

export default Component;
