// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// const MovieForm = ({ movie, directors, genres, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     directorId: '',
//     genreId: '',
//     releaseDate: '',
//     runtime: '',
//     rating: '',
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const history = useHistory();

//   useEffect(() => {
//     if (movie) {
//       setFormData(movie);
//     }
//   }, [movie]);

//   const handleInputChange = e => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validate = () => {
//     const errors = {};
//     if (!formData.title) {
//       errors.title = 'Title is required';
//     }
//     if (!formData.description) {
//       errors.description = 'Description is required';
//     }
//     if (!formData.directorId) {
//       errors.directorId = 'Director is required';
//     }
//     if (!formData.genreId) {
//       errors.genreId = 'Genre is required';
//     }
//     if (!formData.releaseDate) {
//       errors.releaseDate = 'Release date is required';
//     }
//     if (!formData.runtime) {
//       errors.runtime = 'Runtime is required';
//     }
//     if (!formData.rating) {
//       errors.rating = 'Rating is required';
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (validate()) {
//       onSubmit(formData);
//       history.push('/movies');
//     }
//   };

//   return (
//     <div>
//       <h2>{movie ? 'Edit Movie' : 'Add Movie'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title</label>
//           <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />
//           {formErrors.title && <span className="error">{formErrors.title}</span>}
//         </div>
//         <div>
//           <label htmlFor="description">Description</label>
//           <textarea id="description" name="description" value={formData.description} onChange={handleInputChange}></textarea>
//           {formErrors.description && <span className="error">{formErrors.description}</span>}
//         </div>
//         <div>
//           <label htmlFor="directorId">Director</label>
//           <select id="directorId" name="directorId" value={formData.directorId} onChange={handleInputChange}>
//             <option value="">Select Director</option>
//             {directors.map(director => (
//               <option key={director.id} value={director.id}>{director.name}</option>
//             ))}
//           </select>
//           {formErrors.directorId && <span className="error">{formErrors.directorId}</span>}
//         </div>
//         <div>
//           <label htmlFor="genreId">Genre</label>
//           <select id="genreId" name="genreId" value={formData.genreId} onChange={handleInputChange}>
//             <option value="">Select Genre</option>
//             {genres.map(genre => (
//               <option key={genre.id} value={genre.id}>{genre.name}</option>
//             ))}
//           </select>
//           {formErrors.genreId && <span className="error">{formErrors.genreId}</span>}
//         </div>
//         <div>
//           <label htmlFor="releaseDate">Release Date</label>
//           <input type="date" id="
