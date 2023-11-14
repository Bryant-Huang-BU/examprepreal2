import React, {useEffect, useState} from 'react';
import axios from "axios";

require('dotenv').config();

export default function listMeetups() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/listmeeting/${window.sessionStorage.getItem("token")}`) // Update the URL as needed
            .then(response => {
                return response.data.map(item => {
                    // Parse and format the date
                    const formattedDate = new Date(item.date).toLocaleString();

                    // Return the updated item
                    return {
                        id: item.id,
                        student: item.student,
                        tutor: item.tutor,
                        date: formattedDate,
                        subject: item.subject,
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
                    <th style={{ width: '200px', textAlign: 'left' }}>Student</th>
                    <th style={{ width: '200px', textAlign: 'left' }}>Tutor</th>
                    <th style={{ width: '200px', textAlign: 'left' }}>Date</th>
                    <th style={{ width: '200px', textAlign: 'left' }}>Subject</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                    <td style={{ width: '200px', textAlign: 'left' }}>{item.id}</td>
                    <td style={{ width: '200px', textAlign: 'left' }}>{item.student}</td>
                    <td style={{ width: '200px', textAlign: 'left' }}>{item.tutor}</td>
                    <td style={{ width: '200px', textAlign: 'left' }}>{item.date}</td>
                    <td style={{ width: '200px', textAlign: 'left' }}>{item.subject}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <a href={"/meetups"}>Back</a>
        </div>

    );

}
