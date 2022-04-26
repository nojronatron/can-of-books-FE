import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>

        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://place-hold.it/200x200/grey/black.jpeg&text=Software%20Developer&bold&fontsize=14"
            alt="Placeholder image of a software developer"
          />
          <Card.Body>
            <Card.Title>Jonathan Rumsey</Card.Title>
            <Card.Subtitle>Learnveloper: A lifelong learning developer</Card.Subtitle>
            <Card.Text>Jon (he/him) is a software developer and accomplished systems administrator with a certificate in software testing and an associates degree in network technology.</Card.Text>
          </Card.Body>
          <Card.Link href="https://github.com/nojronatron">GitHub</Card.Link>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://place-hold.it/200x200/grey/black.jpeg&text=Software%20Developer&bold&fontsize=14"
            alt="Placeholder image of a software developer"
          />
          <Card.Body>
            <Card.Title>Raul Zarate</Card.Title>
            <Card.Subtitle>Hungy Like The Wolf</Card.Subtitle>
            <Card.Text>Raul is a software developer.</Card.Text>
          </Card.Body>
          <Card.Link href="https://github.com/zaratr">GitHub</Card.Link>
        </Card>
      </>
    )
  }
};

export default Profile;
