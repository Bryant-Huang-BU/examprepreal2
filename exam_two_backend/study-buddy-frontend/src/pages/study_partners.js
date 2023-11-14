import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

require('dotenv').config;

function study_partners(){
    // const [allAreasOfStudy, setAllAreasOfStudy] = useState([]);
    const [partners, setPartners] = useState([]);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        //Need for area of study dropdown
        // axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/list-classes`)
        // .then((response) => {
        //     setAllAreasOfStudy(response.data);
        // })
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/partners/${window.sessionStorage.getItem('token')}`)
        .then((response) => {
            setPartners(response.data);
        })
    }, [])

    const handleSelectChange = (event) => {
        console.log(event.target.value)
        setType(event.target.value);
    };

    function handleSubmit(){
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/user-search`, { params: { username: username, type: type}})
        .then((response) => {
            setSearchedUsers(response.data)
        })
    }

    function addPartner(user){
        console.log(user)
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/new-partner`, { params: { userID: window.sessionStorage.getItem('token'), partnerID: user.id}})
        .then((response) => {
            setPartners(partners => [...partners, response.data])
        })
    }

    function removePartner(partner, index){
        axios.delete(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/remove-partner`, { params: { userID: window.sessionStorage.getItem('token'), partnerID: partner.id }})
        .then((response) => {
            const newPartners = [...partners];
            newPartners.splice(index, 1);
            setPartners(newPartners);
        })
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

    const ulStyle = {
        listStyleType: "none",
        color: "#333",
        fontSize: "18px",
        paddingLeft: "20px"
    }

    const liStyle = {
        marginBottom: "10px",
        paddingRight: "25px"
    }

    const removeStyle = {
        backgroundColor: "red",
        color: "white"
    }

    const addStyle = {
        backgroundColor: "green",
        color: "white"
    }

    const inputStyle = {
        padding: "12px 20px",
        margin: "5px 0px"
    }

    return(
        <div className="containerStyle">
            <h1>Study Partners</h1>
            <ul className="ulStyle">
                {partners.map((partner, index) => (
                    <li key={partner} className="liStyle">
                        <a style={{paddingRight: "15px"}}>{partner.username}: {partner.userType}</a>
                        <button className="removeStyle" onClick={() => removePartner(partner, index)}>x</button>
                    </li>
                ))}
            </ul>
            <div>
                <h2>Add new partners</h2>
                <input
                    type='text'
                    placeholder='username'
                    onChange={(e) => setUsername(e.target.value)}
                    // style={inputStyle}
                />
                {/* If have time, this is to lookup by subject area */}
                {/* <label htmlFor="dropdown">Area of Study</label>
                <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
                    <option value=""></option>
                    {allAreasOfStudy.map((area) => (
                        <option value={area}>{area}</option>
                    ))}
                </select> */}
                <label htmlFor='dropdown'>User Type</label>
                <select id='typeDropdown' onChange={handleSelectChange}>
                    <option value=""></option>
                    <option value="student">Student</option>
                    <option value="tutor">Tutor</option>
                </select>
                <button type='button' onClick={handleSubmit}>submit</button>
                <ul className="ulStyle">
                {searchedUsers.map((user) => (
                    <li key={user} className="liStyle">
                        <a style={{paddingRight: "15px"}}>{user.username}: {user.userType}</a>
                        <button className="addStyle" onClick={() => addPartner(user)}>+</button>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )

}

export default study_partners;