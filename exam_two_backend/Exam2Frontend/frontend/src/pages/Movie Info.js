import React, { useState, useEffect } from 'react';

const showMovie = () => {
    const [data, setData] = useState([]);

    const fetchStudents = () => {
        fetch('http://localhost:8080/movie/{id}') // Update the URL as needed
            .then(response => response.json())
            .then(data => {
                // Assuming data is an array, you can directly map over it
                const mappedData = data.map(item => ({
                    id: item.id,
                    title: item.title,
                    genre: item.genres,

                }));
                console.log(data);
                setData(mappedData);
            })
            .catch(error => console.error('Error fetching students:', error));
    };


    const deleteMovie = (id) => {
        window.location.path('/movie/' + id);
    };

    return (
        <div>
            <button type="button">Delete</button>
            <h2>Movie List</h2>
            <ul>
                {data.map(item => (
                    <li
                        key={item.id}
                        onClick={() => deleteMovie(item.id)}
                        style={{ cursor: 'pointer', margin: '5px 0', textDecoration: 'underline' }}
                    >
                        <strong>Title:</strong> {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default StudentList;
