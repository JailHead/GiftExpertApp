import { useState } from "react"
import { AddCategory } from "./AddCategory"
import { GiftGrid } from "./GiftGrid";

export const GiftExpertApp = () => {
    
    const[ categories, setCategories] = useState([]);
    const onAddCategory = (newCategory) => {        
        // setCategories(["Hola Mundo", ...categories])
        if (categories.includes(newCategory)) {
            return
        }
        setCategories([newCategory, ...categories]);
    }    
    return(        
        <>
        {/* Titulo */}
        <h1>GiftExpertApp</h1>
        {/* input */}
        
        <AddCategory //setCategories = { setCategories}
            onNewCategory = {event => onAddCategory(event)}
        />
        {/* listado de gift */}
        {
            categories.map((category) => (
                <GiftGrid key={category} category={category}/>
            )
            )
        }        
        </>
    )
}