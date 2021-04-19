import React from 'react';
import Header from "../../common/header/Header";
import {Typography} from "../../component";
import {Grid} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const Home = (props) => {


    return (
        <div>
            <Header baseUrl={props.baseUrl} historyVal={props.historyVal}/>


            <div className="coupon-container">
                <div className="confirmLeft">
                    <Typography>Upcoming Movies</Typography>
                </div>

            </div>



        </div>
    );

};


export default Home;