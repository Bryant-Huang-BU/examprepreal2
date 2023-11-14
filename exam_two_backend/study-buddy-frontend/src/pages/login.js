import React, {useEffect, useState} from 'react';
import axios from "axios";

require('dotenv').config();

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() {
        // Send request to the backend
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/login1`, { params: { user: username, pass: password}})
        .then((response) => {
            //Set sessionStorage token variable to the user ID
            window.sessionStorage.setItem('token', JSON.stringify(response.data.id));

            //If user was returned, move on to the next page
            if( response.data.id !== undefined){
                window.location.pathname = "/homePage";
            }
            else{
                alert("Username or password is incorrect");
            }
        })
        .catch(error => console.log(error))
        console.log('bruh');
    }

    useEffect(() => {
        window.sessionStorage.clear();
    }, [])

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
            <h1 style={h1Style}>Sign in</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p style={pStyle}>Username</p>
                    <input 
                        type='text' 
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter username'
                        style={inputStyle}
                    />
                </label>
                <label>
                    <p style={pStyle}>Password</p>
                    <input 
                        type='password' 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter password'
                        style={inputStyle}
                    />
                </label>
                <div>
                    <button style={buttonStyle} type="button" onClick={handleSubmit}>Submit</button>
                </div>

                <a href={'/tutor_signup'} style={{marginRight:'50px'}}>New tutor</a>
                <a href={'/student_signup'}>New student</a>
            </form>
        </div>
    )
}



export default LoginPage