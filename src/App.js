import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import RoomList from "./components/RoomList.js";

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
        rooms: [],
        newRoomName: ''
      };
    }
     render() {
      return (
        <div className="App">
        <h1 className="App-title">Bloc Chat</h1>
      <main>
         <RoomList firebase={firebase} />
      </main>
    </div>
  );
}
}

export default App;
