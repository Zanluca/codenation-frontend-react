import styled from "styled-components";

export const Row = styled.div`
    margin: 0 -5px;
    &::after {
        content: "";
        display: table;
        clear: both;
    }
`;