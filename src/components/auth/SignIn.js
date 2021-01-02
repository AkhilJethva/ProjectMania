import React, {useState} from 'react'
import { connect } from 'react-redux';
import {signIn} from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';

function SignIn(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event)=>{
        event.preventDefault();
        props.signIn({email,password});
    }

    const { authError } = props;
    if(props.auth.uid){
        return (
            <Redirect to= '/' />
        )   
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)}></input>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)}></input>
                </div>
                <div className="input-field">
                    <button className="btn pink lightrn-1 z-depth-0">LogIn</button>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p>: null}
                    </div>
                </div>
            </form>

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: (cred) => dispatch(signIn(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
