import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux'
import Input from './Input'
import Icon from './Icon'
import { useHistory} from 'react-router-dom'
import { signin, signup} from '../../redux/actions/authActions'
import { RESET } from '../../redux/constants/authTypes';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const authErrors = useSelector((state) => state.auth);
  const { errors } = authErrors;

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();


    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const classes = useStyles();

  const handleShowPassword = () => setShowPassword(!showPassword);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(isSignup) {
      dispatch(signup(formData, history))
    } else {
      dispatch(signin(formData, history))
    }
  }
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  } 
    
    const switchMode = () => {
      setIsSignup((prevIsSignup) => !prevIsSignup)  
      setShowPassword(false)
      dispatch({type: RESET})
    } 

    const googleSuccess = async (res) => {
     const result = res?.profileObj;
     const token  = res?.tokenId;
     try {
       dispatch({type: 'AUTH', data: {result, token }})
       history.push('/')
     } catch (error) {
       console.log(error);
     }
    };
 
    // const googleError = (error) => {
    //   console.log(error);
    //    alert('Google Sign In was unsuccessful. Try again later');
    // }

    return (
        <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Comfirm Password" handleChange={handleChange} type="password" /> }
          </Grid>
             {errors &&  <h3>{errors}</h3>}

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin
            clientId="559410614995-tkfv8qa62vj87e4rv2j7vq153e02me81.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            // onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button variant="contained" color="secondary" onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    )
}

export default Auth
