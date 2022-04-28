import { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

class UpdateFormBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBook: {},
      title: '',
      description: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let book = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      _id: this.props.book._id
    }
    this.props.updateBookHandler(book);//user data is in book only. no Id 
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
              <Form.Control type="text" placeholder={this.props.book.title}/>
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>description</Form.Label>
              <Form.Control type="text" placeholder={this.props.book.description} />
            </Form.Group>
            <Form.Group controlId='status'>
              <Form.Label>status</Form.Label>
              <Form.Control type="text" placeholder={this.props.book.status}/>
            </Form.Group>
            <Button type='submit'>Update a Book</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateFormBooks;