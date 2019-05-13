const localStorageWrapper = {
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  get: (key) => {
    const value = localStorage.getItem(key)

    return value ? JSON.parse(value) : value
  }
}

const filtreRecipes = (recipes, searchString) => {
  if (searchString){
    return recipes.filter((recipe) => {return (recipe.ingredients.toLowerCase().includes(searchString.toLowerCase()) || recipe.title.toLowerCase().includes(searchString.toLowerCase()))});
  }
  else {
    return recipes;
  }
}

const slugify = (str) => str
  .toString()
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/--+/g, '-')
  .trim()

export {
    slugify,
    localStorageWrapper,
    filtreRecipes
}