import React, {useEffect, useState} from 'react';
import axios from "axios";

require('dotenv').config();

require('dotenv').config();

export default function createMeeting() {
    const [username, setUser] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [tutor, setTutor] = useState("");
    const [subject, setSubject] = useState("");
    const [ndate, setnDate] = useState("");
    const [ntime, setnTime] = useState("");
    const [ntutor, setnTutor] = useState("");
    const [nsubject, setnSubject] = useState("");
    const [choice, setChoice] = useState("");
    const handleDropdownChange = (event) => {
        // Update the 'choice' state with the selected value
        setChoice(event.target.value);
    };
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
    //const [post, setPost] = useState("");
    function handleSubmit() {

        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/altermeeting`,{ params: {username: username, tutor: tutor, date: date, time: time, subject: subject, choice: choice, Ausername: username, Atutor: ntutor, Adate: ndate, Atime: ntime, Asubject: nsubject}})
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
        <div style={containerStyle}>
            <h1 style={h1Style}>Edit Meeting</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p style={pStyle}>Tutor:</p>
                    <input
                        type='tutor'
                        onChange={(e) => setTutor(e.target.value)}
                        placeholder='Enter Tutor here'
                        style={inputStyle}
                    />
                </label>
                <label>
                    <p style={pStyle}>Area of Study:</p>
                    <input
                        type='subject'
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder='Enter subject here'
                        style={inputStyle}
                    />
                </label>
                <label>
                    <p style={pStyle}>Date:</p>
                    <input
                        type='date'
                        onChange={(e) => setDate(e.target.value)}
                        placeholder='MM/dd/yyyy'
                        style={inputStyle}
                    />
                </label>
                <label>
                    <p style={pStyle}>Time:</p>
                    <input
                        type='time'
                        onChange={(e) => setTime(e.target.value)}
                        placeholder='hh:mm a'
                        style={inputStyle}
                    />
                </label>
                <label htmlFor="choiceDD">
                    <p>Delete or Edit? (If delete, leave rest of form blank) </p>
                </label>
                <select name="choiceDD" id="choiceDD" onChange={handleDropdownChange} value = {choice}>
                    <option value="delete">Delete Meeting</option>
                    <option value="edit">Edit Meeting</option>
                </select>
                <label>
                    <p style={pStyle}> New Tutor (optional):</p>
                    <input
                        type='tutor'
                        onChange={(e) => setnTutor(e.target.value)}
                        placeholder='Enter Tutor here'
                        style={inputStyle}
                    />
                </label>
                <label>
                    <p style={pStyle}>Area of Study (optional):</p>
                    <input
                        type='subject'
                        onChange={(e) => setnSubject(e.target.value)}
                        placeholder='Enter subject here'
                        style={inputStyle}
                    />
                </label>
                <label>
                    <p style={pStyle}>Date (optional):</p>
                    <input
                        type='date'
                        onChange={(e) => setnDate(e.target.value)}
                        placeholder='MM/dd/yyyy'
                        style={inputStyle}
                    />
                </label>
                <label>
                    <p style={pStyle}>Time (optional):</p>
                    <input
                        type='time'
                        onChange={(e) => setnTime(e.target.value)}
                        placeholder='hh:mm a'
                        style={inputStyle}
                    />
                </label>
                <div>
                    <button style={buttonStyle} type="submit">Submit</button>
                </div>
                <a href={"/meetups"}>Back</a>
            </form>
        </div>
    )
}