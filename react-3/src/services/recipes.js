import fetch from 'isomorphic-fetch'

const API_PATH = 'http://localhost:3030/api'

const getRecipesByIngredients = async (ingredients, page = 1) => {
    let url = `${API_PATH}?`
    if (ingredients)
        url += `i=${ingredients}`
    if (ingredients) 
        url+= `&p=${page}` 
    else
        url+= `p=${page}`     
    const response = await fetch(`${url}`);
    const body = await response.json();
    if (response.status !== 200)
        return []
    return body.results
}

const getRecipesByName = async (name = '', page = 1) => {
    let url = `${API_PATH}?`
    if (name)
        url += `q=${name}`
    if (name) 
        url+= `&p=${page}` 
    else
        url+= `p=${page}` 
    const response = await fetch(`${url}`);
    const body = await response.json();
    if (response.status !== 200)
        return []
    return body.results
}

export {
    getRecipesByIngredients,
    getRecipesByName
}