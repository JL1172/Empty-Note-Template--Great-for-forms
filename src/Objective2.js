import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Reactstrap from 'reactstrap';

const StyledDiv = styled.div`
display : flex;
justify-content : center;
align-items : center;
height : 90vh;
color : lightseagreen;
background-image: linear-gradient(to right, white 0%, lightseagreen 100%);
`
const WorkingDiv = styled.div`
border : 2px solid whitesmoke;
height : 60vh;
width : 60vw;
background-color : whitesmoke;
border-radius : 10px;
padding : 1rem;
box-sizing : border-box;
`
export default function Objective2() {
    return (
        <StyledDiv>
            <WorkingDiv>
            <h1>Objective2</h1>
            </WorkingDiv>
        </StyledDiv>
    )
}