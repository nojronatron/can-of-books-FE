import { Component } from "react";
import {Button} from 'react-bootstrap';

class UpdateButton extends Component{
    render(){
        return(
            <Button onClick={() => this.props.updateBook(this.props.id)}>Update Book</Button>
        );
    }
};

export default UpdateButton;
