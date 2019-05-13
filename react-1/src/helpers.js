import React from 'react'

const slugify = (str) => str
  .toString()
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/--+/g, '-')
  .trim()


const filtreRecipes = (recipes, searchString) => {
  if (searchString){
    return recipes.filter((recipe) => {return (recipe.ingredients.toLowerCase().includes(searchString.toLowerCase()) || recipe.title.toLowerCase().includes(searchString.toLowerCase()))});
  }
  else {
    return recipes;
  }
}

const markText = (text, searchString) => {
  let strArr = text.split(new RegExp(`(${searchString.toLowerCase()})`, "ig"));
  return strArr.map((ea, i) => {
    if(ea.toLowerCase() === searchString.toLowerCase()){
      return <mark key={`match${i}`}>{ea}</mark>
    } else {
      return ea;
    }
  });
}

export {
    slugify,
    filtreRecipes,
    markText
}