import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'
import {filtreRecipes, markText, slugify} from '../helpers'

const Home = ({
    recipes = [],
    searchString = ''
}) => (
    <div className="row">
            {filtreRecipes(recipes, searchString).map((recipe, id) => {
                return <RecipeItem
                    thumbnail={recipe.thumbnail}
                    title={markText(recipe.title, searchString)}
                    ingredients={markText(recipe.ingredients, searchString)}
                    path={slugify(recipe.title)}
                    key={id} />;
            })}
    </div>
)

Home.propTypes = {
    searchString: PropTypes.string,
    recipes: PropTypes.array
}

export default Home
