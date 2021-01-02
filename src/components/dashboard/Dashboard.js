import React from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

function Dashboard(props) {
    const {projects, auth} = props;

    if(!auth.uid){
        return (
            <Redirect to= '/signin' />
        )   
    }
    else{
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6" > <ProjectList projects={projects} /> </div>
                    <div className="col s12 m5 offset-m1"> <Notification /> </div>
                </div>
            </div>
        )
    }

    
}

const mapStateToProps = (state) =>{
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard);