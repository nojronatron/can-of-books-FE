import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-boostrap/Carousel';
require('dotenv').config();

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  // TODO: put server url in ENV file
  getBooks = async () => {
    let url = 'http://localhost:3001/books';
    let result;

    try{
      result = await axios.get(url);
    }
    catch (error) {
      console.error(error.name + ': ' + error.message);
    }
    return result.data;
  }
async componentDidMount() {
    let getBooksResult = await this.getBooks();

    this.setState ({
      books: getBooksResult,
    })
  }


  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <Carousel>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
           this.state.books.forEach((item, idx) => {

            <Carousel.Item id={idx}>
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <h4>{item.description}</h4>
                <p>{item.status}</p>
              </Carousel.Caption>
            </Carousel.Item>
          })
          )
        : (
          <h3>No Books Found :(</h3>
        )}

      </Carousel>
        
    )
  }
}

export default BestBooks;
