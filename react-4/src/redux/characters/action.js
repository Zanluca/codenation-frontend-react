import types from './types'

export const searchCharacters = characters => {
    return {
        type : types.SEARCH_CHARACTERS, characters
    }
}

export const setSelectedCharacter = id => {
    return {
        type : types.SET_SELECTED_CHARACTER, id
    }

}

export const setSearchName = name => {
    return {
        type : types.SET_NAME_CHARACTER, name
    }
}
