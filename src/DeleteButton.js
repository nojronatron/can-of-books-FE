import { Component } from "react";
import {Button} from 'react-bootstrap';

class DeleteButton extends Component{
    render(){
        return(
            <Button onClick={() => this.props.deleteBook(this.props.id)}>Delete Book</Button>
        );
    }
};

export default DeleteButton;
