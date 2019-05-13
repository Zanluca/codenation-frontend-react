import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const markText = (text, searchString) => {
  if (text) {
    let strArr = text.split(new RegExp(`(${searchString.toLowerCase()})`, "ig"));
    return strArr.map((ea, i) => {
      if (ea.toLowerCase() === searchString.toLowerCase()) {
        return <mark key={`match${i}`}>{ea}</mark>
      } else {
        return ea;
      }
    });
  }
else
  return text
}

const RecipeItem = ({ 
  recipe = {},
  onClick = () => {},
  searchString = ''
}) => (
  <div className="RecipeItem col-sm-3 mt-3 mb-3">
    <div className="card" onClick = {() => onClick(recipe)}>
      <Link to={`/recipe`}>
        <img className="card-img-top img-fluid" src={recipe.thumbnail || 'https://via.placeholder.com/350x260'} alt={recipe.title} />
        <div className="card-body">
          <h5 className="card-title">{markText(recipe.title, searchString)}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {markText(recipe.ingredients, searchString)}
          </p>
        </div>
      </Link>
    </div>
  </div>
)

RecipeItem.propTypes = {
  title: PropTypes.string,
  ingredients: PropTypes.string,
  thumbnail: PropTypes.string,
  searchString: PropTypes.string
}

export default RecipeItem;