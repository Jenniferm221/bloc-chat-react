import React, { Component } from "react";
import "./App.css";
import User from "./components/User.js";
import * as firebase from "firebase";
import RoomList from "./components/RoomList.js";
import MessageList from "./components/MessageList.js";




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
      super(props)
      this.state = {
        activeRoom: null,
        user: null
    };
  }

  setActiveRoom(room) {
   this.setState({activeRoom: room});

 }

 setUser(user) {
   this.setState({user: user});
   console.log(user);

 }

 render() {
   return (
     <div className="App">
     <aside id="sidebar">
     <h1 className="App-title">Bloc Chat</h1>
       <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setActiveRoom={this.setActiveRoom.bind(this)} user={this.state.user}/>
     </aside>
     <aside id="sidebar-bottom">
     <User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user}/>
     </aside>
     <MessageList firebase={firebase} activeRoom={this.state.activeRoom} user={this.state.user}/>
     </div>
   );
 }

}

export default App;
