import Api from '../utils/api';

class CharacterService {
  static getCharacters(payload) {
    const { publicKey, timeStamp, hash, limit, name } = payload;
    let uri = '';
    if (name)
      uri = `/v1/public/characters?ts=${timeStamp}&nameStartsWith=${name}&limit=${limit}&apikey=${publicKey}&hash=${hash}` 
    else
      uri = `/v1/public/characters?ts=${timeStamp}&limit=${limit}&apikey=${publicKey}&hash=${hash}`
    return Api.get(
      uri 
    )
    .then(response => response
    )
    .catch(error => {
      console.log(error)
      return error
    });
  }

  static getCharactersLocal() {
    const storage = localStorage.getItem('heros')
      let heros = {}
      if (storage) 
        heros = JSON.parse(storage);
      return heros
  }

  static setCharacterLocal(heros) {
    localStorage.setItem('heros', JSON.stringify(heros));
  }
}

export default CharacterService;

