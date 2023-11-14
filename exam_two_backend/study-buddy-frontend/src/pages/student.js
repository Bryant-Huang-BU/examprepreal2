import React from 'react';

require('dotenv').config();

function StudentHomePage() {
    return (
        <div>
            <p>
                Student view
            </p>
            <p>
                <a href={"/"}>Home</a>
            </p>
            <p>
                <a href={"/student_profile"}>View Profile</a>
            </p>
            <p>
                <a href={"/signup"}>Back</a>
            </p>
        </div>
    )
}

export default StudentHomePage