import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../../api/axios';
import { useParams } from 'react-router';

const MovieForm = () => {
  const navigate = useNavigate();

  const [myData, setmyData] = useState({
    id: 5,
    title: '',
    releaseDate: '',
    directorId: 0,
    genreId: 0,
    ratingId: 0,
    images: []
  });


  const { id } = useParams();

  const [selectedOptionDirector, setselectedOptionDirector] = useState([]);
  const [selectedOptionGenre, setselectedOptionGenre] = useState([]);
  const [selectedOptionRating, setselectedOptionRating] = useState([]);

  // Director Data
  useEffect(() => {
    axios.get('/Directors/GetAllDirectorsWithoutMovies')
      .then((response) => { setselectedOptionDirector(response.data) })
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
      .then((response) => { setselectedOptionRating(response.data) })
      .catch(error => console.error(error));
  }, []);

  const [errMsg, setErrMsg] = useState('')

  const handlechangeTitle = event => {
    setmyData({ ...myData, title: event.target.value });
  };
  const handleChangeDate = event => {
    setmyData({ ...myData, releaseDate: event.target.value });
  };
  const handleSelectChangeDirector = event => {
    setmyData({ ...myData, directorId: event.target.value });
  };
  const handleSelectChangeGenre = event => {
    setmyData({ ...myData, genreId: event.target.value });
  };
  const handleSelectChangeRating = event => {
    setmyData({ ...myData, ratingId: event.target.value });
  };

  let files = [];

  const handleFileChange2 = (e) => {
    files.push(e.target.files);

    setmyData({ ...myData, images: files });

  };

 


  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        axios.get(`/Movies/GetById/${id}`)
          .then((response) => {

            setmyData(response.data)
          })
          .catch((error) => {
            // Handle the error
            console.error(error);
          });
      }
      fetchData();
    }
  }, [id])

  const handleSubmit = async (e) => {



    e.preventDefault();
    const formData = new FormData();
    formData.append("id", myData.id);
    formData.append("title", myData.title);
    formData.append("releaseDate", myData.releaseDate);
    formData.append("genreId", myData.genreId);
    formData.append("directorId", myData.directorId);
    formData.append("ratingId", myData.ratingId);

    console.log(myData.images[0][0])

    Array.from(myData.images[0]).forEach((image) => {

     formData.append('images', image);
      

       
    })

    console.log(myData);
  
  
    // formData.append('images', Array.from(myData.images[0]));

    // console.log(myData.images[0][0])



    
    for (let entry of formData.entries()) {
      console.log(entry);
    }


    console.log(formData.getAll('images'))

    
    try {
      await axios.post('/Movies/PostMovie', formData , {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => { console.log(response) });
      // handle success
    } catch (error) {
      console.log(error)
      // handle error
    }

    // console.log(myData)
    // try{
    //   if(!id){
    //     const response=await axios.post('/Movies/PostMovie', 
    //       {title : myData.title , releaseDate : myData.releaseDate , genreId : myData.genreId , directorId :  myData.directorId , ratingId : myData.ratingId});
    //       setSuccess(true);
    //   }else{
    //     const response = await axios.put(`/Movies/UpdateMovie/${id}`, 
    //     {
    //       title: myData.title,
    //       releaseDate: myData.releaseDate,
    //       directorId: myData.directorId,
    //       genreId: myData.genreId,
    //       ratingId: myData.ratingId
    //     })
    //       .then(response => {
    //         console.log(response.data);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   }

    // }catch(err){
    //     if(!err?.response){
    //         setErrMsg('No Server Response')
    //     }
    //     else {
    //         setErrMsg('Adding Movie Failed');
    //     }
    // }


    // navigate('/movies')
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
        <option>--select--</option>
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
        <option>--select--</option>
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
      <label htmlFor="images">Images:</label>
      <input
        type="file"
        id="images"
        accept="image/*"
        multiple
        onChange={handleFileChange2}
      />
      <button disabled={false}>{id ? "Update" : "Add"}</button>
    </form>
  )
}


export default MovieForm