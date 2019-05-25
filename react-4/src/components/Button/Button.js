import React from "react";
import { withRouter } from 'react-router-dom'
import { setSelectedCharacter } from '../../redux/characters/action'
import { connect } from 'react-redux';
import {ButtomDetail} from './style'

const Buttom = ({history, onClick}) => (
    <ButtomDetail onClick={(e) => {
        history.push(`/details`)
        onClick()
    }}>Detalhes</ButtomDetail>
)

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
    onClick: () => dispatch(setSelectedCharacter(ownProps.id))
})}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Buttom));