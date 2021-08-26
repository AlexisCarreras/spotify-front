import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import img from '../../img/portadas.png';
import {Link} from 'wouter';

function Copyright() {
    const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.footer}>
      {'Copyright © '}
      {' Featurify '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: '2',
  },
  registro: {
    zIndex: '2',
  },
  imageDiscos: {
    height: '100%',
    width: '100%',
    filter: 'blur(2px) brightness(60%)',
  },
  paper: {
    margin: theme.spacing(11, 11),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(10, 0, 4, 0),
    padding: '2rem',
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    paddingTop: '0.7rem',
    paddingBottom: '0.7rem',
  },
  links: {
    textDecoration: 'none',
    color: '#777',
    '&:hover': {
      textDecoration: 'underline',
  },
  footer: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
  },
},
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} className={classes.registro} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            Bienvenido a Featurify 
          </Typography>
          <Avatar className={classes.avatar} >
            <LockOutlinedIcon fontSize="large" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              color="secondary"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="secondary"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Recordar"
            />
            <Link href={`/home`} className={classes.links}>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                >
                Registrarse
                </Button>
            </Link>
            <Grid container>
              <Grid item xs>
                <Link href={`/`} variant="body2" className={classes.links}>
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href={`/`} variant="body2" className={classes.links}>
                  {"¿Ya tienes una cuenta? Inicia Sesión"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={15}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <img src={img} alt="fondo-login" className={classes.imageDiscos} />
      </Grid>
    </Grid>
  );
}