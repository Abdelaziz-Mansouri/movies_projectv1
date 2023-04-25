import React from 'react'
import {useRef , useState , useEffect} from 'react';
import axios from '../api/axios';

const MovieForm = () => {
  const errRef=useRef();

  const [data , setData]=useState({
    title:'',
    releaseDate : '',
    genreId : '',
    directorId : '',
    ratingId : ''
  });

  const [selectedOptionDirector, setselectedOptionDirector] = useState('');
  const [selectedOptionGenre, setselectedOptionGenre] = useState('');
  const [selectedOptionRating, setselectedOptionRating] = useState('');

  // Director Data
  useEffect(() => {
    axios.get('/Directors/GetAllDirectors') 
      .then(response => setselectedOptionDirector(response.data))
      .catch(error => console.error(error));
  }, []);
  // Genre Data
  useEffect(() => {
    axios.get('/Genres') 
      .then(response => setselectedOptionGenre(response.data))
      .catch(error => console.error(error));
  }, []);

  // Rating data
  useEffect(() => {
    axios.get('/Ratings/GetAllRating') 
      .then(response => setselectedOptionRating(response.data))
      .catch(error => console.error(error));
  }, []);

  const [errMsg , setErrMsg] =useState('')

  const handleSelectChangeDirector = event => {
    selectedOptionDirector(event.target.value);
  };
  const handleSelectChangeGenre = event => {
    setselectedOptionGenre(event.target.value);
  };
  const handleSelectChangeRating = event => {
    setselectedOptionRating(event.target.value);
  };

  const [success , setSuccess] = useState(false);

  // const handleSubmit = async (e) =>{
  //   e.preventDefault();
  //   try{
  //     const response=await axios.post('/Movies/PostMovie', 
  //         {title : data.title , releaseDate : data.releaseDate , genreId : data.genreId ,directorId :  data.directorId , ratngId : data.ratingId})
  //         setSuccess(true);
  // }catch(err){
  //     if(!err?.response){
  //         setErrMsg('No Server Response')
  //     }
  //     else if(err.response?.status === 409){
  //         setErrMsg('Email Taken');
  //     }else {
  //         setErrMsg('Registration Failed');
  //     }
  //     errRef.current.focus();
  // }
// }

  return (
    <form onSubmit={''}>
                    <label htmlFor="title">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        autoComplete="off"
                        onChange={(e) => setData.title(e.target.value)}
                        value={data.title}
                        required
                        aria-describedby="uidnote"
                    />

                    <label htmlFor="releaseDate">
                        Release Date:
                    </label>
                    <input
                        type="text"
                        id="releaseDate"
                        onChange={(e) => setData.releaseDate(e.target.value)}
                        value={data.releaseDate}
                        required
                    />
                    <label htmlFor="director">
                        Director:
                    </label>
                    <select value={selectedOptionDirector} onChange={handleSelectChangeDirector}>
                      <option value="">-- Select an option --</option>
                      {data.map(option => (
                        <option key={option.id} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    
                    <button disabled={false}>Sign Up</button>
                </form>
  )
}

export default MovieForm