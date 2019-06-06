import React from "react";
import {Grid, } from "semantic-ui-react";
import FlashCard from "./FlashCard"

const FlashCards = ({flashcards, remove, }) => (
  <Grid columns={3} doubling>
  
    {
  flashcards.map(card => (
    <Grid.Column key={card.id}>
      <FlashCard {...card} 
      remove={remove} 
      flashcards={flashcards} />
      </Grid.Column>
      ))
      
}
    
  
  </Grid>

)
export default FlashCards;