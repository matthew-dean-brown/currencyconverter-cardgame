import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

// Array of components
var cards = [<Card1/>, <Card2/>, <Card3/>];

// function sets 1 random value to variable whilst removing it from the Array,then returns it
const CardsRandom1 = () => {
  var firstCard = Math.floor(Math.random() * 3);
  var newFirstCard = cards.splice(firstCard,1)
  return newFirstCard;
}

// function sets 1 random value to variable whilst removing it from the Array,then returns it
const CardsRandom2 = () => {
  var secondCard = Math.floor(Math.random() * 3);
  var newsecondCard = cards.splice(secondCard,1)
  return newsecondCard;
}

// sets the new last value of array to variable,then returns it
const CardsRandom3 = () => {
  var newthirdCard = cards.splice(0)
  return newthirdCard;
}

class Win extends React.Component {
    render(){
      return(
          <div style={{display:"flex", justifyContent:"center"}}>
            <CardsRandom1/>
            <CardsRandom2/>
            <CardsRandom3/>
          </div>
      )
    }
  }

export default Win; 