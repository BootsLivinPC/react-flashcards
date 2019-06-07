import React from "react";
import { Button, Card, Segment } from "semantic-ui-react";
import FlashForm from "./FlashForm";

//this class 
class FlashCard extends React.Component {
 state = { frontShow: true, editing: false,  };
  

 toggleShow = () => this.setState({frontShow: !this.state.frontShow}); 
  
 
 
 toggleEdit = () => this.setState({ editing: !this.state.editing, });
  
render() {
// refactoring this.props
  const {front, back, remove, id } = this.props
  return (
  <Card.Group>
    <Card>
      <Segment style={{style}}>
       {
        this.state.editing ?
        <FlashForm { ...this.props }
        toggleEdit={this.toggleEdit} 
        />
        :
       <Card.Header>
       {this.state.frontShow ? front : back}
        </Card.Header>
       }
     </Segment>
    <Card.Content extra>
     <div class="ui tiny button" className="ui three buttons">
      <Button 
       size="tiny"
       basic color="green" 
       onClick={() => this.toggleShow()}>
       Answer
      </Button>
      {/* <Button basic color="red" onClick={() => remove(id)}>Delete</Button> */}
      <Button 
       size="tiny"
       basic color="red" 
       onClick={() => remove(id)}>
       Delete
      </Button>
      <Button 
       size="tiny"
       basic color="blue" 
       onClick={() => this.toggleEdit()}>
       Edit
      </Button>
     </div>
    </Card.Content>
    </Card>
  </Card.Group>
   )
  }
};

const style = {
  segment: {
  display: "flex", 
  alignItems: "center", 
  justifyContent: "auto",
  },
};

export default FlashCard;