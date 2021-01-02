import React, { useState }from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authAction';

function SignUp(props) {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = (event)=>{
        event.preventDefault();
        props.signUp({email,password,firstName,lastName});
    }

    if(props.auth.uid){
        return (
            <Redirect to= '/' />
        )   
    }
    const authError = props.authError
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" value={firstName} onChange={event => setFirstName(event.target.value)}></input>
                </div>
                <div className="input-field">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" value={lastName} onChange={event => setLastName(event.target.value)}></input>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)}></input>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)}></input>
                </div>
                <div className="input-field">
                    <button className="btn pink lightrn-1 z-depth-0">Register</button>
                    <div className="red-text center">
                         {authError ? <p>{authError}</p>: null}
                    </div>
                
                </div>
            
            </form>

        </div>
    );
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispathToProps = (dispatch) =>{
    return {
        signUp: (newUser) => { dispatch(signUp(newUser)) }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(SignUp)
