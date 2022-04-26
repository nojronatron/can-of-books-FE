import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img from './img/slidetemp.JPG';
import Image from 'react-bootstrap/Image';
import {Container} from 'react-bootstrap';
import AddBook from './AddBook';
import DeleteButton from './DeleteButton'

require('dotenv').config();

//constants
const SERVER = process.env.REACT_APP_SERVER;


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }


  getBooks = async () => {//receives our data
    let url = `${SERVER}/books`;
    let result;

    try{
      result = await axios.get(url);
    }
    catch (error) {
      console.error(error.name + ': ' + error.message);
    }
    return result.data;
  }

  getBooksResult = async () =>{//sets our data from getBooks()
    const result = await this.getBooks();
    this.setState ({
          books: result,
        })
  }
/*****************************below day 2 code***********************/
postBook = async (book) =>
{
  try{
    let url = `${SERVER}/books`;
    let createdBook = await axios.post(url, book);
    this.setState({
      books: [...this.state.books, book]
    })
  }
  catch(error){console.error(error.name + ': ' + error.message, error.response.data)}
}

deleteBook = async (id) =>
{
    let url = `${SERVER}/books/${id}`;
    await axios.delete(url);
    let updatedBooks = this.state.cats.filter(book => book._id !== id);
    this.setState({
      books: updatedBooks
    })
}


handleSubmit = (e) =>
{
  e.preventDefault();
  let book = {
    title: e.target.title.value,
    description: e.target.description.value,
    status: e.target.status.value,
    etext: e.target.eText.value
  }
  this.postBook(book);
}

/*****************************above day 2 code***********************/
  
  //awaits all component data
componentDidMount() { this.getBooksResult() }


  render() {

    return (
      <>
      {this.state.books.length?(
      <Container className='mt-5'>
      <Carousel>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
              {this.state.books.map((element, idx) =>
              (
                
              <Carousel.Item key={idx}>
                <Image
                className='d-block w-100'
                src={img}
                alt='a slide'
                />
                  <h3>{element.title}</h3>
                  <h4>{element.description}</h4>
                  <p>{element.status}</p>
                  <DeleteButton id={element._id} deleteBook={this.deleteBook}/>
              </Carousel.Item>
              ))}
      </Carousel>
      <AddBook postBook={this.postBook} />
        </Container>

      ):(
        <Container>
          <h3> No books! lets add!: (</h3>
          <AddBook postBook={this.postBook}/>
        </Container>
      )}
      </>
    )
  }
}

export default BestBooks;
