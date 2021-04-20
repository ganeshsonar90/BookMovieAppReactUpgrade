import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {environment} from "../../environment";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


export default function TitlebarGridListVertical() {

    const [movieList,setMovieList] = useState([]);


    async function loadData(){

        const rawResponse = await  fetch(environment.baseUrl+"movies?page=1&limit=10")
        const data = await rawResponse.json()



        const mockData={
            "limit": 0,
            "movies": [
                {
                    "artists": [
                        {
                            "first_name": "string",
                            "id": "string",
                            "last_name": "string",
                            "profile_description": "string",
                            "profile_url": "string",
                            "role_type": "DIRECTOR",
                            "wiki_url": "string"
                        }
                    ],
                    "censor_board_rating": "U",
                    "duration": 0,
                    "genres": [
                        "string"
                    ],
                    "id": "string",
                    "poster_url": "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
                    "rating": 0,
                    "release_date": "Tue Aug 13 2020",
                    "status": "PUBLISHED",
                    "storyline": "string",
                    "title": "WaterBoy",
                    "trailer_url": "string",
                    "wiki_url": "string"
                },
                {
                    "artists": [
                        {
                            "first_name": "string",
                            "id": "string",
                            "last_name": "string",
                            "profile_description": "string",
                            "profile_url": "string",
                            "role_type": "DIRECTOR",
                            "wiki_url": "string"
                        }
                    ],
                    "censor_board_rating": "U",
                    "duration": 0,
                    "genres": [
                        "string"
                    ],
                    "id": "string",
                    "poster_url": "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
                    "rating": 0,
                    "release_date": "Fri Jul 15 2020",
                    "status": "PUBLISHED",
                    "storyline": "string",
                    "title": "BatMan",
                    "trailer_url": "string",
                    "wiki_url": "string"
                }
            ],
            "page": 0,
            "total_count": 0
        };

        console.log("Response",mockData.movies);

       // setMovieList(data.movies);
         setMovieList(mockData.movies);
        //fetch("http://localhost:7081/api/contacts")
        // .then(input=>input.json())
        // .then(data=>setMovieList(data))


    }


    useEffect(()=>{
        loadData();
    },[])



    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={350} className={classes.gridList} cols={4}>

                {movieList.map((movieItem) => (
                    <GridListTile key={movieItem.id}>
                        <img src={movieItem.poster_url} alt={movieItem.title} />
                        <GridListTileBar
                            title={movieItem.title}
                            subtitle={<span>Release Date: {movieItem.release_date}</span>}

                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}