import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from '../../api/axios';
import styles from '../../style';
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




    try {
      if (!id) {
        const formData = new FormData();
        formData.append("id", myData.id);
        formData.append("title", myData.title);
        formData.append("releaseDate", myData.releaseDate);
        formData.append("genreId", myData.genreId);
        formData.append("directorId", myData.directorId);
        formData.append("ratingId", myData.ratingId);

        Array.from(myData.images[0]).forEach((image) => {
          formData.append('images', image);
        })
        for (let entry of formData.entries()) {
          console.log(entry);
        }
        await axios.post('/Movies/PostMovie', formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((response) => { console.log(response) });

        // handle success
      } else {
        const response = await axios.put(`/Movies/UpdateMovie/${id}`,
          {
            id: id,
            title: myData.title,
            releaseDate: myData.releaseDate,
            directorId: myData.directorId,
            genreId: myData.genreId,
            ratingId: myData.ratingId
          })
          .then(res => {
          }).catch(resErr => console.log(resErr))
      }
      navigate('/admin/movies')

    } catch (error) {
      console.log(error)
      // handle error
    }

  }


  return (
    <form onSubmit={handleSubmit}>
      <h1 className='font-bold text-[33px] mt-[38px] mb-[60px] leading-[40px] relative -left-[20px]'>Add Movie</h1>
      <h2 className='font-bold text-[25px] mb-[10px]'>Movies title and description</h2>
      <div className="flex flex-wrap gap-[18px] w-[80%] justify-center">
        <input
          type="text"
          id="title"
          autoComplete="off"
          onChange={handlechangeTitle}
          value={myData.title}
          required
          className={styles.input + ' w-full'}
          placeholder='Title'
        />


        <div className="flex w-full gap-[18px]">
          <select value={myData.directorId} onChange={handleSelectChangeDirector}
            className={styles.input + ' w-full'}
          >
            <option>--select director--</option>
            {selectedOptionDirector.map(option => (
              <option key={option.id} value={option.id}>
                {`${option.firstName} ${option.lastName}`}
              </option>
            ))}
          </select>

          <select value={myData.genreId} onChange={handleSelectChangeGenre}
            className={styles.input + ' w-full'}
          >
            <option>--select genre--</option>
            {selectedOptionGenre.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex w-full gap-[18px]">
          <input
          type="datetime-local"
          id="releaseDate"
          onChange={handleChangeDate}
          value={myData.releaseDate}
          required
          className={styles.input + ' w-full'}
        />

        <select value={myData.ratingId} onChange={handleSelectChangeRating}
          className={styles.input + ' w-full'}
        >
          <option>--select rating--</option>
          {selectedOptionRating.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        </div>

        {
        !id ?
          (<>

            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={handleFileChange2}
              className={styles.input + ' w-full'}
            />
          </>)
          : null
      }
      <div className="w-full flex justify-center gap-[18px]">

      <button disabled={false} className={styles.btnPrimary + ' w-[20%]'}>{id ? "Update" : "Add"}</button>
      <Link to='/admin/movies' className={styles.btnSecondary + ' w-[20%]'}>Ignore</Link>

      </div>
        
      </div>
      

    </form>
  )
}


export default MovieForm