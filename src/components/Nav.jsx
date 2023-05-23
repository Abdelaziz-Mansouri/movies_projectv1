import React from 'react'
import {Route, Routes , useRoutes} from 'react-router-dom';

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
import Login from './Client/Login_Register/Login';
import Register from './Client/Login_Register/Register';
import ListUsers from './Admin/ListUsers';
import AdminList from './Admin/AdminList';

const Nav = () => {
  const routes = useRoutes([
    { path: '/', element: <MovieList />},
    { path: '/movies', element: <MovieList />},
    { path: '/movies/new', element: <MovieForm />},
    { path: '/movies/:id', element: <MovieForm />},
    { path: '/updateImage/:id', element: <ImageEdit />},
    { path: '/genres', element: <GenreList />},
    { path: '/genres/new', element: <GenreForm />},
    { path: '/genres/:id', element: <MovieForm />},
    { path: '/directors', element: <DirectorList />},
    { path: '/directors/new', element: <DirectorForm />},
    { path: '/directors/:id', element: <DirectorForm />},
    { path: '/actors', element: <ActorList />},
    { path: '/actors/new', element: <ActorForm />},
    { path: '/actors/:id', element: <ActorForm />},
    { path: '/ratings', element: <RatingList />},
    { path: '/ratings/new', element: <RatingForm />},
    { path: '/ratings/:id', element: <RatingForm />},
    { path: '/casts', element: <CastList />},
    { path: '/casts/new', element: <CastForm />},
    { path: '/casts/:id', element: <CastForm />},
    { path: '/users', element: <ListUsers />},
    { path: '/admins', element: <AdminList />},
  ])
  return (
    <>
      {
        true ? (
          <div className="flex">
        <Navigation />
        <div className="relative left-[400px] max-w-[calc(100vw-400px)]">
          {/* <Routes> */}
            {/* Admin */}
            {/* <Route exact path="/" element={<MovieList />} />
            <Route exact path="/movies" element={<MovieList />} />
            <Route exact path="/movies/new" element={<MovieForm />} />
            <Route exact path="/movies/:id" element={<MovieForm />} />
            <Route exact path="/updateImage/:id" element={<ImageEdit />} />
            <Route exact path="/genres" element={<GenreList />} />
            <Route exact path="/genres/new" element={<GenreForm />} />
            <Route exact path="/genres/:id" element={<GenreForm />} />
            <Route exact path="/directors" element={<DirectorList />} />
            <Route exact path="/directors/new" element={<DirectorForm />} />
            <Route exact path="/directors/:id" element={<DirectorForm />} />
            <Route exact path="/actors" element={<ActorList />} />
            <Route exact path="/actors/new" element={<ActorForm />} />
            <Route exact path="/actors/:id" element={<ActorForm />} />
            <Route exact path="/ratings" element={<RatingList />} />
            <Route exact path="/ratings/new" element={<RatingForm />} />
            <Route exact path="/ratings/:idFromList" element={<RatingForm />} />
            <Route exact path="/casts" element={<CastList />} />
            <Route exact path="/casts/new" element={<CastForm />} />
            <Route exact path="/casts/:id" element={<CastForm />} />
            <Route exact path="/users" element={<ListUsers />} />
            <Route exact path="/admins" element={<AdminList />} /> */}
            {/* Client */}
          {/* </Routes> */}
          {routes}
        </div>
        
      </div>
        ) : 'hello'
      }
      
    </>
  )
}

export default Nav