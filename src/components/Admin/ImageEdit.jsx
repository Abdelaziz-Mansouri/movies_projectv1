import React from 'react'
import { useState , useEffect  } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import axios from '../../api/axios'


const ImageEdit = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [imageEdit , setImageEdit] = useState({

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

    const handleFileChange2 = (e) => {

        setImageEdit({ ...imageEdit, images: e.target.file });

    };

    let cpt =imageEdit.length;
    const inputElements = [];
    
    let img_1=[] ;

    
    for (let i=0 ; i < cpt ; i++){
        imageEdit.map(img => {
            img_1.push({
                name : img.name,
                id : img.id,
                movieId : img.movieId
            });
        })
        inputElements.push(
            <div key={img_1[i].id}>
                <img src={urlImage+img_1[i].name} alt={`${img_1[i].id}`}/>
                <input
                type="file"
                id={i}
                accept="image/*"
                onChange={handleFileChange2}
                />
            </div>)
    }
    console.log(inputElements);
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