import react from 'react';
import { useState } from 'react';
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
import axios from 'axios';



function PingTest() {
    let callPing = () => {
    axios.GET("http://localhost:8080/ping").then((response) => {
            console.log(response.data);
        });
        window.refreshPage();
        
    };
    return (
    <div>
        <form>
            <label>
                Name:
                <input type="text" name="name"/>
            </label>
            <input type="submit" value="Submit" />
            <button> onClick={callPing}</button>
        </form>
    </div>
    )
}

export default PingTest