import React from 'react';
import '../util/theme.js';
import '../util/redux.js';
import Popup from '../util/popup.js';
import { useState, useEffect } from 'react';

import profile_icon from '../../public/REACT.png';
import axios from "axios";
// import {Integer} from "yarn/lib/cli";
// import {ReactComponent as Logo} from '../../public/REACT.jpg';


require('dotenv').config();

function ProfilePage() {
    const [buttonPopup, setButtonPopup] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [displayUserName, setDisplayUserName] = useState("");
    const [displayEmail, setDisplayEmail] = useState("");


    useEffect(() => {
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/user/${window.sessionStorage.getItem('token')}`)
            .then((response) => {
                setUsername(response.data.username);
                setEmail(response.data.emailAddress);
                setPassword(response.data.password);
                setId(window.sessionStorage.getItem('token'));
                setDisplayEmail(response.data.emailAddress);
                setDisplayUserName(response.data.username);
            })

    }, [])
    // Integer id = Integer.parseInteger(window.sessionStorage.getItem('token'))
    // ${window.sessionStorage.getItem('token')}
    function handleSubmit(){
        console.log(window.sessionStorage.getItem('token') + ' ' + email + ' ' + password + ' ' + username);
        axios.post(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/edituser`, [], {
            params: {
                username: username,
                emailAddress: email,
                password: password,
                id: id
            }
        })
            .then((response) => {
                setDisplayUserName(username);
                setDisplayEmail(email);
            })
            .catch(error => console.log(error))
        console.log(window.sessionStorage.getItem('token'));
    }

    const user = {
        name: username,
        email: email
        //courses: ['CSI 3335','CSI 3336']
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
        boxShadow: "3px 3px 20px grey",
        backgroundColor: "rgb(108,108,108)"
        // opacity: "0.9"
    };

    const buttonStyle = {
        //transform: "translate(12%, 0%)",
        position: "relative",
        padding: "10px 82px",
        backgroundColor: "#007AFF",
        borderWidth: "2px",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer",
        width: "500px"

    }
    const pStyle = {
        marginBottom: "30px",
        marginTop: "30px",
        fontSize: "15px",
        fonFamily: "Times"
    }

    // const popupStyle = {
    //     position: "fixed",
    //     top: "0",
    //     left: "0",
    //     width: "100%",
    //     height: "100vh",
    //     backgroundColor: "rgba(0,0,0,0.2)"
    //
    // }

    //this function handles the changing of a window when a button is clicked
    function handlePageChange(destination) {
        window.location.pathname = destination;
    }

    const pfpStyle = {
        border: '1px solid rgba(0,0,0,0)',
        position: "center",
        borderRadius: "100px",
        height: "200px",
        width: "200px"
    }
    // const editFieldStyle = {
    //     position: "left",
    //
    // }
    const inputStyle = {
        position: "absolute",
        right: 10,
        padding: "12px 20px",
        margin: "5px 0px"
    }
    const h1Style = {
        textAlign: "absolute",
        left: 10,
        marginTop: "0px",
        marginBottom: "0px",
        fontFamily: "Times",
        fontWeight: "bold"
    }
    return (
        <div>
            <div className="containerStyle">
                {/*Profile Page*/}
                <div className="profile">
                    <img
                        src="REACT.png"
                        alt="pfp"
                        className="pfpStyle"
                        // priority
                    />
                    <h2>Username: {displayUserName}</h2>
                    <p>Email: {displayEmail}</p>
                    {/*<p>courses: {user.courses}</p>*/}
                </div>


                <div className="profile-button"></div>
                <p>
                    <button className="buttonStyle" onClick={() => setButtonPopup(true)}>
                        Edit
                    </button>

                </p>

                <p>
                    <button className="buttonStyle" onClick={() =>
                        handlePageChange('/homePage')}>
                        Back
                    </button>

                </p>

                <p>
                    <button className="buttonStyle" onClick={() =>
                        handlePageChange('/listUsers')}>
                        Recommended Users
                    </button>
                </p>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <img
                    src="REACT.png"
                    alt="pfp"
                    className="pfpStyle"
                />
                <form onSubmit={handleSubmit}>
                    <p className="pStyle">
                        <h3 style={h1Style}>Username: {displayUserName}
                            <input
                                type='text'
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder={displayUserName}
                                className="inputStyle"
                            /></h3>
                    </p>
                    <p className="pStyle">
                        Change Password:
                        <input
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            className="inputStyle"
                        />
                    </p>
                    <p className="pStyle">
                        Current Email: {displayEmail}
                        <input
                            type='email'
                            on
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={email}
                            className="inputStyle"
                        />
                    </p>
                    <button
                        className="buttonStyle"
                        type="button"
                        onClick={handleSubmit}

                    >
                        Submit
                    </button>
                </form>
            </Popup>
        </div>
    )
}
export default ProfilePage
