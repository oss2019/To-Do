import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Navigationbar from '../components/Navbar';
import CardComp from '../components/Card';
import AddButton from '../components/AddButton';

const Home = () => {

  const [todos, setTodos] = React.useState([]); // var todos = [];

  React.useEffect(() => {
    setTodos([...JSON.parse(localStorage.getItem('todos'))]);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <Navigationbar />
      <div className="home">
        <Container fluid>
          <Row>
            <Col className="center">
              <AddButton todos={todos} change={setTodos} />
            </Col>
          </Row>
          <br />
          <Row>
            {todos.map((todo, index) => (
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
