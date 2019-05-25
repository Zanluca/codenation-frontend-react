//reducer
import types from './types'

export const Characters = (state = [], action) => {
    switch (action.type) {
        case types.SEARCH_CHARACTERS:
            if ((action.characters) && (action.characters.status === 200))
                return action.characters.data.data.results
            else
                return []
        default:
           return state;
    }
}

export const SelectedCharacter = (state = 0, action) => {
    switch(action.type) {
        case types.SET_SELECTED_CHARACTER :
            return action.id
        default :
            return state
    }
}

export const SetSearchName = (state = '', action) => {
    switch(action.type) {
        case types.SET_NAME_CHARACTER :
            return action.name
        default :
            return state
    }
}

