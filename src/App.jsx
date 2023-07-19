import { useState } from "react";
import './App.css'
import TriangleCheck from './components/TraingleCheck'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Hypotenuse from './components/Hypotenuse'
import AreaOfTriangle from './components/AreaOfTriangle'
import Quiz from "./components/Quiz";


function App() {

  let [activePage, setActivePage] = useState(0);
  let hero;

  const onNavClicked = (params) =>{
    setActivePage(params);
    console.log("Clicked " + params);
  };

  switch(activePage)
  {
    case 0:
     hero = <TriangleCheck/>;
     break; 
     case 1:
     hero = <Quiz/>;
     break; 
     case 2:
     hero = <Hypotenuse/>;
     break; 
     case 3:
     hero = <AreaOfTriangle/>;
     break; 
  }

  return (
    <>
    <div className='body'>
      <Navigation handleClick={(params)=>{ onNavClicked(params)}}  />
      {hero}
      <footer>
      <Footer />
    </footer>
      </div>
    </>
  )
}

export default App


/*
NAVBAR : navbar like the nike website
Hero : center hero will have the functioanlity pages.
Footer: will put copyright and stuff



It will be a single page app with no scrolling.



*/
