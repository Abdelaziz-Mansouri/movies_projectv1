import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/genres">Genres</Link></li>
        <li><Link to="/directors">Directors</Link></li>
        <li><Link to="/actors">Actors</Link></li>
        <li><Link to="/ratings">Ratings</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;