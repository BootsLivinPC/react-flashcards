import React from "react";
import { Button, Card, } from "semantic-ui-react"


//  const FlashCard = ({id, front, back, remove,}) => (
class FlashCard extends React.Component {
 state = { frontShow: true, };
  
   
 
 toggleShow = () => {
   this.setState( state => {
    return {frontShow: !state.front}; 
  })
 }
 

  
render() {

  return (
  <Card.Group>
   <Card>
    <Card.Content>
     <Card.Header>
     {true ? this.frontShow : this.back}
     </Card.Header>
      {/* <Card.Header>{front}</Card.Header>
      <Card.Description>{back}</Card.Description>  */}
     </Card.Content>
    <Card.Content extra>
     <div className="ui two buttons">
      <Button 
       basic color="green" 
       onClick={() => this.state.toggleShow}>
       View Answer
      </Button>
      {/* <Button basic color="red" onClick={() => remove(id)}>Delete</Button> */}
      <Button 
       basic color="red" 
       onClick={() => this.removeCard}>
       Delete
      </Button>
     </div>
    </Card.Content>
    </Card>
  </Card.Group>
   )
  }
};

export default FlashCard;