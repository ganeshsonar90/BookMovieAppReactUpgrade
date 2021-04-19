import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './screens/home/Home';
import FullWidthTabs from './screens/login_register/FullWidthTabs';
import Details from './screens/details/Details';
import BookShow from "./screens/bookshow/BookShow";
import Confirmation from "./screens/confirmation/Confirmation";


const Controller = () => {
    const baseUrl = "/api/v1/";




    return (


        <Router>
            <div>

                <Route exact path="/" render={(props) => <Home {...props} baseUrl={baseUrl} historyVal={props.history}/>}/>

                <Route exact path="/login_register_tab" render={(props) => <FullWidthTabs {...props} baseUrl={baseUrl} historyVal={props.history}/>}/>

                <Route exact path="/movie/:id" render={(props) => <Details {...props} baseUrl={baseUrl} historyVal={props.history}/>}/>

                <Route exact path="/bookshow/:id" render={(props) => <BookShow {...props} baseUrl={baseUrl} historyVal={props.history}/>}/>


                <Route exact path="/confirm/:id" render={(props) => <Confirmation {...props} baseUrl={baseUrl} historyVal={props.history}/>}/>


            </div>
        </Router>

    );


};

export default Controller;