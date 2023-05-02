import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../../api/axios';
import { useParams } from 'react-router';

const RatingForm = () => {

  const navigate = useNavigate();
  
  const {idFromList} = useParams();

  const [ratingData , setRatingData]=useState({
    id: 0 ,
    name:'',
    description : ''
  });

  const [errMsg , setErrMsg] =useState('')

  const [success , setSuccess] = useState(false);


    // geting id ratings for checking if exist
    const [ratingsExist, setRatingsExist] = useState(true)

    const handleRatingChange = async (event) => {

      const idr = event.target.value;
      
      setRatingData({...ratingData , id :event.target.value});

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

    useEffect(() =>{
      if(idFromList){
        const fetchData= async () =>{
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
    } , [idFromList])

  const handlechangeName = event => {
    setRatingData({...ratingData , name : event.target.value});
  };
  const handleChangeDescription = event => {
    setRatingData({...ratingData , description : event.target.value});
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(ratingData)
    try{
      if(!idFromList){
        const response=await axios.post('/Ratings/AddRating', 
          {id : ratingData.id ,name : ratingData.name , description : ratingData.description });
          setSuccess(true);
      }else{
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
        
    }catch(err){
        if(!err?.response){
            setErrMsg('No Server Response')
        }
        else {
            setErrMsg('Adding Rating Failed');
        }
    }


    navigate('/Ratings')
  }




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Id:
        </label>
        <input
            type="number"
            id="id"
            autoComplete="off"
            value={ratingData.id}
            onChange={handleRatingChange}
            required
        />
        {ratingsExist ? <p>{errMsg}</p> : <p style={{color : 'green' }}>{errMsg}</p>}
        <label htmlFor="name">
            Name:
        </label>
        <input
            type="text"
            id="name"
            autoComplete="off"
            onChange={handlechangeName}
            value={ratingData.name}
            required
        />

        <label htmlFor="description">
            Description:
        </label>
        <input
            type="text"
            id="description"
            onChange={handleChangeDescription}
            value={ratingData.description}
            required
        />
        
        <button disabled={false}>{ idFromList ? "Update" : "Add"}</button>
    </form>
    </div>
  )
}

export default RatingForm