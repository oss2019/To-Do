import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Navigationbar from '../components/Navbar';
import CardComp from '../components/Card';
import AddButton from '../components/AddButton';

const Home = () => {
  const [notes, setNotes] = React.useState([]); // var notes = [];
  const [loading, setLoading] = useState(false)
  // React.useEffect(() => {
  //   setNotes([...JSON.parse(localStorage.getItem('notes'))]);
  // }, []);

  const fetchAllNotes = async ()=>{
    setLoading(true);
    const response = await fetch("http://localhost:3001/");
    if(!response.ok){
      throw new Error("couldn't fetch notes")
    }
    const data = await response.json();
    setNotes(data)
    setLoading(false)
  }
  useEffect(() => {
    try {
      fetchAllNotes();
    } catch (error) {
      console.log(error)
    }
  }, [])
  

  // const addNotes = async ()=>{
  //   const response = await fetch("http://localhost:3001/", {
  //     method : "POST",

  //   })
  // }
  

  return (
    <div>
      <Navigationbar />
      <div className="home">
        <Container fluid>
        {loading && <p style={{textAlign: 'center'}}>Fetching....</p> }
          <Row>
            <Col className="center">
              <AddButton notes={notes} change={setNotes} />
            </Col>
          </Row>
          <br />
          <Row>
            {notes.map((todo, index) => (
              <Col className="center" key={index}>
                <div>
                  <CardComp title={todo.title} subtitle={todo.subtitle} body={todo.body} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home;
