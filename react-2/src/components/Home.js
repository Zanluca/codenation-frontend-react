import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'
import {filtreRecipes, slugify} from '../helpers'

const Home = ({
    recipes = [],
    searchString = ''
}) => (
    <div className="row">
    {filtreRecipes(recipes, searchString).map((recipe, id) => {
                return <RecipeItem
                    thumbnail={recipe.thumbnail}
                    title={recipe.title}
                    ingredients={recipe.ingredients}
                    key={id}
                    path={slugify(recipe.title)}
                    //recipe = {recipe}
                    //onClickRecipe = {() => onClickRecipe(recipe)} 
                    />;
            })}
    </div>
)

Home.propTypes = {
    searchString: PropTypes.string,
    recipes: PropTypes.array
}

export default Home
