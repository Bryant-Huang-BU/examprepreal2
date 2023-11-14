import React, { useState, useEffect } from 'react';

const StudentList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = () => {
            fetch(`http://localhost:8080/students`) // Update the URL as needed
                .then(response => response.json())
                .then(data => {
                    // Assuming data is an array, you can directly map over it
                    const mappedData = data.map(item => ({
                        id: item.id,
                        name: item.name,
                        email: item.email,
                        dept: item.dept,
                        grade: item.grade,
                    }));
                    setData(mappedData);
                })
                .catch(error => console.error('Error fetching students:', error));
        };


    const deleteStudent = (id) => {
        fetch(`http://localhost:8080/delete_student/${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(() => {
                // Refresh the student list after deletion
                fetchStudents();
            })
            .catch(error => console.error('Error deleting student:', error));
    };

    return (
        <div>
            <a href={'/Add_Student'}> Add Student</a>
            <h2>Student List</h2>
            <ul>
                {data.map(student => (
                    <li
                        key={student.id}
                        onClick={() => deleteStudent(student.id)}
                        style={{ cursor: 'pointer', margin: '5px 0', textDecoration: 'underline' }}
                    >
                        <strong>ID:</strong> {student.id}, <strong>Name:</strong> {student.name}, <strong>Email:</strong> {student.email}, <strong>Department:</strong> {student.dept}, <strong>Grade:</strong> {student.grade}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default StudentList;
