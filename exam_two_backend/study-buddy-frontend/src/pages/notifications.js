import {react, useEffect, useState} from 'react';
import Popup from '../util/popup.js';
import axios from 'axios';

function notifications(){

    const [notifications, setNotifications] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);


    useEffect(() => {
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/shownotifications`, { params: {receiverid: window.sessionStorage.getItem('token')}})
        .then((response) => {
            setNotifications(response.data);
            for (notif in notifications){
                notif.date = new Date(notif.date);
            }
        })
    }, [])

    function markRead(notif){
        if(!notif.hasRead){
        axios.post(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/readnotification`, [], { params: { id: notif.id }})
        .then(() => {
            let tempNotifications = notifications
            for(let i in tempNotifications){
                if(tempNotifications[i].id == notif.id){
                    console.log("Found");
                    tempNotifications[i].hasRead = true;
                }
            }
            setNotifications(tempNotifications);
        })
    }
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
        boxShadow: "3px 3px 20px grey"
    };

    return(
        <div style={containerStyle}>
            <h1>Notifications</h1>
            <ul>
            {notifications.map((notif) => (
                <li key={notif}>
                    <button 
                        style={{color: notif.hasRead === true ? "black" : "red"}}
                        onClick={() => {
                            setButtonPopup(true);
                            markRead(notif);
                        }}
                    >{notif.info}</button>
                    <Popup
                        setTrigger={setButtonPopup}
                        trigger={buttonPopup}
                    >
                        <p>Sender: {notif.sender}</p>
                        <p>Date: {notif.date.substr(0,16).replace("T", " ")}</p>
                        <p>{notif.info}</p>
                    </Popup>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default notifications;