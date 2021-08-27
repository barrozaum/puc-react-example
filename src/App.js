import './App.css';
import { Header } from './components/Header';
import { MovieService } from './services/MovieServices';
import { useState, useEffect } from 'react';
import { Sobre } from './view/Sobre';
import { Home } from './view/Home';
import { Detalhe } from './view/Detalhe';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async() => {
    const retorno = await MovieService.getMovies();
    setMovies(retorno.data.results);
    }

  useEffect(() => {
    fetchMovies()
  }, []);

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route path="/movies/:id">
            <Detalhe/>
          </Route>
          <Route path="/sobre">
            <Sobre/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  ); 
}

export default App;
