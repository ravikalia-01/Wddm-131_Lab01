import React from "react";

function DisplayListstu() {
  // Sample student data
  return (
    <>
      <div className="imain">
        <table className="sif">
          <caption><h2>Student Information</h2></caption>
          <tbody>
            <tr>
              <th className="dh">Name :</th>
              <td className="it">Ravi Kumar</td>
            </tr>
            <tr>
              <th className="dh">Student ID :</th>
              <td className="it">N01719809</td>
            </tr>
            <tr>
              <th className="dh">Program :</th>
              <td className="it">Web Design and Development</td>
            </tr>
            <tr>
              <th className="dh">Course :</th>
              <td className="it">Programming-2</td>
            </tr>
            <tr>
              <th className="dh">Course Code :</th>
              <td className="it">WDDM-131</td>
            </tr>
            <tr>
              <th className="dh">Instructor :</th>
              <td className="it">Prof. Fagun</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DisplayListstu;
