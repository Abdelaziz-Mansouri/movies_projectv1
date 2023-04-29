import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import GenreList from './components/GenreList';
import GenreForm from './components/GenreForm';
import DirectorList from './components/DirectorList';
import DirectorForm from './components/DirectorForm';
import ActorList from './components/ActorList';
import ActorForm from './components/ActorForm';
import RatingList from './components/RatingList';
import RatingForm from './components/RatingForm';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<MovieList/>} />
        <Route exact path="/movies" element={<MovieList/>} />
        <Route exact path="/movies/new" element={<MovieForm/>} />
        <Route exact path="/movies/:id" element={<MovieForm/>} />
        <Route exact path="/genres" element={<GenreList/>} />
        <Route exact path="/genres/new" element={<GenreForm/>} />
        <Route exact path="/genres/:id" element={<GenreForm/>} />
        <Route exact path="/directors" element={<DirectorList/>} />
        <Route exact path="/directors/new" element={<DirectorForm/>} />
        <Route exact path="/directors/:id" element={<DirectorForm/>} />
        <Route exact path="/actors" element={<ActorList/>} />
        <Route exact path="/actors/new" element={<ActorForm/>} />
        <Route exact path="/actors/:id" element={<ActorForm/>} />
        <Route exact path="/ratings" element={<RatingList/>} />
        <Route exact path="/ratings/new" element={<RatingForm/>} />
        <Route exact path="/ratings/:id" element={<RatingForm/>} />
      </Routes>
    </Router>
  )
}

export default App;
