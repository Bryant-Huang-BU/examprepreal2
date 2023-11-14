import React, {useEffect, useState} from 'react';
import axios from "axios";

require('dotenv').config();

export default function listUsers() {
    const [data, setData] = useState([]);

    const [username, setUsername] = useState("")

    useEffect(() => {
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/user/${window.sessionStorage.getItem('token')}`)
            .then((response) => {
                setUsername(response.data.username);
            })

    })
    useEffect(() => {
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/recommenduser/${window.sessionStorage.getItem("token")}`) // Update the URL as needed
            .then(response => {
                return response.data.map(item => {
                    // Parse and format the date
                    const formattedDate = new Date(item.date).toLocaleString();

                    // Return the updated item
                    return {
                        id: item.id,
                        username: item.username
                    };
                });
            })
            .then(data => setData(data));
    }, []);
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th style={{ width: '200px', textAlign: 'left' }}>ID</th>
                    <th style={{ width: '200px', textAlign: 'left' }}>Username</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td style={{ width: '200px', textAlign: 'left' }}>{item.id}</td>
                        <td style={{ width: '200px', textAlign: 'left' }}>{item.username}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <a href={"/homePage"}>Back</a>
        </div>

    );

}
