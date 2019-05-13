import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from "react-router"

const RecipePage = ({
    recipe
}) => {
    if (!recipe) {
        return (<h5>Recipe not found</h5>)
    }

    return (
    <div>        
        <img className="card-img-top img-fluid" src={recipe.thumbnail} alt="https://via.placeholder.com/350x300" />
        <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">
                <strong>Ingredients: </strong> {recipe.ingredients}
            </p>
        </div>
    </div>
)}

RecipePage.propTypes = {
    recipe: PropTypes.object
}

export default withRouter(RecipePage)
