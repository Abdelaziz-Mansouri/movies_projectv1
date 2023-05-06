import React from 'react'

const MovieGroup = () => {
  var formData = new FormData();     // this is a *new* FormData object.
formData.append('foo', 'bar');
console.log(formData.getAll('foo'));

  return (
    <div>MovieGroup</div>
  )
}

export default MovieGroup