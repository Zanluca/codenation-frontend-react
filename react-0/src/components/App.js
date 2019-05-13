import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchString : event.target.value});
  }

  filtreRecipes() {
    if (this.state.searchString)
      return this.recipes.filter((e) => {return (e.ingredients.toLowerCase().includes(this.state.searchString.toLowerCase()) || e.title.toLowerCase().includes(this.state.searchString.toLowerCase()))});
    else
      return this.recipes;
  }

  markText(string) {
    let strArr = string.split(new RegExp(`(${this.state.searchString.toLowerCase()})`, "ig"));
    return strArr.map((ea, i) => {
      if(ea.toLowerCase() === this.state.searchString.toLowerCase()){
        return <mark key={`match${i}`}>{ea}</mark>
      } else {
        return ea;
      }
    });
}

  render() {
    // Criar o método para enderizar aqui
    const recipes = this.filtreRecipes(); 
    return (
      <div className="App">
        <Navbar onChange = {this.handleChange} />
        <div className="container mt-10">          
            {recipes.length > 0 && (
              <div className="row">
                {recipes.map((recipe, id) => {
                  return <RecipeItem 
                          thumbnail={recipe.thumbnail} 
                          title = {this.markText(recipe.title)}
                          ingredients = {this.markText(recipe.ingredients)}
                          key={id} />;
                })}
               </div>
              )}

              {recipes.length === 0 && (
                <div className="row">
                  No Results to show
                </div>
              )}           
        </div>
      </div>
    );
  }
}

export default App;
