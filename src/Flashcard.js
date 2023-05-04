import React, { Component } from "react";

class Flashcard extends Component{

    render(){
        return(
            <div>
                <p>Fiszka {this.props.info.flashcardId}</p>
                <p>{this.props.info.frontside} | {this.props.info.backside}</p>
            </div>
        )
    }
}

export default Flashcard;