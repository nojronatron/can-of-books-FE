import {Component} from 'react';
import {Modal, Form, Button} from 'react-bootstrap';

class FormBooks extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      newBook: {},
      title: '',
      description: ''
    }
  }
  render(){
    return(


<Form onSubmit={this.handleSubmit}>
      <Form.Group controlId='Title of Book'>
        <Form.Label>title</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group controlId='Description of Book'>
        <Form.Label>description</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group controlId='Status of Book'>
        <Form.Label>status</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group controlId='eText'>
        <Form.Check type="checkbox" label='eText'/>
      </Form.Group>
      <Button type="submit">Add Book</Button>
    </Form>
    );
  }
}

export default FormBooks;