import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img from './img/slidetemp.JPG';
import Image from 'react-bootstrap/Image';
import { Button, Container } from 'react-bootstrap';
import FormBooks from './FormBooks';
import UpdateFormBooks from './UpdateFormBooks';

require('dotenv').config();

//constants
const SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookToUpdate: {},//is a new book to update the set of books array
      shouldModalBeDisplayed: false,
      shouldUpdateModalBeDisplayed: false,
    };
  }

  //  route /books is already good
  getBooks = async () => {//receives our data
    let url = `${SERVER}/books`;
    let result;

    try {
      result = await axios.get(url);
    }
    catch (error) {
      console.error(error.name + ': ' + error.message);
    }
    return result.data;
  }

  getBooksResult = async () => {//sets our data from getBooks()
    const result = await this.getBooks();
    this.setState({
      books: result,
    })
  }

  /*****************************below day 2 code***********************/
  // changed route from /add to /books
  addBook = async (book) => {//add a book
    try {
      let url = `${SERVER}/books`;
      let createdBook = await axios.post(url, book);
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    }
    catch (error) { console.error(error.name + ': ' + error.message, error.response.data) }
  }

  // changed route from /book/:id to /books/:id
  deleteBook = async (id) => {
    let url = `${SERVER}/book/${id}`;
    await axios.delete(url);
    let updatedBooks = this.state.books.filter(
      book => book._id !== id
    );

    this.setState({
      books: updatedBooks
    })
  }

  /*****************************above day 2 code***********************/

  /*****************************below day 3 code***********************/
  updateBook = async (bookToUpdate) => {

    try {
      let url = `${SERVER}/book/${bookToUpdate._id}`;
      let updatedBook = await axios.put(url, bookToUpdate);
      // replace old version of book with new
      let updatedBookArray = this.state.books.map(book => {
        return book._id === bookToUpdate._id ? updatedBook.data : book;
      });
      this.setState({
        books: updatedBookArray,
      })
    }
    catch (err) {
      console.log('An error has occurred: ', err.response.data);
    }
  }

  hideModalHandler = () => {
    this.setState({
      shouldModalBeDisplayed: false
    });
  };

  hideUpdateModalHandler = () => {
    this.setState({
      shouldUpdateModalBeDisplayed: false
    });
  };

  displayModalHandler = () => {
    this.setState({
      shouldModalBeDisplayed: true
    });
  };

  updateBookHandler = (book) => {//this handles from child
    this.setState({
      shouldUpdateModalBeDisplayed: false
    });
    this.updateBook(book);//this does the updating
  }

  helperUpdateBook = (aBook) => {
    // we want to pass props to child
    this.setState({
      bookToUpdate: aBook,
      shouldUpdateModalBeDisplayed: true
    })
    // send a showmodal property so that updateFormBooks will apear

  }
  /*****************************above day 3 code***********************/

  //awaits all component data
  componentDidMount() { this.getBooksResult() }

  render() {

    return (
      <>
        <div>
          <Container className='mt-5'>
            <Carousel wrap={false}>

              {this.state.books.length === 0 ? (<h2>No books in store.</h2>) : (<h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>)}

              {this.state.books.map((element) =>
              (
                <Carousel.Item key={element._id}>
                  <Image
                    className='d-block w-100'
                    src={img}
                    alt='a slide'
                  />
                  <Carousel.Caption>
                    <h3>{element.title}</h3>
                    <h4>{element.description}</h4>
                    <p>{element.status}</p>
                    {/* //this passes an _id and a function deletebook */}
                    <Button onClick={() => this.deleteBook(element._id)} > {/* //non auto delete. must use () => */}
                      Delete Book
                    </Button>
                    {/* //passes an _id and a function Update book */}
                    <Button
                      onClick={() => this.helperUpdateBook(element)}
                    >
                      Update Book
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>

            <Button
              onClick={() => this.displayModalHandler()}
            >Add a Book</Button>
            <FormBooks
              displayModal={this.state.shouldModalBeDisplayed}
              hideModal={this.hideModalHandler}
              addBookHandler={this.addBook}
            />
            <UpdateFormBooks
              shouldUpdateModalBeDisplayed={this.state.shouldUpdateModalBeDisplayed}
              hideUpdateModalHandler={this.hideUpdateModalHandler}
              updateBookHandler={this.updateBookHandler}
              book={this.state.bookToUpdate}
            />
          </Container>
        </div>
      </>
    )
  }
}

export default BestBooks;
