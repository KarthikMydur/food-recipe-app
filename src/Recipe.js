import React from 'react'
import style from './css/recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p> calories - {calories}</p>
            <img className={style.image} src={image} alt=''/>

        </div>
    )
}
export default Recipe