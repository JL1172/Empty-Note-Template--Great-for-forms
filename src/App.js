import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Objective1 from "./Objective1";
import Objective2 from "./Objective2";
import Objective3 from "./Objective3";
import Objective4 from "./Objective4";
import Objective5 from "./Objective5";

const StyledDiv = styled.div`
display : flex;
justify-content : space-evenly;
padding : 1rem;
border-bottom : 2px solid gray;
`

const style = {display : 'flex', }
function App() {
  return (
    <div className="App">
      <StyledDiv>
        <Link to = "/">Home</Link>
        <Link to = 'objective1'>objective 1</Link>
        <Link to = 'objective2'>objective 2</Link>
        <Link to = 'objective3'>objective 3</Link>
        <Link to = 'objective4'>objective 4</Link>
        <Link to = 'objective5'>objective 5</Link>
        </StyledDiv>
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "objective1" element = {<Objective1 />}/>
          <Route path = "objective2" element = {<Objective2 />}/>
          <Route path = "objective3" element = {<Objective3 />}/>
          <Route path = "objective4" element = {<Objective4 />}/>
          <Route path = "objective5" element = {<Objective5 />}/>
        </Routes>
    </div>
  );
}

export default App;
