import React from "react";
import FlashCards from "./FlashCards";
import FlashForm from "./FlashForm";

import { Container, Header, } from "semantic-ui-react";



class Card extends React.Component {
state = {
  flashcards: [
   {id: 1, front: "What is React ", back: "JS Library ... ", },
   {id: 2, front: "Who Built React ", back: "FaceBook ", },
   {id: 3, front: "Can you dance? ", back: "You know it!", },
 ],
 };

   getId = () => {
     return Math.floor((1 + Math.random()) * 10000);
   };

   addCard =(cardData) => {
     let card ={ id: this.getId(), ...cardData, };
     this.setState({flashcards: [...this.state.flashcards, card], });
   };

   removeCard =(id) => {
     const cards = this.state.flashcards.filter( card => {
       if (card.id !== id)
       return card;
     })
     this.setState({flashcards: cards })
   }
    
     
     

render() {
 // const { showBack, } = this.state;
 return (
  <Container style={{ paddingTop: "40px", }}>
     <Header as="h1" color="teal" >React Flash Cards</Header>
     <hr />
     <FlashForm add={this.addCard} />
     <hr />
    <FlashCards 
     flashcards={this.state.flashcards}
    remove={this.removeCard}
    />
  </Container>
  );
 }
}

export default Card;
