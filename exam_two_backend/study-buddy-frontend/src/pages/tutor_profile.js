import React from 'react';

require('dotenv').config();

function TutorProfilePage() {
    return (
        <div>
            <p>
                Tutor Profile Info
            </p>
            <p>
                <a href={"/"}>Home</a>
            </p>
            <p>
                <a href={"/tutor"}>Back to Tutor View</a>
                <a href={".."}>Back</a>
            </p>
        </div>
    )
}

export default TutorProfilePage