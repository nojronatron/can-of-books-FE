import { Component } from "react";
import {Button} from 'react-bootstrap';

import FormBooks from './FormBooks';

class AddBook extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modalDisplay: false
        }
    }
    displayModal=() =>{
        this.setState({
            modalDisplay: true
        });
    };
    hideModal=() =>
    {
        this.setState({
        modalDisplay: false
        });
    };

    render(){
        return(
            <>
            <main>
            {/* {console.log(this.props.postBook)} */}
                <FormBooks addBook={this.props.addBook} modalDisplay={this.state.modalDisplay} hideModal={this.hideModal}/>
                {/* <Button onClick={this.displayModal}>Add a Book</Button> */}
            </main>
            </>

        );
    }
};

export default AddBook;

