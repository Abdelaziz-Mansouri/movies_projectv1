import React from 'react'
import { useState , useEffect  } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import axios from '../../api/axios'



const ImageEdit = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [imageEdit , setImageEdit] = useState({

    });

    var cpt ;
    useEffect(() => {
        if (id) {
        const fetchData = async () => {
            axios.get(`/Images/GetAllImagesByteByMovie/${id}`)
            .then((response) => {
                setImageEdit(response.data)
                cpt = response.data.length ;
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
    console.log(cpt);
    const inputElements = [];
    for (let i=0 ; i < cpt ; i++){
        inputElements.push(
            <div key={i}>
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