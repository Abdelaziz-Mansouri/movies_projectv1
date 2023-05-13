import React from 'react'
import { useState , useEffect  } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import axios from '../../api/axios'


const ImageEdit = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [imageEdit , setImageEdit] = useState({});

    const [imageEdited , setImageEdited]= useState({
        Id: '',
        MovieId : '',
        Image : []
    });

    const urlImage = 'https://192.168.1.11:5020/Resources/';
    useEffect(() => {
        if (id) {
        const fetchData = async () => {
            axios.get(`/Images/GetAllImagesByMovie/${id}`)
            .then((response) => {
                setImageEdit(response.data)
            })
            .catch((error) => {
                // Handle the error
                console.error(error);
            });
        }
        fetchData();
        }
    }, [id])

    let files=[];
    const handleFileChange = (e) => {
        files.push(e.target.files);
        setImageEdited({ ...imageEdited, Image: files });
        console.log(imageEdited.Image);
    };

    let cpt =imageEdit.length;
    const inputElements = [];
    
    let img_1=[] ;

    const handleSubmit=async (idImg , idMovie)=>{

        const formData = new FormData();
        formData.append("Id", idImg);
        formData.append("MovieId", idMovie);

        Array.from(imageEdited.Image[0]).forEach((image) => {
            formData.append('Image', image);
        })
        for (let entry of formData.entries()) {
            console.log(entry);
        }

        await axios.put(`/Images/UpdateMovieImage/${idImg}`, formData , {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((response) => { console.log(response) });
    }

    for (let i=0 ; i < cpt ; i++){
        imageEdit.map(img => {
            img_1.push({
                name : img.name,
                id : img.id,
                movieId : img.movieId
            });
        })
        inputElements.push(
            <div key={img_1[i].id} id={img_1[i].id}>
                <img src={urlImage+img_1[i].name} alt={`${img_1[i].id}`}/>
                <input
                type="file"
                id={i}
                accept="image/*"
                onChange={handleFileChange}
                />
                <div>
                    <h1>{img_1[i].id}</h1>
                    <h1>{img_1[i].movieId}</h1>
                </div>
                <button onClick={(e) => {e.preventDefault(); handleSubmit( img_1[i].id, img_1[i].movieId ) }}>Update</button>
            </div>
        )
    }

    return (
        <div>
            <form action="">
                <label htmlFor="images">Images:</label>
                {inputElements}
            </form>
        </div>
    )
}

export default ImageEdit