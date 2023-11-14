import {react, useEffect, useState} from 'react';
import axios from 'axios';

require('dotenv').config();

function tutorRating(){
    const [rating, setRating] = useState("");

    useEffect(() => {
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/rating/${window.sessionStorage.getItem('token')}`, {})
        .then((response) => {
            
            setRating(response.data);

        })
    }, [])

    return(
        <div>
            <h1>
                {rating === -1 ? "No Ratings" : rating + "/5"}
            </h1>
        </div>
    )

}

export default tutorRating;