import styled from "styled-components";

export const ImgCharacter = styled.img`
    height : 32em;
    margin-left: auto;
    margin-right: auto;
    display: block;
`

export const ButtomEdit = styled.button`
    margin-left: auto;
    margin-right: auto;
    display: block;
    width : 6em;
    height : 3em;
    background-color : Tomato;
    border : 0;
    border-radius : 0.7em;
    font-size : 12px;
    cursor: pointer
`

export const Row = styled.div`
    margin: 0 -5px;
    &::after {
        content: "";
        display: table;
        clear: both;
    }
`;

export const Column = styled.div`
    float: left;
    padding: 10px 10px;   
    box-sizing: border-box;
    
    h1{
        margin : 0;
        display : ${props => !props.IsEdit ? 'block' : 'none'}
    }

    input{
        height: 2.4em;
        display : ${props => props.IsEdit ? 'block' : 'none'}
    }
`;