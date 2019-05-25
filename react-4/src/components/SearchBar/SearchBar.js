import React, { Component } from "react";
import SearchForm from "../SearchForm/SearchForm";
import { connect } from 'react-redux';
import {setSearchName} from '../../redux/characters/action'
import {Container} from './style'

const Field = ({ component, ...props}) => <input {...props} />

class SearchBar extends Component {
  state = {};

  render() {
    const {dispatch} = this.props
    return (
      <Container>
        <Field
          name="searchform"
          placeholder="Buscar Personagens"
          component={SearchForm}
          type="text"
          onChange={(e) => {
            if (!e.target.value.trim()) {
              dispatch(setSearchName(''))
            }
            dispatch(setSearchName(e.target.value))
            }}
          data-testid="SearchBar"
        />
      </Container>
    );
  }
}


export default connect()(SearchBar);
