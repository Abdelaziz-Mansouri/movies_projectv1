import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../api/axios';

const MovieForm = () => {
  const navigate = useNavigate();

  const [myData , setmyData]=useState({
    title:'',
    releaseDate : '',
    directorId : 0,
    genreId : 0,
    ratingId : 0
  });

  const [selectedOptionDirector, setselectedOptionDirector] = useState([]);
  const [selectedOptionGenre, setselectedOptionGenre] = useState([]);
  const [selectedOptionRating, setselectedOptionRating] = useState([]);

  // Director Data
  useEffect(() => {
    axios.get('/Directors/GetAllDirectorsWithoutMovies') 
      .then((response) => {setselectedOptionDirector(response.data)})
      .catch(error => console.error(error));
  }, []);

  // Genre Data
  useEffect(() => {
    axios.get('/Genres') 
      .then((response) => {

        setselectedOptionGenre(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  // // Rating data
  useEffect(() => {
    axios.get('/Ratings/GetAllRating') 
      .then((response) => {setselectedOptionRating(response.data)})
      .catch(error => console.error(error));
  }, []);

  const [errMsg , setErrMsg] =useState('')
  const handlechangeTitle = event => {
    setmyData({...myData , title : event.target.value});
  };
  const handleChangeDate = event => {
    setmyData({...myData , releaseDate : event.target.value});
  };
  const handleSelectChangeDirector = event => {
    setmyData({...myData , directorId : event.target.value});
  };
  const handleSelectChangeGenre = event => {
    setmyData({...myData , genreId : event.target.value});
  };
  const handleSelectChangeRating = event => {
    setmyData({...myData , ratingId : event.target.value});
  };

  // useEffect(() => { console.log(myData) },[myData])

  const [success , setSuccess] = useState(false);

    const handleSubmit = async (e) =>{
      e.preventDefault();
      console.log(myData)
      try{
        const response=await axios.post('/Movies/PostMovie', 

            {title : myData.title , releaseDate : myData.releaseDate , genreId : myData.genreId , directorId :  myData.directorId , ratingId : myData.ratingId});
            setSuccess(true);
            console.log("succes")
    }catch(err){
        if(!err?.response){
            setErrMsg('No Server Response')
        }
        else {
            setErrMsg('Adding Movie Failed');
        }
    }


    navigate('/movies')
  }

  return (
    <form onSubmit={handleSubmit}>
                    <label htmlFor="title">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        autoComplete="off"
                        onChange={handlechangeTitle}
                        value={myData.title}
                        required
                        aria-describedby="uidnote"
                    />

                    <label htmlFor="releaseDate">
                        Release Date:
                    </label>
                    <input
                        type="datetime-local"
                        id="releaseDate"
                        onChange={handleChangeDate}
                        value={myData.releaseDate}
                        required
                    />
                    
                    <label htmlFor="director">
                        Director:
                    </label>
                    <select value={myData.directorId} onChange={handleSelectChangeDirector}>
                      {selectedOptionDirector.map(option => (
                        <option key={option.id} value={option.id}>
                          {`${option.firstName} ${option.lastName}`}
                        </option>
                      ))}
                    </select>

                    <label >
                        Genre:
                    </label>
                    <select value={myData.genreId} onChange={handleSelectChangeGenre}>
                      {selectedOptionGenre.map(option => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                    <label >
                        Rating:
                    </label>
                    <select value={myData.ratingId} onChange={handleSelectChangeRating} >
                      {selectedOptionRating.map(option => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                    <button disabled={false}>Add</button>
                </form>
  )
}

export default MovieForm