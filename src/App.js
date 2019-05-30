import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const { TransitoClient } = require('./crashify_grpc_web_pb.js');
const { Sesion, Usuario } = require('./crashify_pb.js');

var client = new TransitoClient('http://localhost:8080', null, null);

class App extends Component {
  
  callGrpcService = () => {
    const sesion = new Sesion();
    sesion.setUsuario('deklok');
    sesion.setPassword('123456');

    client.iniciarSesion(sesion, {}, (err, usuario) => {
      if (usuario == null) {
        console.log(err)
      }else {
        console.log(usuario.getNombre())
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button style={{padding:10}} onClick={this.callGrpcService}>Click for grpc request</button>
        </header>
      </div>
    );
  }
}

export default App;
