import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import MessageDashboard from './components/MessageDashboard';
import UserDashboard from './components/UserDashboard';
import MessageForm from './components/MessageForm';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Logout from './components/Logout';

// CRUD OPERATION
import DeleteData  from './components/crud/DeleteData';
import DetailData  from './components/crud/DetailData';
import DisplayData from './components/crud/DisplayData';
import UpdateData  from './components/crud/UpdateData';

// Forgot password
import ForgotPassword from './components/ForgotPassword';
//Reset Password
import PasswordReset from './components/PasswordReset';

// Not found section
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
            <Switch>  
                  {/* Forms */}
                  <Route path="/RegisterForm"                  component={RegisterForm} />

                  <Route path="/LoginForm"                     component={LoginForm} />

                  {/* Landing page */}
                  <Route exact path="/"                        component={LandingPage} />

                  {/* Message Page */}
                  <Route path="/MessageDashboard"              component={MessageDashboard} />

                  {/* User Daashboard */}
                  <Route path="/UserDashboard"                 component={UserDashboard} />
                  <Route path="/MessageForm"                   component={MessageForm} />
                 
                  {/* Crud operations */}
                  <Route path="/DisplayData"                    component={DisplayData} />

                  <Route path="/deleteUsers/:id"                component={DeleteData} />

                  <Route path="/userId/:id"                     component={DetailData} />

                  <Route path="/updateUsers/:id"                component={UpdateData} />

                  {/* Additional functionalities */}
                  <Route path="/ForgotPassword"                  component={ForgotPassword} />

                  <Route path="/PasswordReset"                   component={PasswordReset} />

                  {/* logout button */}
                  <Route path="/Logout"                         component={Logout} />

                  {/* Not found page */}
                  <Route path ="*"                         component={NotFound} />


            </Switch>
        </div>

    </Router>
  );
}

export default App;
