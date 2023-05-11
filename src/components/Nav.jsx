import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './Admin/Navigation';
import MovieList from './Admin/MovieList';
import MovieForm from './Admin/MovieForm';
import GenreList from './Admin/GenreList';
import GenreForm from './Admin/GenreForm';
import DirectorList from './Admin/DirectorList';
import DirectorForm from './Admin/DirectorForm';
import ActorList from './Admin/ActorList';
import ActorForm from './Admin/ActorForm';
import RatingList from './Admin/RatingList';
import RatingForm from './Admin/RatingForm';
import CastList from './Admin/CastList';
import CastForm from './Admin/CastForm';

import Home from './Client/Home';
import ImageEdit from './Admin/ImageEdit';

const Nav = () => {
  return (
    <Router>
        <Navigation/>
      <Routes>
        {/* Admin */}
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
        <Route exact path="/ratings/:idFromList" element={<RatingForm/>} />
        <Route exact path="/casts" element={<CastList/>} />
        <Route exact path="/casts/new" element={<CastForm/>} />
        <Route exact path="/casts/:id" element={<CastForm/>} />
        <Route exact path="/imageUpdate/:id" element={<ImageEdit/>} />
        {/* Client */}
        <Route exact path="/home" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default Nav