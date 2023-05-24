import React, { useEffect, useState } from 'react'
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
  // const routes = useRoutes([
  //   { path: '/admin', element: <MovieList />},
  //   { path: '/admin/movies', element: <MovieList />},
  //   { path: '/admin/movies/new', element: <MovieForm />},
  //   { path: '/admin/movies/:id', element: <MovieForm />},
  //   { path: '/admin/updateImage/:id', element: <ImageEdit />},
  //   { path: '/admin/genres', element: <GenreList />},
  //   { path: '/admin/genres/new', element: <GenreForm />},
  //   { path: '/admin/genres/:id', element: <MovieForm />},
  //   { path: '/admin/directors', element: <DirectorList />},
  //   { path: '/admin/directors/new', element: <DirectorForm />},
  //   { path: '/admin/directors/:id', element: <DirectorForm />},
  //   { path: '/admin/actors', element: <ActorList />},
  //   { path: '/admin/actors/new', element: <ActorForm />},
  //   { path: '/admin/actors/:id', element: <ActorForm />},
  //   { path: '/admin/ratings', element: <RatingList />},
  //   { path: '/admin/ratings/new', element: <RatingForm />},
  //   { path: '/admin/ratings/:id', element: <RatingForm />},
  //   { path: '/admin/casts', element: <CastList />},
  //   { path: '/admin/casts/new', element: <CastForm />},
  //   { path: '/admin/casts/:id', element: <CastForm />},
  //   { path: '/admin/users', element: <ListUsers />},
  //   { path: '/admin/admins', element: <AdminList />},
  // ])

  const [a, setA] = useState(null)

  useEffect(() => {
    if(window.location.pathname.slice(1,6) == 'admin'){
      setA(true)
    }else{
      setA(false)
    }
    
  },[window.location.pathname])
  return (
    <>
      {
        true ? (
          <div className="flex">
        {a == true ? <Navigation /> : null}
        <div className="relative left-[400px] max-w-[calc(100vw-400px)]">
          <Routes>
            {/* Admin */}
            <Route exact path="/admin/" element={<MovieList />} />
            <Route exact path="/admin/movies" element={<MovieList />} />
            <Route exact path="/admin/movies/new" element={<MovieForm />} />
            <Route exact path="/admin/movies/:id" element={<MovieForm />} />
            <Route exact path="/admin/updateImage/:id" element={<ImageEdit />} />
            <Route exact path="/admin/genres" element={<GenreList />} />
            <Route exact path="/admin/genres/new" element={<GenreForm />} />
            <Route exact path="/admin/genres/:id" element={<GenreForm />} />
            <Route exact path="/admin/directors" element={<DirectorList />} />
            <Route exact path="/admin/directors/new" element={<DirectorForm />} />
            <Route exact path="/admin/directors/:id" element={<DirectorForm />} />
            <Route exact path="/admin/actors" element={<ActorList />} />
            <Route exact path="/admin/actors/new" element={<ActorForm />} />
            <Route exact path="/admin/actors/:id" element={<ActorForm />} />
            <Route exact path="/admin/ratings" element={<RatingList />} />
            <Route exact path="/admin/ratings/new" element={<RatingForm />} />
            <Route exact path="/admin/ratings/:idFromList" element={<RatingForm />} />
            <Route exact path="/admin/casts" element={<CastList />} />
            <Route exact path="/admin/casts/new" element={<CastForm />} />
            <Route exact path="/admin/casts/:id" element={<CastForm />} />
            <Route exact path="/admin/users" element={<ListUsers />} />
            <Route exact path="/admin/admins" element={<AdminList />} />
            {/* Client */}
          </Routes>
        </div>
        
      </div>
        ) : 'hello'
      }
      
    </>
  )
}

export default Nav