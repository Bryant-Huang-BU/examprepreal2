import React from 'react';
import '../util/theme.js';
import '../util/redux.js';
//import '../../public';
import profile_icon from '../../public/user-photo.png';
import {ReactComponent as Logo} from '../../public/REACT.jpg';

require('dotenv').config();

function user_page() {
    return(
        <div>
            <p>
                <a href={".."}>logout</a>
            </p>
            <p>
                <a href={"/edit_profile"}>View Profile</a>
            </p>
        </div>


    )
}
export default user_page