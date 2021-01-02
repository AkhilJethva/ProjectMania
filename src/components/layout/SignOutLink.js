import React from 'react';
import { NavLink} from 'react-router-dom';


function SignOutLink() {
    return (
        <ul className="right">
           <li><NavLink to="/signup" className="signOutLink__text"> Sign Up </NavLink></li>
            <li><NavLink to="/signin" className="signOutLink__text"> Log In </NavLink></li>
        </ul>
    )
}

export default SignOutLink;