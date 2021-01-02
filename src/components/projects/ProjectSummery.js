import React from 'react';
import moment from 'moment';

const ProjectSummery = ({project}) =>{
    
    return (
        <div className="card z-depth-0 project-summery">
            <div className="card-content gery-text text-darken-3"> 
                <span className="card-title" > <h4>Project {project.title}</h4></span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummery;
