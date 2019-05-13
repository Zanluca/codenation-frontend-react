import React, { Component } from 'react'
import { Route, Link, withRouter, Redirect  } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import Login from './Login'
import User from './User'
import { slugify } from '../helpers'
import recipes from '../sample_data/recipes.json'
import loginService from '../services/loginService'

const linkRecipePage = (recipe) => {
  //tentar trocar por historico push apenas
  return <Link to={`/recipe/${slugify(recipe.title)}`}></Link>
}

const HomeRoute = ({ match }) => {
  return(
  <Home
    recipes={recipes.results}
    searchString={match.params.search}
    onClickRecipe = {linkRecipePage}
  />
)}

const LoginRoute = () => {
  if (!loginService.isLogged())
    return <Login />
  else
    return <Redirect to='/user/profile' />
}

const LogOut = () => {
  loginService.logout()
}

const ProfileRoute = () => {
  if (loginService.isLogged())
    return <User onLogOut = {LogOut}/>
  else
    return <Redirect to='/user/login' />
}

const RecipePageRoute = ({ match }) => {
  const recipesResults = recipes.results;
  const title = match.params.recipe;
  const recipe = recipesResults.filter(
    recipeItem => slugify(recipeItem.title).toLowerCase().includes(title.toLowerCase())
    )[0];
  return(
  <RecipePage recipe={recipe}/>
)}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          searchString=""
        />
    
        <div className="container mt-10">
          <Route path="/recipe/:recipe" component={RecipePageRoute}/>
          <Route path="/user/login" component={LoginRoute}/>
          <Route path="/user/profile" component={ProfileRoute} />
          <Route path="/:search" component={HomeRoute}/>
          <Route exact path="/" component={HomeRoute}/>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
