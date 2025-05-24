import React, { useState } from "react";
import "./StudentRec2.css";

// Sample student data
const students = [
  { id: 2101, name: "Manisha", grade: 85 },
  { id: 1302, name: "Sourav", grade: 45 },
  { id: 1703, name: "Mark", grade: 76 },
  { id: 5104, name: "Grace", grade: 30 },
  { id: 1041, name: "Ravi Kumar", grade: 84 },
  { id: 1502, name: "Guru", grade: 75 },
  { id: 1073, name: "Pawandeep", grade: 99 },
  { id: 1084, name: "Jashan", grade: 65 },
  { id: 4101, name: "Mike", grade: 59 },
  { id: 3102, name: "Bob", grade: 78 },
  { id: 1033, name: "Charlie", grade: 34 },
  { id: 1041, name: "Diana", grade: 75 },
];

// Determine pass/fail status
const getStatus = (grade) => (grade >= 60 ? "Pass" : "Fail");

function DisplayListstu3() {
  const [filter, setFilter] = useState(""); // initially empty

  const filteredStudents = students.filter((student) => {
    if (filter === "Pass") return student.grade >= 60;
    if (filter === "Fail") return student.grade < 60;
    return false;
  });

  return (
    <div className="mdiv">
      <h1>Student Records</h1>

      <div className="btn-group">
        <button onClick={() => setFilter("Pass")}>Show Pass</button>
        <button onClick={() => setFilter("Fail")}>Show Fail</button>
      </div>

      {filter && (
        <table className="tbm">
          <thead>
            <tr className="th">
              <th>ID</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr className="dt" key={`${student.id}-${index}`}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td
                  style={{
                    color: student.grade >= 60 ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {getStatus(student.grade)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DisplayListstu3;
