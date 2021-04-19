import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {environment} from "../../environment";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList() {


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
                    "poster_url": "MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
                    "rating": 0,
                    "release_date": "string",
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
                    "poster_url": "MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
                    "rating": 0,
                    "release_date": "string",
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

        setMovieList(data.movies);
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
            <GridList cellHeight={250} className={classes.gridList}>
               {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">December</ListSubheader>
                </GridListTile>*/}
                {movieList.map((movieItem) => (
                    <GridListTile key={movieItem.id}>
                        <img src={movieItem.poster_url}  />
                        <GridListTileBar
                            title={movieItem.title}
                        />
                    </GridListTile>

                ))}
            </GridList>
        </div>
    );
}
