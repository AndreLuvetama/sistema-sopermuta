import React, { useState } from 'react'
import '../../assets/css/uploadStyle.css'
import { HiArchiveBoxXMark } from 'react-icons/hi2'

export const UploadImage = () => {
    const[imgSelected, setImgSelected] = useState([])

    const onSelectImg = (event) =>{
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
    });

    setImgSelected((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";

    }

    function delecteHandler(image){
        setImgSelected(imgSelected.filter((e)=> e !== image));
        URL.revokeObjectURL(image);
    }

  return (
    <section id='uploudImageId'>
        <label className='labelUpload'>
            <span className='text-center'>+ add até 10 imagens</span>
            <input className='inputUpload' type='file' onChange={onSelectImg} name='images' multiple accept='image/png, image/jpeg, image/webp'/>
        </label>
        <input type='file' multiple className='inputUpload' />
  
        {imgSelected.length > 0 && (
                imgSelected.length > 10 ? (
                    <p className='error' >
                        Não é permitido mais de 10 imagens <br />
                        <span>por favor excluir {imgSelected.length - 10} de {" "}  </span>
                    </p>
                ) : (
                    <button className='upload-btn' onClick={()=>{console.log(imgSelected)}}> 
                        Upload {imgSelected.length} imagem
                        {imgSelected.length === 1 ? "" : "s"}
                    </button>
                ))}

                <div className="images">
                    {imgSelected.length && imgSelected.map((image, index)=> {
                        return (
                            <div key={image} className='image'> 
                                <img src={image} className='imagens' height="200" alt='upload'/>
                                <br />
                                <button onClick={()=> delecteHandler(image)}><HiArchiveBoxXMark /></button><p> {index + 1}</p>
                            </div>
                        );
                    })

                    }
                </div>

    </section>
  )
}
