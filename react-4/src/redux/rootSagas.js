/* Effects */
import {call, cancel, fork, put, take} from "redux-saga/effects";
import md5 from 'md5'
import marvelApi from '../config/config.js'
import CharacterService from '../services/characters'
import types from './characters/types'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function* watchSearch() {
  let task

  while (true) {
    const {name} = yield take("SET_NAME_CHARACTER")
    if (task) {
      yield cancel(task)
    }
    task = yield fork(charactersAsync, name)
  }
}


function * charactersAsync(name) {
  yield call(delay, 1000)
  const timeStamp = (new Date()).getTime()
  const payload = {
    publicKey : marvelApi.publicKey, 
    timeStamp : timeStamp, 
    hash: md5(timeStamp+marvelApi.privateKey+marvelApi.publicKey), 
    limit: 10, 
    name : name
  } 
  const characters = yield call(CharacterService.getCharacters, payload)
  yield put({type: types.SEARCH_CHARACTERS, characters: characters});
}

export default function* rootSagas() {
  // here we initialize all the sagas from different files
  yield[
    fork(watchSearch)
  ]
  // yield all([...charactersSagas]);
}
