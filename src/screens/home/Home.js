import React from 'react';
import Header from "../../common/header/Header";

const Home = (props) => {


    return (
        <div>
            <Header baseUrl={props.baseUrl} historyVal={props.historyVal}/>

        </div>
    );

};


export default Home;