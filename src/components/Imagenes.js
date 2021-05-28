import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {StyledDiv} from "./Imagenes.styles.js";

const Imagenes = () =>
{
  const [listPhotos, setPhotos] = useState({ photos: [] });
 
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("https://jsonplaceholder.typicode.com/photos");
      setPhotos({ photos: data });
    };
    fetchData();
  }, [setPhotos]);

 const handleDelete = (id) =>{

       setPhotos({ photos: listPhotos.photos.filter(t => t.id !== id)});
   }

  return (
    <div className="container">
      <div className="d-flex flex-row flex-fill flex-wrap justify-content-center"> 
        {listPhotos.photos &&
          listPhotos.photos.map(item => (
              <StyledDiv key={item.id}>
              <button onClick={() => handleDelete(item.id)}><img src={item.url} className="m-3" alt={item.title}></img></button>
              </StyledDiv>
          ))}
      </div>
    </div>
  );
          }
export default Imagenes