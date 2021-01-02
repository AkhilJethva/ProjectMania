import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import DashBoard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

function App(props) {
 
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
            <Route exact path="/" component={DashBoard}></Route>
            <Route path="/project/:id" component={ProjectDetails}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/createproject" component={CreateProject}></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
