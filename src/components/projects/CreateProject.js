import React , { useState } from 'react';
import {connect} from 'react-redux';
import { createProject } from '../../store/actions/projectAction';
import { Redirect } from 'react-router-dom';

function CreateProject(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
   
    const onSubmit = (event)=>{
        event.preventDefault();
        props.createProject({title,content});
        props.history.push('/');
       
    }

    if(!props.auth.uid){
        return (
            <Redirect to= '/signin' />
        )   
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={event => setTitle(event.target.value)}></input>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Contents</label>
                    <textarea id="content" className="materialize-textarea"
                        onChange={event=> setContent(event.target.value)}
                    ></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lightrn-1 z-depth-0">Create Project</button>
                </div>
            </form>

        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(CreateProject);
