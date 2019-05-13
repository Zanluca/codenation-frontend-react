import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedRecipe : {}
    }
  }

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('http://localhost:3030/api?i=onions,garlic&q=omelet&p=3');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  selectRecipe = selectedRecipe => {
    this.setState({selectedRecipe})
  }

  render() {
    const HomeRoute = ({ match }) => (
      <Home searchString = {match.params.searchString} onClickRecipe={this.selectRecipe} />
    )

    const RecipePageRoute = () => <RecipePage recipe = {this.state.selectedRecipe} onClickRecipe={this.selectRecipe} />

    return (
      <div className="App">
        <Route exact path="/search/:searchString?" children={({ match }) => (
          <Navbar
            searchString={match ? match.params.searchString || '' : ''}
          />
        )}/>
    
        <div className="container mt-10">
          <Switch>
            <Route exact path="/recipe" component={RecipePageRoute}/>
            <Route path="/search/:searchString?" component={HomeRoute}/>
            <Redirect to="/search" />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
