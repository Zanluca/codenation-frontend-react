import styled from "styled-components";

export const Column = styled.div`
    float: left;
    width: 50%;
    padding: 10px 10px;   
    box-sizing: border-box;
`;

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    background-color: #f1f1f1;
    border-radius : 3px;

    *{
        font-family : -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }

    img{
        margin-left: auto;
        margin-right: auto;
        display: block;
        width : 50%
    }

    h1 {
        text-align : center
    }
`