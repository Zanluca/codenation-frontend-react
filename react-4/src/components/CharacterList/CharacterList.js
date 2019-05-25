import React from 'react';
import { connect } from 'react-redux';
import CharacterListItem from '../CharacterListItem/CharacterListItem';
import {Row} from './style';
import CharacterService from '../../services/characters'

const CharacterList = props => {
  const { characters } = props
  const locaHeros = CharacterService.getCharactersLocal()
  return (
    <Row>
      {characters.map(
        character =>
          <CharacterListItem
            key={character.id}
            name={locaHeros[character.id] || character.name}
            id = {character.id}
            thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
            description={character.description}
            idCharacter = {character.id}/>
      )}
    </Row>
  )
};


function mapStateToProps(state) {
  return {
    characters : state.Characters
  };
}

export default connect(mapStateToProps)(CharacterList);
