import React from "react";
import Button from "../Button/Button";
import {Column, Card} from './style'

const CharacterListItem = props => {
  return(
  <Column>
    <Card>
      <img className="card-img-top img-fluid" src={props.thumbnail} alt={props.name} />
      <h1> {props.name} </h1>
      <p>{props.description}</p>
      <Button id={props.idCharacter}/>
    </Card>
  </Column>
)};

export default CharacterListItem;
