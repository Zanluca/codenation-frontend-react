import React, { Component } from 'react'
import RecipeItem from './RecipeItem'
import { getRecipesByIngredients } from '../services/recipes'

class RecipePage extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            recipe: {
                thumbnail: '',
                title: '',
                ingredients: ''
            },
            similarRecipes : []
        }
    }

    componentDidMount = () => {
        this._isMounted = true;
        const { recipe } = this.props
        if (recipe)
            if (recipe.ingredients) {
                this.setState({ recipe })
                getRecipesByIngredients(recipe.ingredients.replace(/\s/g, ''))
                    .then(res => {
                        if (this._isMounted) {
                            this.setState({ similarRecipes: res })
                        }
                    }).catch(res => this.setState({ similarRecipes: [] }))
            }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render() {
        const {
            thumbnail,
            title,
            ingredients
        } = this.state.recipe

        const similarRecipes = this.state.similarRecipes.filter((elem, index) => index < 4)
        const {onClickRecipe} = this.props

        return (
            <div>
                <img src={thumbnail} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        <strong>Ingredients: </strong>
                        {ingredients}
                    </p>
                    <h5 className="card-title">Similar recipes</h5>
                    <div className="row">
                    {similarRecipes.map((recipe, id) => {
                       return <RecipeItem 
                                recipe = {recipe}
                                key={id} 
                                onClick = {onClickRecipe}/>
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipePage
