import React from "react";
import "./StudentRec.css";

// Sample student data
export const students = [
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

// Function to determine pass/fail status
export const getStatus = (grade) => {
  return grade >= 60 ? "Pass" : "Fail";
};

// React component to display student table
function DisplayListstu2() {
  return (
    <div className="mdiv">
      <h1>Student Records</h1>
      <table className="tbm">
        <thead>
          <tr className="hd">
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr className="dt" key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td className={getStatus(student.grade) === "Pass" ? "pass" : "fail"}>
                {getStatus(student.grade)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayListstu2;
