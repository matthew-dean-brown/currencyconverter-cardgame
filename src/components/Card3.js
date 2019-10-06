import React from 'react';
import ReactCardFlip from 'react-card-flip';
import CardImg from './card.jpg';
import '../App.css'

class Card3 extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
    // Prompt requesting input from user determining if the user wants to play again
    Prompt = () => {
        if (this.state.isFlipped === true) {
          var Prompt = prompt("Would you like to play again?(y/n)")
            if (Prompt === "y"){
              window.location.reload()
            } else {
              window.location.pathname = "/#"
            }
        }
      }
      async handleClick(e) {
        e.preventDefault();
        // Waits for state to change
        await this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        // calls function after set time
        setTimeout(this.Prompt, 200)
      }
   
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <div key="front" onClick={this.handleClick}> 
            <img src={CardImg} alt="" />
          </div>
   
          <div key="back" 
            onClick={this.handleClick} 
            style={{height:"500px",width:"380px", border:"2px solid black", borderRadius:"5px", textAlign:"center",paddingTop:"200px"}}>
            <h1>You Lose</h1>  
          </div>
        </ReactCardFlip>
      )
    }
  }
export default Card3; 
