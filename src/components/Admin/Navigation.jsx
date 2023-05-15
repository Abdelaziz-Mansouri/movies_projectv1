import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const linkat = (e) => {
    if (e.target.tagName == 'A') {
      Array.from(e.target.parentElement.parentElement.children).forEach((item) => {
        item.classList.remove('bg-secondary');
        e.target.parentElement.classList.add('bg-secondary');
      })
    }
  }
  return (
    <div className='w-[337px] bg-[#272424] text-white h-[100vh] py-[70px] fixed'>
      <div className="flex items-center mb-[115px]">
            <div className="rounded-full bg-primary w-[48px] h-[48px] ml-[60px] mr-[8px]"></div>
            <h1 className='text-[22px] leading-[27px]'>Logo</h1>
        </div>
      <ul onClick={linkat} className='22px'>
        <li className='pl-[60px] h-[51px] flex items-center bg-secondary'><Link to="/movies">Movies</Link></li>
        <li className='pl-[60px] h-[51px] flex items-center'><Link to="/genres">Genres</Link></li>
        <li className='pl-[60px] h-[51px] flex items-center'><Link to="/directors">Directors</Link></li>
        <li className='pl-[60px] h-[51px] flex items-center'><Link to="/actors">Actors</Link></li>
        <li className='pl-[60px] h-[51px] flex items-center'><Link to="/ratings">Ratings</Link></li>
        <li className='pl-[60px] h-[51px] flex items-center'><Link to="/casts">Casts</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;