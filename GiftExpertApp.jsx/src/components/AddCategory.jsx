import React, {useState} from "react";

export const AddCategory = ({onNewCategory}) => {
    // Establecer valor inicial
    const[inputValue, setInputValue] = useState("")
    // Funcion para permitir la edicion del input
    const onInputChange = ({target}) => {
        //console.log(target.value);
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(onNewCategory);
        if (inputValue.trim().length <= 1) return;
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}