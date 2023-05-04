import React, { Component, useEffect, useState } from "react";
import Flashcard from "./Flashcard"

class App extends Component{
  state = {
    data:[]
  }

  componentDidMount(){
    fetch('http://localhost:8080/flashcards')
    .then(response => response.json())
    .then(data => {
      this.setState({data})
    }
    );
  }

  render(){
    return(
      <div>
        {this.state.data.map(flashcard => <Flashcard info={flashcard}/>)}
      </div>
    );
  }
}

export default App;









