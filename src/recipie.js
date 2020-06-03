import React from "react"

const Recipe =({title , calories , image, ingredients}) => {
    return (
         
        <div className="recipieAll">
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>Calories : {calories}</p>
            <h2>Ingredients</h2>
            <ol>
                {ingredients.map( ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>

        </div>
    );
};

export default Recipe;
