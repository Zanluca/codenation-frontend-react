import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'
import { getRecipesByName } from '../services/recipes'

class Home extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            recipes : [],
            currentPage : 1
        }
    }

    searchRecipes = (page) => {     
        this._isMounted = true;   
        const {searchString} = this.props
        getRecipesByName(searchString, page)
            .then(res => {
                if (this._isMounted) { 
                    this.setState({ recipes: res }) 
                }
            })
            .catch(res => this.setState({ recipes: [] }))
    }

    componentDidMount = () => {
        const {currentPage} = this.state
        this.searchRecipes(currentPage)
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    nextcurrentPage = () => {
        let {currentPage} = this.state
        currentPage += 1
        this.setState({currentPage}) 
        this.searchRecipes(currentPage)    
    }

    previouscurrentPage = () => {
        let {currentPage} = this.state
        currentPage -= 1
        if (currentPage < 1)
            currentPage = 1
        this.setState({currentPage})
        this.searchRecipes(currentPage)   
    }

    render() {
        const {recipes} = this.state
        const {onClickRecipe, searchString} = this.props

        return (
            <div>
                <div className="row">
                    {recipes && (recipes.map((recipe, id) => {
                        return <RecipeItem 
                                recipe = {recipe}
                                key={id} 
                                onClick = {onClickRecipe}
                                searchString = {searchString}/>
                    }))}
                </div>
                <div className="d-flex justify-content-center">
                    <nav>
                        <ul className="pagination">
                            <li className="currentPage-item">
                                <button id="prev" className="currentPage-link" onClick={this.previouscurrentPage} href="#">Previous</button>
                            </li>
                            <li className="currentPage-item">
                                <button id="next" className="currentPage-link" onClick={this.nextcurrentPage} href="#">Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    searchString: PropTypes.string,
    recipes: PropTypes.array
}

export default Home
