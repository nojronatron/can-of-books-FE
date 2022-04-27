import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img from './img/slidetemp.JPG';
import Image from 'react-bootstrap/Image';
import { Button, Container, Modal } from 'react-bootstrap';
import FormBooks from './FormBooks';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

require('dotenv').config();

//constants
const SERVER = process.env.REACT_APP_SERVER;


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      shouldModalBeDisplayed: false,
    }
  }

  //  route /books is already good
  getBooks = async () => {//receives our data
    console.log('entered getBooks callback.');
    //let url = `${SERVER}/books`;
    let url = 'http://localhost:3001/books';
    console.log('url: ', url);
    let result;

    try {
      result = await axios.get(url);
      console.log('result: ', result);
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
        books: [...this.state.books, createdBook]
      })
    }
    catch (error) { console.error(error.name + ': ' + error.message, error.response.data) }
  }

  // changed route from /book/:id to /books/:id
  deleteBook = async (id) => {
    let url = `${SERVER}/books/${id}`;
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
      let url = `${SERVER}/books/${bookToUpdate._id}`;
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

  displayModalHandler = () => {
    this.setState({
      shouldModalBeDisplayed: true
    });
  };

  /*****************************above day 3 code***********************/

  //awaits all component data
  componentDidMount() { this.getBooksResult() }

  render() {

    return (
      <>
        <div>
          {this.state.books ? (
            <Container className='mt-5'>
              <Carousel>
                <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
                {this.state.books.map((element, idx) =>
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
                    </Carousel.Caption>
                    <DeleteButton id={`${element._id}`} deleteBook={this.deleteBook} />
                    <UpdateButton id={`${element._id}`} updateBook={this.updateBook} />
                    {/* <Button type="button" id={element._id} openModalForm={this.addBookForm} /> */}
                  </Carousel.Item>
                ))}
              </Carousel>
            </Container>

          )
            : <h1>No books to display.</h1>
          }
        </div>

        <Container>
          <Button
            onClick={() => this.displayModalHandler()}
          >Add a Book</Button>
          <FormBooks
            displayModal={this.state.shouldModalBeDisplayed}
            hideModal={this.hideModalHandler}
          />
        </Container>
      </>
    )
  }
}

export default BestBooks;
