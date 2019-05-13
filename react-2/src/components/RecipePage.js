import React from 'react'
import PropTypes from 'prop-types'
import CommentsBlock from './CommentsBlock'
import { slugify } from '../helpers'

const RecipePage = ({
    recipe
}) => {
    if (!recipe) {
        return (<h5>Recipe not found</h5>)
    }
    
    return (
    <div>
        <img className="img-fluid" src={recipe.thumbnail} alt="" />
        <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">
                <strong>Ingredients: </strong>{recipe.ingredients}
            </p>
        </div>
        <CommentsBlock page={slugify(recipe.title)} />
    </div>
)}

RecipePage.propTypes = {
    recipe: PropTypes.object
}

export default RecipePage
