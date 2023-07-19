

const Navigation = ({handleClick})=>{
 
  let onNavClicked = (index)=>
  {
    handleClick(index);
  }

    return(
        <>
        <div id='navigation'>
    <nav>
      <div id='branding'>
        <img id='brand-logo' src="/images/brand-logo.png" alt="brand-logo" />
        <p>FUN WITH TRAINGLES/\_</p>
      </div>

      <ul>
        <li ><button onClick={()=>onNavClicked(0)}>Is Triangle?</button></li>
        <li ><button onClick={()=>onNavClicked(1)}>Quiz</button></li>
        <li ><button onClick={()=>onNavClicked(2)}>Hypotenuse</button></li>
        <li ><button onClick={()=>onNavClicked(3)}>Area of Traingle</button></li>
      </ul>
    </nav>
    </div>

        </>
    );
}

export default Navigation;