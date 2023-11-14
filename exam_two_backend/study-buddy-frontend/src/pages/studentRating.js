import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Popup from '../util/popup.js';

require('dotenv').config();

function studentRating(){
    const [tutors, setTutors] = useState([]);
    const [rating, setRating] = useState("");

    useEffect(() => {
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/rating/findRateableTutors/${window.sessionStorage.getItem('token')}`)
        .then((response) => {
            setTutors(response.data)
        })
    }, [])

    function handleSubmit(tutor){
        axios.post(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/rating/create`, [], {params: {tutorId: tutor.id, studentId: window.sessionStorage.getItem('token'), rating: rating}})
        .then()
    }


    return(
        <div>
            <ul>
                {tutors.map((tutor) => (
                    <li key={tutor}>
                        <a>{tutor.username}</a>
                        <input type='text' onChange={(e) => setRating(e.target.value)}/>
                        <button onClick={()=>handleSubmit(tutor)} type="button">submit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default studentRating;
