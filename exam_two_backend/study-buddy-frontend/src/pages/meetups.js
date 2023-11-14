import { React, useEffect, useState } from 'react';
import axios from 'axios';
import LoginPage from './login';
require('dotenv').config();

function handlePageChange(destination){
    window.location.pathname = destination;
}

function homePage() {
    const [username, setUsername] = useState("")

    useEffect(() => {
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/user/${window.sessionStorage.getItem('token')}`)
            .then((response) => {
                setUsername(response.data.username);
            })

    })
    //            <!-- <Link href="/findmeetups"></Link> -->
    const h1Style = {
        textAlign: "center",
        marginTop: "0px",
        marginBottom: "0px",
        fontFamily: "Times",
        fontWeight: "bold"
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
        display: "block",
        justifyContent: "center",
        alignItems: "center"
    };

    const buttonStyle = {
        margin: "10px",
        position: "relative",
        padding: "10px 82px",
        backgroundColor: "#007AFF",
        borderWidth: "0px",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer",
        width: "500px"

    }

    return (
        <div className="containerStyle">
            <h1 className="h1Style">Welcome, {username}</h1>
            <button
                type="button"
                className="buttonStyle"
                onClick={() => handlePageChange("/createmeetups")}
            >
                Create a New Meetup
            </button>
            <button
                type="button"
                className="buttonStyle"
                onClick={() => handlePageChange("/findmeetups")}
            >
                Edit a Preexisting Meetup
            </button>
            <button
                type="button"
                style={buttonStyle}
                onClick={() => handlePageChange("/listmeetups")}
            >
                See Existing Meetups
            </button>
            <button
                type="button"
                style={buttonStyle}
                onClick={() => handlePageChange("/ReccMeeting")}
            >
                See Recommended Meetups
            </button>
            <p>
                <a href={'..'}>Back </a>
            </p>
        </div>
    )
}

export default homePage;