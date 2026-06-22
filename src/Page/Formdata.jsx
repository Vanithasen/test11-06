import React, { useState } from "react";
import './Formdata.css';

function Formdata() {


    const [student, setStudent] = useState({
        name: "",
        email: "",
        course: "",
        phone: "",
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        console.log(e);
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(student);

        setStudent({
            name: "",
            email: "",
            course: "",
            phone: "",
        });
    };

    return (
        <div className="container">
            <div className="form-card">
                <h1>Student Registration</h1>
                <p className="subtitle">Fill in your details below</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Student Name"
                        value={student.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={student.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="course"
                        placeholder="Course Name"
                        value={student.course}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={student.phone}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Register</button>
                </form>

                {submittedData && (
                    <div className="result">
                        <h2>Registration Successful</h2>
                        <p><strong>Name:</strong> {submittedData.name}</p>
                        <p><strong>Email:</strong> {submittedData.email}</p>
                        <p><strong>Course:</strong> {submittedData.course}</p>
                        <p><strong>Phone:</strong> {submittedData.phone}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Formdata;