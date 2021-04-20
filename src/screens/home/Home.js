import React from 'react';
import Header from "../../common/header/Header";
import TitlebarGridList from "./TitlebarGridList";
import MovieFilterCard from "./MovieFilterCard";
import TitlebarGridListVertical from "./TitlebarGridListVertical";
import {Typography} from "../../component";
import './Home.css';

const Home = (props) => {


    return (
        <div className="flex-container">
            <Header baseUrl={props.baseUrl} historyVal={props.historyVal}/>
            <div className="upcoming_container">
<Typography>Upcoming Movies</Typography>
            </div>
            <div>
                <TitlebarGridList></TitlebarGridList>
            </div>
            <div class="row">
                <div class="side">
                    <TitlebarGridListVertical/>
                </div>
                <div class="main">
                    <MovieFilterCard/>
                </div>
            </div>
            </div>
    );

};


export default Home;