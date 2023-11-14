import React from 'react';

require('dotenv').config();

function StudentProfilePage() {
    return (
        <div>
            <p>
                Student Profile Info
            </p>
            <p>
                <a href={"/"}>Home</a>
            </p>
            <p>
                <a href={"/student"}>Back to Student View</a>
            </p>

        </div>
    )
}

export default StudentProfilePage