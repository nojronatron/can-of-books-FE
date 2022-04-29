import { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

class UpdateFormBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBook: {},
      title: '',
      description: '',
      userInputTitle: '',
      userChangedTitle: false,
      userInputDescription: '',
      userChangedDescription: false,
      userInputStatus: '',
      userChangedStatus: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    let tempTitle = this.state.userChangedTitle ? this.state.userInputTitle : e.target.title.value;
    let tempDescription = this.state.userChangedDescription ? this.state.userInputDescription : e.target.description.value;
    let tempStatus = this.state.userChangedStatus ? this.state.userInputStatus : e.target.status.value;

    let book = {
      title: tempTitle,
      description: tempDescription,
      status: tempStatus,
      _id: this.props.book._id
    }

    this.props.updateBookHandler(book);//user data is in book only. no Id 
 }

 handleUserUpdateTitle = (event) => {
  this.setState({
    userInputTitle: event.target.value,
    userChangedTitle: true,
  })
}

handleUserUpdateDescription = (event) => {
  this.setState({
    userInputDescription: event.target.value,
    userChangedDescription: true,
  })
}

handleUserUpdateStatus = (event) => {
  this.setState({
    userInputStatus: event.target.value,
    userChangedStatus: true,
  })
}

  render() {
    return (
      <Modal
        show={this.props.shouldUpdateModalBeDisplayed}
        onHide={this.props.hideUpdateModalHandler}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>Update Book a Book</Modal.Title>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='title'>
              <Form.Label>title</Form.Label>
              <Form.Control 
                onChange={this.handleUserUpdateTitle}
                type="text" 
                defaultValue={this.props.book.title}/>
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>description</Form.Label>
              <Form.Control 
                onChange={this.handleUserUpdateDescription}
                type="text" 
                defaultValue={this.props.book.description} />
            </Form.Group>
            <Form.Group controlId='status'>
              <Form.Label>status</Form.Label>
              <Form.Control 
                onChange={this.handleUserUpdateStatus}
                type="text" 
                defaultValue={this.props.book.status}/>
            </Form.Group>
            <Button type='submit'>Update a Book</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateFormBooks;