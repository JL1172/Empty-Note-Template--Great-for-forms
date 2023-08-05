import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Reactstrap from 'reactstrap';

const StyledDiv = styled.div`
display : flex;
justify-content : center;
align-items : center;
height : 90vh;
color : lightslategray;
background-image: linear-gradient(to right, white 0%, lightslategray 100%);
`

export default function Home() {
    return (
        <StyledDiv>
                <h1>Home</h1>
        </StyledDiv>
    )
}