import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
 
function ProjectDetails(props) {
    const project = props.project;
    const id = props.match.params.id;
    
    if(!props.auth.uid){
        return (
            <Redirect to= '/signin' />
        )   
    }
    if(project){
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content "> 
                        <span className="card-title" > <h4>{project.title}</h4></span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by the {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div> 
            </div>
        )
    }
    else{
        return (
        <div className="container center">
            <p>Loading Project...</p>
        </div>
        );
    }
    
    
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);
