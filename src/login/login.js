import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TrafficOutlinedIcon from '@material-ui/icons/TrafficOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1519994007676-baabab4bf574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const { TransitoClient } = require('../crashify_grpc_web_pb.js');
const { Sesion } = require('../crashify_pb.js');

var client = new TransitoClient('http://localhost:8080', null, null);

function callGrpcService (username, pass) {
  const sesion = new Sesion();

  sesion.setUsuario(username);
  sesion.setPassword(pass);

  client.iniciarSesion(sesion, {}, (err, usuario) => {
    if (usuario == null) {
      console.log(err)
    } else {
      alert(usuario.getNombre())
    }
  });
}

export default function SignInSide() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <TrafficOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crashify
          </Typography>
          <form className={classes.form} onSubmit={(e) => {
            e.preventDefault();
            callGrpcService(username, pass)}}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              value={username} onInput={e => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={pass} onInput={e => setPass(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Iniciar Sesión
            </Button>
            <Box mt={5}>
            <Typography variant="body2" color="textSecondary" align="center">
              {'Sistema de Control de Reportes de Tránsito '}
            </Typography>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
