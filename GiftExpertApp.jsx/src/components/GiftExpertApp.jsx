import { useState } from "react"
import { AddCategory } from "./AddCategory"

export const GiftExpertApp = () => {
    
    const[ categories, setCategories] = useState(["One Punch"])
    const onAddCategory = (newCategory) => {        
        // setCategories(["Hola Mundo", ...categories])
        if (categories.includes(newCategory)) {
            return
        }
        setCategories([newCategory, ...categories]);
    }
    console.log(categories);
    return(        
        <>
        {/* Titulo */}
        <h1>GiftExpertApp</h1>
        {/* input */}
        
        <AddCategory //setCategories = { setCategories}
            onNewCategory = {event => onAddCategory(event)}
        />
        {/* listado de gift */}
        <ol>
            {
                categories.map(category => {
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
        </>
    )
}