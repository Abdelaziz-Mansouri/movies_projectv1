import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import styles from '../../style';
import axios from '../../api/axios';

const RatingForm = () => {

  const navigate = useNavigate();

  const { idFromList } = useParams();

  const [ratingData, setRatingData] = useState({
    id: 0,
    name: '',
    description: ''
  });

  const [errMsg, setErrMsg] = useState('')

  const [success, setSuccess] = useState(false);


  // geting id ratings for checking if exist
  const [ratingsExist, setRatingsExist] = useState(true)

  const handleRatingChange = async (event) => {

    const idr = event.target.value;

    setRatingData({ ...ratingData, id: event.target.value });

    try {
      const response = await axios.get(`/Ratings/GetById/${idr}`);

      setRatingsExist(true); // Rating ID exists
      setErrMsg("this ID is exist , please change it with another ID")
    } catch (error) {
      if (error.response.status === 404) {

        setRatingsExist(false); // Rating ID does not exist
        setErrMsg("verivied")
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (idFromList) {
      const fetchData = async () => {
        axios.get(`/Ratings/GetById/${idFromList}`)
          .then((response) => {

            setRatingData(response.data)
          })
          .catch((error) => {
            // Handle the error
            console.error(error);
          });
      }
      fetchData();
    }
  }, [idFromList])

  const handlechangeName = event => {
    setRatingData({ ...ratingData, name: event.target.value });
  };
  const handleChangeDescription = event => {
    setRatingData({ ...ratingData, description: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(ratingData)
    try {
      if (!idFromList) {
        const response = await axios.post('/Ratings/AddRating',
          { id: ratingData.id, name: ratingData.name, description: ratingData.description });
        setSuccess(true);
      } else {
        const response = await axios.put(`/Ratings/UpdateRating/${idFromList}`,
          {
            name: ratingData.name,
            description: ratingData.description
          })
          .then(response => {
            setSuccess(true)
          })
          .catch(error => {
            console.error(error);
          });
      }

    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      }
      else {
        setErrMsg('Adding Rating Failed');
      }
    }


    navigate('/Ratings')
  }




  return (
    <>
      <h1 className='font-bold text-[33px] mt-[38px] mb-[60px] leading-[40px] relative -left-[20px]'>Add Rating</h1>
      <div>
        <form className="flex flex-wrap gap-[18px] w-[80%] justify-center" onSubmit={handleSubmit}>
          <input
            placeholder='Id'
            className={styles.input + ' w-full'}
            type="number"
            id="id"
            autoComplete="off"
            value={ratingData.id}
            onChange={handleRatingChange}
            required
          />
          {ratingsExist ? <p>{errMsg}</p> : <p style={{ color: 'green' }}>{errMsg}</p>}
          <input
            placeholder='Name'
            className={styles.input + ' w-full'}
            type="text"
            id="name"
            autoComplete="off"
            onChange={handlechangeName}
            value={ratingData.name}
            required
          />
          <input
            placeholder='Description'
            className={styles.input + ' w-full'}
            type="text"
            id="description"
            onChange={handleChangeDescription}
            value={ratingData.description}
            required
          />
          <div className="w-full flex justify-center gap-[18px]">
            <button className={styles.btnPrimary + ' w-[20%]'} disabled={false}>{idFromList ? "Update" : "Add"}</button>
            <Link to='/admin/ratings' className={styles.btnSecondary + ' w-[20%]'}>Ignore</Link>
          </div>
        </form>
      </div>
    </>

  )
}

export default RatingForm