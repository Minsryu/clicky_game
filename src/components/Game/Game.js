import React, { Component } from "react";
import character from "./character.json";
import CharacterCard from "./CharacterCard";
import "./Game.css";

class Game extends Component {
  // Setting the component's initial state
  state = {
    character:character,
    score: 0,
    topScore:0
  };

  randomImage = () =>{
    var character = this.state.character;
    
    for(var i = character.length-1;i>0;i--){
      var j = Math.floor(Math.random()*(i+1));

      var temp = character[i];
      character[i] = character[j];
      character[j] = temp;
    }

    this.setState({character:character});
  }

  componentDidMount(){
    this.randomImage(this.state.character);
  };


  render() {

    console.log(this.state.character);
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <nav className ="navbar">
          <ul> 
            <li className="brand">
              <a href = "/">Clicky Game</a>
            </li>
            <li>You Guessed correctly</li>
            <li>Score: {this.state.score} | Top Score: {this.state.topScore}</li>
          </ul>
        </nav>
        <header className = "header">
          <h1>Clicky Game</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </header>
        <main className = "container">

          {this.state.character.map(character=>(
            <CharacterCard key = {character.id} character={character} randomImage={this.randomImage}/>
          ))}
        </main>
        <footer className="footer">
          <div className="bottom">
            Clicky Game
          </div>
        </footer>
      </div>
    );
  }
}

export default Game;
