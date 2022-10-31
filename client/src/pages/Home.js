import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Navigationbar from '../components/Navbar';
import CardComp from '../components/Card';
import AddButton from '../components/AddButton';

const Home = () => {
  const [notes, setNotes] = React.useState([]); // var notes = [];
  const [loading, setLoading] = useState(false)

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
  
  const noteIdfunc = (id)=>{
    console.log(id)
    try {
      console.log("first")
      delNote(id)
    } catch (error) {
      console.log("suuuuu")
    }
    
  }

  const delNote = async (noteId) => {
    setLoading(true)
    await fetch("http://localhost:3001/", {
      method: "DELETE",
      body: JSON.stringify({noteId : noteId}),
        headers: {
          "Content-Type": "application/json",
        },
        Credentials: "include",
    });
    setLoading(false)

    setNotes((prevNotes)=>{
      return (
        prevNotes.filter((note)=>{
          return note._id != noteId
        })
      )
    })
  
  };


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
                  <CardComp noteIdfunc={noteIdfunc} _id={todo._id} title={todo.title} subtitle={todo.subtitle} body={todo.body} />
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
