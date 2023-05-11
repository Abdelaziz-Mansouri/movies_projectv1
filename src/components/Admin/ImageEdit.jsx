import React from 'react'
import { useState , useEffect  } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import axios from '../../api/axios'



const ImageEdit = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [imageEdit , setImageEdit] = useState({

    });


    useEffect(() => {
        if (id) {
        const fetchData = async () => {
            axios.get(`/Images/GetAllByMovie/${id}`)
            .then((response) => {
                setImageEdit(response.data)
                console.log(response.data);
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
    return (
        <div>
            <form action="">
            {
            !id ? 
            (<>
                <label htmlFor="images">Images:</label>
                <input
                type="file"
                id="images"
                accept="image/*"
                onChange={handleFileChange2}
                />
            </>)
            : null
        }
            </form>
        </div>
    )
}

export default ImageEdit