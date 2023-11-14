import React from 'react';

require('dotenv').config();

function TutorHomePage() {

    function handlePageChange(destination){
        window.location.pathname = destination;
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
        display: "block"
        //justifyContent: "center"
    };

    const pStyle = {
        textAlign: "center",
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
        //transform: "translate(12%, 0%)",
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
            <p>
                Tutor view
            </p>
            <p>
                <a href={"/"}>Home</a>
            </p>
            <p>
                <a href={"/tutor_profile"}>View Profile</a>
            </p>
            <p>
                Create a meeting with a student!
            </p>
            <p>
                <a href={"/signup"}>Back</a>
            </p>
        </div>
    )
}

export default TutorHomePage