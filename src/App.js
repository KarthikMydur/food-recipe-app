import React,{useEffect, useState} from 'react'
import Recipe from './Recipe'
import axios from 'axios'
import "../src/css/App.css"

const App = () => {
    const APP_ID = "97b75622"
    const APP_KEY = "067654c5a18d2e2160ee8e011c776671"
    

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState()
    const [query, setQuery] = useState('')

    useEffect(()=>{
        getRecipes()
    },[query])


    const getRecipes = () => {
        axios.get(`http://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then(response=>{
                const data = response.data
                
                setRecipes(data.hits)
            })
    }
    const handleSearch = e => {
        setSearch(e.target.value)
        //console.log(search)

    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }
    return(
        <div className='App'>
            <form className='search-form' onSubmit={getSearch}>
                <input className='search-bar' type='text' value = {search} onChange={handleSearch}/>
                <button className='search-button' type='submit'>Search</button>
            </form>
            <div className='recipes'>
            {
                 recipes.map(recipe => (
                    
                    <Recipe
                         key = {recipe.recipe.label}
                         title={recipe.recipe.label} 

                         calories = {recipe.recipe.calories}
                         image={recipe.recipe.image} 
                         ingredients={recipe.recipe.ingredients} />
                ))
            }
            </div>
        </div>
    )
}
export default App