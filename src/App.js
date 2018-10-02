import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import RoomList from "./components/RoomList.js";
import MessageList from './components/MessageList.js';


var config = {
   apiKey: "AIzaSyDDMuHcKH-bQnftfUsTjVf6yuN8VeaiXQM",
   authDomain: "bchat0221.firebaseapp.com",
   databaseURL: "https://bchat0221.firebaseio.com",
   projectId: "bchat0221",
   storageBucket: "bchat0221.appspot.com",
   messagingSenderId: "102315484368"
 };

 firebase.initializeApp(config);

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeRoom: null,
    };
  }

  setActiveRoom(room) {
   this.setState({activeRoom: room});
 }

 render() {
   return (
     <div className="App">
     <aside id="sidebar">
       <h1 className="App-title">Bloc Chat</h1>
       <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setActiveRoom={this.setActiveRoom.bind(this)} />
     </aside>
     <MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
   </div>
 );
}
}

export default App;
