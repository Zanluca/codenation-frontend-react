import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import { slugify } from '../helpers'
import recipes from '../sample_data/recipes.json'
import { withRouter } from "react-router"

class App extends Component {
  render() {
    const {match, location, history} = this.props;
    return (
      <div className="App">
          <Navbar
            searchString= {location.pathname.substr(1,)}
          />
        )}/>
    
        <div className="container mt-10">
          <Route exact path="/" render={props => <Home recipes = {recipes.results} {...props}/> }/>
          <Route exact path="/recipe/:title" render={({match:{params:{title}}}) => <RecipePage recipe={recipes.results.filter((recipe) => {return (slugify(recipe.title).toLowerCase().includes(title.toLowerCase()))})[0]} />}/>
          <Route exact path="/:searchString" render={props => <Home recipes = {recipes.results} searchString = {location.pathname.substr(1,)} {...props}/> }/>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
