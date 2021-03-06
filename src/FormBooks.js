import { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
class FormBooks extends Component {
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
      etext: e.target.eText.value,
    }
    this.props.hideModal();
    this.props.addBookHandler(book);
  }

  render() {
    return (
      <Modal
        show={this.props.displayModal}
        onHide={this.props.hideModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>Add a Book</Modal.Title>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='title'>
              <Form.Label>title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId='status'>
              <Form.Label>status</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId='eText'>
              <Form.Check type="checkbox" label='eText' />
            </Form.Group>
            <Button type='submit'>Add a Book</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default FormBooks;