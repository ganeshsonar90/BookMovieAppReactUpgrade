import React from 'react';
import Header from "../../common/header/Header";
import TitlebarGridList from "./TitlebarGridList";
import {Typography} from "../../component";
import {Grid} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import './Home.css';

const Home = (props) => {


    return (
        <div>
            <Header baseUrl={props.baseUrl} historyVal={props.historyVal}/>

            <div className="upcoming_container">
<Typography>Upcoming Movies</Typography>
            </div>

            <div>
                <TitlebarGridList></TitlebarGridList>
            </div>





            </div>
    );

};


export default Home;