/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../../components/Nav/Nav";
import {ImgCharacter, ButtomEdit, Row, Column} from './style'
import CharacterService from '../../services/characters'

const initialHero = {
  id : 0,
  name : '',
  description : '',
  thumbnail : '',
  series : []
}

class DetailsPage extends Component {
  state = {
    isEdit : false,
    descriptionButtom : 'Editar',
    nameCharacter : '',
    hero : initialHero
  };

  componentDidMount() {
    const locaHeros = CharacterService.getCharactersLocal()
    const {hero} = this.props
    const name = locaHeros[hero.id]
    let heroState = hero
    if (name)
      heroState = {...hero, name : name}
    this.setState({hero : heroState, nameCharacter: heroState.name})
  }

  componentWillUnmount() {
    //use localStorage newName for characters
  }

  buttomClick() {
    const {isEdit, nameCharacter, hero} = this.state;
    if (isEdit) {
      const heros = CharacterService.getCharactersLocal()
            
      heros[hero.id] = nameCharacter;

      CharacterService.setCharacterLocal(heros);

      const newHero = {...hero, name : nameCharacter}

      this.setState({
        isEdit : false,
        descriptionButtom : 'Editar',
        hero : newHero
      })
    } else {
      this.setState({
        isEdit : true,
        descriptionButtom : 'Salvar'
      })
    }
  }

  render() {
    const {isEdit, descriptionButtom, hero, nameCharacter} = this.state;
    return (
      <div>
        <Nav />
        <Row>
          <Column IsEdit = {isEdit}>
            <input type='text' onChange={(e) => this.setState({nameCharacter : e.target.value})} value={nameCharacter} ></input>
            <h1>{hero.name}</h1>
          </Column>
          <Column>
            <ButtomEdit onClick={() => this.buttomClick()}>{descriptionButtom}</ButtomEdit>
          </Column>
        </Row>
        <ImgCharacter src={hero.thumbnail} alt={hero.name}></ImgCharacter>
        <p> {hero.description}</p>
        <h4>Series</h4>
        <ul>{hero.series.map((serie, index) => <li key={index}>{serie.name}</li>)}</ul>
      </div>
    );
  }
}

const getHero = (id, heros) => {
  const hero = heros.find((hero) => (hero.id == id))  
  if (hero) {
    return {
      id : hero.id || 0,
      name: hero.name || '',
      description: hero.description || '',
      thumbnail: (hero.thumbnail.path + '.' + hero.thumbnail.extension) || '',
      series: hero.series.items || []
    }
  } else
    return initialHero
}


const mapStateToProps = (state) => {
  return { hero: getHero(state.SelectedCharacter, state.Characters) }
}

export default connect(mapStateToProps)(DetailsPage);
