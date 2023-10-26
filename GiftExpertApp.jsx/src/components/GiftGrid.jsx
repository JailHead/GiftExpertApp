import { getGifs } from "../helpers/getGifs"
import { useState } from "react";
import { useEffect } from "react";
import { GiftItem } from "./GiftItem";

export const GiftGrid = ({category}) => {
  const[images, setImages] = useState([]);
  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();    
  }, [])

  return(
    <>
      <h1>{category}</h1>
      <div className="card-grid">
        {
          images.map((image) => (
            <GiftItem 
              key={image.id}
              {...image}
            />
          ))
        }  
      </div>      
    </>
  )
}