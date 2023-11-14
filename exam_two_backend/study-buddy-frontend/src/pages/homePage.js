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

    const h1Style = {
        textAlign: "center",
        marginTop: "0px",
        marginBottom: "0px",
        fontFamily: "Times",
        fontWeight: "bold"
    }

    const pfpStyle = {
        position: "center",
        cursor: "pointer",
        borderRadius: "200px",
        height: "100px",
        width: "100px"
    }

    const iconBtnStyle = {
        position: "center",
        cursor: "pointer"
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
        <div style={containerStyle}>
            <button
                type="button"
                style={pfpStyle}
                onClick={() => handlePageChange("/edit_profile")}
            ><img
                src="REACT.png"
                alt="pfp"
                style={pfpStyle}
                // priority
            />
                View Profile
            </button>

            <h1 style={h1Style}>Welcome, {username}</h1>

            <button 
                type="button" 
                style={buttonStyle}
                onClick={() => handlePageChange("/meetups")}
            >
                Meetups
            </button>
            <button 
                type="button" 
                style={buttonStyle}
                onClick={() => handlePageChange("/classes")}
            >
                Areas of Study
            </button>
            <button 
                type="button" 
                style={buttonStyle}
                onClick={() => handlePageChange("/study_partners")}
            >
                Study Partners
            </button>
            <button 
                type="button" 
                style={buttonStyle}
                onClick={() => handlePageChange("/notifications")}
            >
                Notifications
            </button>
            <button className="button"
                    style={buttonStyle}
                    onClick={() => handlePageChange('/listUsers')}>
                Recommended Users
            </button>
            <p>
                <a href={'..'}>Logout </a>
            </p>
        </div>
    )
}

export default homePage;