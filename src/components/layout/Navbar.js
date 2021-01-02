import React from 'react';
import { Link } from 'react-router-dom';

import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import { connect } from 'react-redux';

function Navbar(props) {
    const { auth, profile } = props;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container" >
                <Link to="/" className="brand-logo" >Project-Mania</Link>
                { auth.uid ? <SignInLink profile={profile} /> : <SignOutLink /> }          
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>{
    console.log("navbar",state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);
