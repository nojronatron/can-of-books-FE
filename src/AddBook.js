import { Component } from "react";

import FormBooks from './FormBooks';

class AddBook extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modalDisplay: true,
        }
    }

    render(){
        return(
            <>
            <main>
            {/* {console.log(this.props.postBook)} */}
                <FormBooks addBook={this.props.addBook} modalDisplay={this.state.displayModal} hideModal={this.hideModal}/>
                {/* <Button onClick={this.displayModal}>Add a Book</Button> */}
            </main>
            </>

        );
    }
};

export default AddBook;

