import { getGifs } from "../helpers/getGifs"
import { useState } from "react";
import { useEffect } from "react";
import { useFetchGift } from "../hooks/useFetchGift";
import { GiftItem } from "./GiftItem";

export const GiftGrid = ({category}) => {

  const{images, isLoading} = useFetchGift(category);
  
  return(
    <>
      <h1>{category}</h1>
      {
        isLoading && (<h4>Cargando...</h4>)
      }
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