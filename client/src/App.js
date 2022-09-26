import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
// import Routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
