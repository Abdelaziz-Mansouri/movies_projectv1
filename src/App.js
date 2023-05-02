import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Admin/Navigation';
import MovieList from './components/Admin/MovieList';
import MovieForm from './components/Admin/MovieForm';
import GenreList from './components/Admin/GenreList';
import GenreForm from './components/Admin/GenreForm';
import DirectorList from './components/Admin/DirectorList';
import DirectorForm from './components/Admin/DirectorForm';
import ActorList from './components/Admin/ActorList';
import ActorForm from './components/Admin/ActorForm';
import RatingList from './components/Admin/RatingList';
import RatingForm from './components/Admin/RatingForm';
import CastList from './components/Admin/CastList';
import CastForm from './components/Admin/CastForm';

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
        <Route exact path="/casts" element={<CastList/>} />
        <Route exact path="/casts/new" element={<CastForm/>} />
        <Route exact path="/casts/:id" element={<CastForm/>} />
      </Routes>
    </Router>
  )
}

export default App;
