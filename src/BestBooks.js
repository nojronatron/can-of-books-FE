import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

    /* TODO: Make a GET request to your API to fetch all the books from the database  */
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
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
