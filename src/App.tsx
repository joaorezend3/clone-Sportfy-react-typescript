import React from 'react';
import * as C from './App.styled';
import { NavBar } from './components/navBar'
import { NavBarHeaderContent } from './components/headerContent'
import ContainerCards from './components/cards'
import Footer from './components/footer'
function App() {

  return (
    <div className="App">
      <C.container>
        <NavBar></NavBar>
        <div className="content">
          <NavBarHeaderContent></NavBarHeaderContent>
          <ContainerCards />
        </div>
        <C.Anuncio>
          <p>aaaa</p>
          <div>ssssssa8978ssss</div>
        </C.Anuncio>
        <Footer></Footer>
      </C.container >
    </div>
  );
}

export default App;
