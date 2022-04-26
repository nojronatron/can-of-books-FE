import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img from './img/slidetemp.JPG';
import Image from 'react-bootstrap/Image';
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

  //awaits all component data
async componentDidMount() { this.getBooksResult() }


  render() {

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
