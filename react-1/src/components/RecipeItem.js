import React from 'react'
import { withRouter } from "react-router"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const RecipeItem = (props) => (

    <div className="col-sm-3 mt-4">
        <Link to={`/recipe/${props.path}`}>
            <div className="card">
                <img className="card-img-top img-fluid" src={props.thumbnail} alt="https://via.placeholder.com/350x300" />
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

RecipeItem.propTypes = {
    history : PropTypes.object.isRequired,
}

export default withRouter(RecipeItem);