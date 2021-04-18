import {
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Link,
    makeStyles,
    MuiAlert,
    Radio,
    RadioGroup,
    React,
    Snackbar,
    TextField,
    Typography,
    useState
} from "../component"
/*
import {appNotification} from "../shared/notification/app-notification";
*/
import {doRegisterUser} from "./authDispatcher";
import {LOGIN} from "./authStore";
import {useDispatch} from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
/*
import {getAsFormatted} from "../shared/date-helpers";
*/



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function Register(pros) {

    const classes = useStyles();
   /// const history = useHistory();
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [error_message, set_error_message] = React.useState(false);


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [role, setRole] = useState("USER");
    const [phoneNumber,setPhoneNumber] = useState("");

    //
    // const [userName, setUserName] = useState('');
    // const [firstName, setFirstName] = useState('');
    //const [confirmPassword, setConfirmPassword] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [address, setAddress] = useState('');
    //
    // const [pinCode, setPinCode] = useState('');
    // const [userRole, setRole] = useState("");
    // const [phoneNumber,setPhoneNumber] = useState("");
    // const [gender, setGender] = useState("MALE");



    function getRoles (input){

        const isUser = (input === "USER")



        return {isUser}
    }

    function callObservable(subscriberMethod,callback) {

        subscriberMethod
            .subscribe((response) => {

                callback(response)

            }, (error => {


            //    appNotification.showError(error)
            }))

    }
    function registerUser(payload) {


        callObservable(doRegisterUser(payload),(response)=>{

            const currentUser = response.user
            const token = response.token

           // appNotification.showSuccess("Succesfully Registered")
            dispatch({type: LOGIN, "payload": response});
          //  history.push("/profile")

        })

    }



    function onUserTypeChanged(evt,role){
        if(evt.target.checked)
            setRole(role)

    }
    function handleSubmit(event) {
        event.preventDefault();





        const payload = {
            "email_address": email,
            "first_name": firstName,
            "last_name": lastName,
            "mobile_number": phoneNumber,
            "password": password
        }




        /*if(confirmPassword !== password){

         //   appNotification.showError("Passwords Mismatch")
            return;
        }*/
        let  {isUser} = getRoles(role)


        //if(isUser)
            registerUser(payload);



    }

    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs">

                <div className={classes.paper}>




                    <form className={classes.form} onSubmit={handleSubmit} noValidate>

                        <Grid container spacing={2}>

                            <Grid item xs={12} sm={4}>
                                <TextField
                                    name="firstName"
                                    value={firstName}
                                    onInput={e => setFirstName(e.target.value)}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    variant="outlined"
                                    value={lastName}
                                    onInput={e => setLastName(e.target.value)}
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>



                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    value={password}
                                    onInput={e => setPassword(e.target.value)}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                />
                            </Grid>


                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    value={email}
                                    onInput={e => setEmail(e.target.value)}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    value={phoneNumber}
                                    onInput={e => setPhoneNumber(e.target.value)}
                                    required
                                    fullWidth
                                    name="mobile"
                                    label="Mobile No."
                                    type="number"
                                    id="mobile"
                                />
                            </Grid>



                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Register
          </Button>

                    </form>
                </div>

            </Container>
        </React.Fragment>

    )
}

export default Register
