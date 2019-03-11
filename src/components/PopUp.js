import React, {Component} from 'react';
import Popup from 'reactjs-popup'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'


class PopUp extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Button className="primary ui " onClick={this.handleShow}>
            +
          </Button>
  
          <Modal style={modalStyles} show={this.state.show} onHide={this.handleClose}>
            <ModalHeader closeButton>
              <ModalTitle>Modify Recipes</ModalTitle>
            </ModalHeader>
            <ModalBody>
            <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Recipe Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="pizza" />
  </div>
  
  <div class="form-group">
    <label for="IngredientsFormControlTextarea1">Ingredients</label>
    <textarea class="form-control" id="IngredientsFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="form-group">
    <label for="StepsFormControlTextarea1">Steps</label>
    <textarea class="form-control" id="StepsFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
            </ModalBody>
            <ModalFooter>
            
             <Button variant="primary" onClick={this.handleClose}>
                Add
              </Button>
              <Button variant="secondary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    }
  }

  const modalStyles = {
    position: 'absolute',
    top: '50',
    left: '0',
    transform: 'translate(-50%, -50%) !important'
};

  
  

export default PopUp
