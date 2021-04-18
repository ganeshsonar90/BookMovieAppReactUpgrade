import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Button from "@material-ui/core/Button";
import {environment} from "../../environment";











const Header = (props) => {


    //const history=useHistory();
   // const {user, token, isLoggedIn, roles} = useSelector(state => state.auth);
   // const isLoggedIn=true;
    const isToShowBookShow=true;

    const loginButtonHandler = () => {

        props.historyVal.push({
            pathname: "/login_register_tab",
        });


    };

    const logoutButtonHandler = () => {

    };

    const bookshowButtonHandler = () => {

        if (environment.isLoggedIn){
          // console.log("BaseUrl", props.baseUrl);

            props.historyVal.push({
              //  pathname: "/bookshow/" + 1,
                pathname: "/bookshow/" + props.match.params.id,
            });
        }


    };



    return (
        <div className="header">

            <div style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <div className="logostyle">
                    <img src={logo} width="30" height="30" />
                </div>





                    {  (isToShowBookShow) ? <div  style={{
                            flex: 1
                        }} >
                            <div style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}>
                        <div className="loginButtonStyle">
                            <Button
                                id="btnbookshow"
                                variant="contained"
                                onClick={bookshowButtonHandler}
                                color="primary"
                                style={{
                                    right: 25,
                                    top: 1,
                                }}

                            >
                                Book Show
                            </Button>


                        </div>





                        {(environment.isLoggedIn) ?
                            <div className="loginButtonStyle">
                                <Button
                                    id="btnlogout"
                                    variant="contained"
                                    onClick={logoutButtonHandler}
                                    color="default"
                                    style={{
                                        position: 'absolute',
                                        right: 25,
                                        top: 25,
                                    }}
                                >
                                    Logout
                                </Button>


                            </div> : <div className="loginButtonStyle">
                                <Button
                                    id="btnlogin"
                                    variant="contained"
                                    onClick={loginButtonHandler}
                                    color="default"
                                    style={{
                                        position: 'absolute',
                                        right: 25,
                                        top: 25,
                                    }}
                                >
                                    Login
                                </Button>


                            </div>
                    }


                        </div>

                        </div>


                    :
                  <div >  {  (environment.isLoggedIn) ?
                        <div className="loginButtonStyle">
                        <Button
                        id="btnlogout"
                        variant="contained"
                        onClick={logoutButtonHandler}
                        color="default"
                        style={{
                        position: 'absolute',
                            right: 25,
                            top: 25,
                    }}
                        >
                        Logout
                        </Button>


                        </div> : <div className="loginButtonStyle">
                        <Button
                        id="btnlogin"
                        variant="contained"
                        onClick={loginButtonHandler}
                        color="default"
                        style={{
                        position: 'absolute',
                        right: 25,
                        top: 25,
                    }}
                        >
                        Login
                        </Button>


                        </div>
                    }

                  </div>


                    }







           {/*// if(isToShowBookShow){*/}






        </div>
        </div>
    )
};


export default Header;