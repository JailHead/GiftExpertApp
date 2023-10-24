import { getGifs } from "../helpers/getGifs"
import { useState } from "react";
import { useEffect } from "react";

export const GiftGrid = ({category}) => {
  useEffect(() => {
    getGifs(category);    
  }, [])

  return(
    <>
      <h3>{category}</h3>      
    </>
  )
}