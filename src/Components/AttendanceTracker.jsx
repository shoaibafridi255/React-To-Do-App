import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const AttendanceTracker = () => {
  const { theme, toggelTheme } = useContext(ThemeContext);

  const [students, setStudents] = useState([
    { id: 1, name: "Ali", status: "" },
    { id: 2, name: "Fatima", status: "" },
    { id: 3, name: "Usman", status: "" },
  ]);

  const markAttendance = (id, status) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, status } : student
    );
    setStudents(updated);
  };

  const totalPresent = students.filter((s) => s.status === "Present").length;
  const totalAbsent = students.filter((s) => s.status === "Absent").length;

  return (
    <div
      classNameName="container mt-5"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <h2 classNameName="mb-4">📝 Attendance Tracker</h2>
      <table classNameName="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mark Attendance</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                <button
                  classNameName="btn btn-success btn-sm me-2"
                  onClick={() => markAttendance(student.id, "Present")}
                  disabled={student.status !== ""}
                >
                  ✅ Present
                </button>
                <button
                  classNameName="btn btn-danger btn-sm"
                  onClick={() => markAttendance(student.id, "Absent")}
                  disabled={student.status !== ""}
                >
                  ❌ Absent
                </button>
              </td>
              <td>{student.status || "Not Marked"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div classNameName="row">
        <div classNameName="col text-center">
          <button classNameName="btn btn-success" onClick={toggelTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>

      <div classNameName="mt-4">
        <strong>Total Present:</strong> {totalPresent} <br />
        <strong>Total Absent:</strong> {totalAbsent}
      </div>
    </div>
  );
};

export default AttendanceTracker;
