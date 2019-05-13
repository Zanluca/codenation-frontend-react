import React from 'react'
import { Link } from 'react-router-dom'

const RecipeItem = (props) => (
    <div className="col-sm-3 mt-4">
        <Link to={`/recipe/${props.path}`}>
            <div className="card"
            //onClick = {() => props.onClickRecipe(props.recipe)}
            >
                <img className="card-img-top img-fluid" src={props.thumbnail} alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        <strong>Ingredients: </strong>{props.ingredients}
                    </p>
                </div>
            </div>
        </Link>
    </div>
)

export default RecipeItem;