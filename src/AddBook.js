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
                <FormBooks addBook={this.props.addBook} modalDisplay={this.state.displayModal} hideModal={this.hideModal}/>
            </main>
            </>

        );
    }
};

export default AddBook;
