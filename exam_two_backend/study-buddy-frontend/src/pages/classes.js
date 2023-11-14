import React, { useEffect, useState } from "react";
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

require('dotenv').config();



function classes() {
    const [areasOfStudy, setAreasOfStudy] = useState([]);
    const [newAreaOfStudy, setNewAreaOFStudy] = useState("");

    function addArea(){
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/new-class`, { params: { name: newAreaOfStudy, userID: Number(window.sessionStorage.getItem('token'))}})
        .then((response) => {
            console.log(response.body);
            setAreasOfStudy(prevArr => [...prevArr, response.data.areaOfStudy]);
        }
        )
        .catch(error => alert(error));
    }

    function removeArea(area, index){
        axios.delete(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/remove-class`, {params: {name: area, userID: window.sessionStorage.getItem('token')}})
        .then((response) => {
            const newAreas = [...areasOfStudy];
            newAreas.splice(index, 1);
            setAreasOfStudy(newAreas);
        })
    }

    axios.interceptors.request.use(request => {
        console.log('Starting Request', JSON.stringify(request, null, 2))
        return request
    })

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

    const h1Style = {
        textAlign: "center",
        marginTop: "0px",
        marginBottom: "0px",
        fontFamily: "Times",
        fontWeight: "bold"
    }

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

    const inputStyle = {
        padding: "12px 20px",
        margin: "5px 0px"
    }

    const buttonStyle = {
        padding: "10px 82px",
        backgroundColor: "#007AFF",
        borderWidth: "0px",
        borderRadius: "5px",
        color: "white"
    }


    const removeStyle = {
        backgroundColor: "red",
        color: "white"
    }

    useEffect(() => {
        axios.get(`http://${process.env.NEXT_PUBLIC_STUDY_BUDDY_API_URL}/list-classes/${window.sessionStorage.getItem('token')}`)
        .then((response) =>{
            console.log(response.data)
            setAreasOfStudy(response.data)
        })
    }, [])


    return (
        <div className="containerStyle">
            <h1 className="h1Style">Areas of Study</h1>
            <ul className="ulStyle">
                {areasOfStudy.map((area, index) => (
                    <li key={area} className="liStyle">
                        <a style={{paddingRight: "15px"}}>{area}</a>
                        <button className="removeStyle" onClick={() => removeArea(area, index)}>x</button>
                    </li>
                ))}
            </ul>
            <Popup 
                trigger={<button className="buttonStyle">Add New Area of Study</button>}
                postition="right center"
            >
                <input
                    type="text"
                    onChange={(e) => setNewAreaOFStudy(e.target.value)}
                    placeholder="New Area of Study"
                    className="inputStyle"
                />
                <button type="button" onClick={() => addArea()}>Add</button>
            </Popup>
            <p>
                <a href="/homePage">Back</a>
            </p>
        </div>
    )
}

export default classes;