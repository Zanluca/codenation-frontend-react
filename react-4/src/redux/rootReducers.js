/* Modules */
import { combineReducers } from "redux";

/* Reducers */
import { reducer as formReducer } from "redux-form";

import {Characters, SelectedCharacter, SetSearchName} from "./characters/reducer";

// all the reducers are in one place
const rootReducers = combineReducers({ formReducer, Characters, SelectedCharacter, SetSearchName });

export default rootReducers;
