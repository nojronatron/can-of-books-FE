import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img from './img/slidetemp.JPG';
import Image from 'react-bootstrap/Image';
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
              </Carousel.Item>
              ))}
      </Carousel>
        
    )
  }
}

export default BestBooks;
