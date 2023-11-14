import React, { useEffect } from 'react';
// import LoginPage from "./login";
// import {textAlign} from "@mui/system";

require('dotenv').config();

function HomePage() {
    useEffect(() => {
        window.location.pathname = "/login";
    }, [])
}

export default HomePage