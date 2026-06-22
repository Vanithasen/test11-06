import "./Student.css";

function Studentlist() {
  const students = [
    { id: 1, name: "John", course: "React", completed: true },
    { id: 2, name: "Mary", course: "JavaScript", completed: false },
    { id: 3, name: "David", course: "HTML", completed: true },
    { id: 4, name: "Priya", course: "CSS", completed: false }
  ];

  return (
    <div className="container">
      <h1>Student Course Dashboard</h1>

      {students.length > 0 ? (
        <div>
          {students.map((student) => (
            <div className="card" key={student.id}>
              <h3>{student.name}</h3>
              <p>Course: {student.course}</p>

              <p>
                Status:
                {student.completed ? (
                  <span className="completed">
                    {" "}Completed
                  </span>
                ) : (
                  <span className="pending">
                    {" "}Pending
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <h2>No Students Available</h2>
      )}
    </div>
  );
}

export default Studentlist;