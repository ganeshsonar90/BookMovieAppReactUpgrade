import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Button from "@material-ui/core/Button";
import {environment} from "../../environment";











const Header = (props) => {


    //const history=useHistory();
   // const {user, token, isLoggedIn, roles} = useSelector(state => state.auth);
   // const isLoggedIn=true;
    const isToShowBookShow=false;

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

        <div>



        <div className="header">

            <div style={{
                flex: 1,
                flexDirection: 'row',
            }}>

                <div className="logostyle">
                    <img src={logo} width="30" height="30" />
                </div>





                    {  (isToShowBookShow) ?
                        <div className="aParent">


                            <div>


                                <div>
                                    {(environment.isLoggedIn) ?
                                        <div >
                                            <Button className="buttonstylelogin"
                                                id="btnlogout"
                                                variant="contained"
                                                onClick={logoutButtonHandler}
                                                color="default"

                                            >
                                                Logout
                                            </Button>


                                        </div> : <div>
                                            <Button
                                                id="btnlogin"
                                                variant="contained"
                                                onClick={loginButtonHandler}
                                                color="default"

                                            >
                                                Login
                                            </Button>


                                        </div>
                                    }

                                </div>


                                <div>
                                    <Button
                                        id="btnbookshow"
                                        variant="contained"
                                        onClick={bookshowButtonHandler}
                                        color="primary"
                                    >
                                        Book Show
                                    </Button>


                                </div>
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

        </div>
    )
};


export default Header;