//import { Stack } from '@mui/system';
import { React, useState } from 'react';
import axios from 'axios';
import profile_icon from "../../public/user-photo.png";


require('dotenv').config();

function TutorSignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit() {
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/createuser`, { params: { user: username, email: email, pass: password, type: "tutor"}})
            .then((response) => {
                window.sessionStorage.setItem('token', JSON.stringify(response.data.id));
                window.location.pathname = "/homePage"
            })
            .catch(error => console.log(error))
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
            <h1 className="h1Style">New Tutor</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p className="pStyle">Username</p>
                    <input
                        type='text'
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter username'
                        className="inputStyle"
                    />
                </label>
                <label>
                    <p className="pStyle">Password</p>
                    <input
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter password'
                        className="inputStyle"
                    />
                </label>
                <label>
                    <p className="pStyle">Email</p>
                    <input
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='studdy@buddy.com'
                        className="inputStyle"
                    />
                </label>
                <div>
                    <button className="buttonStyle" type="button" onClick={handleSubmit}>Submit</button>
                </div>
                <a href={"/login"}>Back</a>
            </form>
        </div>
    )
}

export default TutorSignUp
