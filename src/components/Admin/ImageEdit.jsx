import React from 'react'
import { useState , useEffect  } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import axios from '../../api/axios'
import styles from '../../style'

const ImageEdit = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [imageEdit , setImageEdit] = useState({});

    const [imageEdited , setImageEdited]= useState({
        Id: '',
        MovieId : '',
        Image : []
    });

    const urlImage = 'https://192.168.1.17:5020/Resources/';
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
    })

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
            <div key={img_1[i].id} id={img_1[i].id} className='' >
                <div className='w-[100%] h-[520px] rounded-[20px] bg-cover relative' style={{ backgroundImage: `url(${urlImage+img_1[i].name})`}}></div>
                <div className='py-[10px]'>
                    <input
                    className={styles.input + ' w-full'}
                    type="file"
                    id={i}
                    accept="image/*"
                    onChange={handleFileChange}
                    />
                </div>
                <div className='py-[10px]'>
                    <button className={styles.btnPrimary + ' w-full'} onClick={(e) => {e.preventDefault(); handleSubmit( img_1[i].id, img_1[i].movieId ) }}>Update</button>
                </div>
                
            </div>
        )
    }

    return (
        <div className='w-full'>
            <h1 className='font-bold text-[33px] mt-[38px] mb-[60px] leading-[40px] relative -left-[20px]'>Images</h1>
            <div  className='flex justify-center gap-[10px]'>
                {inputElements}
            </div>
        </div>
    )
}

export default ImageEdit