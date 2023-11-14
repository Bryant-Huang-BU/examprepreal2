import React, {useEffect, useState} from 'react';
import axios from "axios";

require('dotenv').config();

export default function createMeeting() {
    const [username, setUser] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [tutor, setTutor] = useState("");
    const [subject, setSubject] = useState("");
    //const [post, setPost] = useState("");
    useEffect(() => {
        //Need for area of study dropdown
        // axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/list-classes`)
        // .then((response) => {
        //     setAllAreasOfStudy(response.data);
        // })
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/user/${window.sessionStorage.getItem('token')}`)
            .then((response) => {
                setUser(response.data.username);
            })
    }, [])
    function handleSubmit() {
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/createmeeting`,{ params: {userID: window.sessionStorage.getItem('token'), username: username, tutor: tutor, date: date, time: time, subject: subject}})
        .then((response) => {
            if (response.data === Null) {
                console.log("invalid");
            }
            else {
                console.log("valid");
            }
        })
        .catch(error => console.log(error));
    }

    const containerStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        padding: "30px 75px",
        transform: "translate(-50%, -50%)",
        borderStyle: "groove",
        borderWidth: "5px",
        borderRadius: "20px",
        boxShadow: "3px 3px 20px grey"
    };

    const pStyle = {
        marginBottom: "0px",
        marginTop: "2px",
        fontSize: "15px",
        fonFamily: "Times"
    }

    const h1Style = {
        textAlign: "center",
        marginTop: "0px",
        marginBottom: "0px",
        fontFamily: "Times",
        fontWeight: "bold"
    }

    const inputStyle = {
        padding: "12px 20px",
        margin: "5px 0px"
    }

    const buttonStyle = {
        padding: "10px 82px",
        backgroundColor: "#007AFF",
        borderWidth: "0px",
        borderRadius: "5px",
        color: "white"
    }

    return (
        <div className="containerStyle">
            <h1 className="h1Style">Create Meeting</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p className="pStyle">Tutor:</p>
                    <input
                        type='tutor'
                        onChange={(e) => setTutor(e.target.value)}
                        placeholder='Enter Tutor here'
                        className="inputStyle"
                        />
                </label>
                <label>
                    <p className="pStyle">Area of Study:</p>
                    <input
                        type='subject'
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder='Enter subject here'
                        className="inputStyle"
                    />
                </label>
                <label>
                    <p className="pStyle">Date:</p>
                    <input
                        type='date'
                        onChange={(e) => setDate(e.target.value)}
                        placeholder='MM/dd/yyyy'
                        className="inputStyle"
                    />
                </label>
                <label>
                    <p className="pStyle">Time:</p>
                    <input
                        type='time'
                        onChange={(e) => setTime(e.target.value)}
                        placeholder='hh:mm a'
                        className="inputStyle"
                    />
                </label>
                <div>
                    <button className="buttonStyle" type="submit">Submit</button>
                </div>
                <a href={"/meetups"}>Back</a>
            </form>
        </div>
    )
}