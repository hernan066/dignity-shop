import React from "react";




const Navbar = () => {
  return (
   <nav className="nav__main">
       <div className="nav__wrapper">
           <div className="nav__left">
                <h1>-Dignity-</h1>
           </div>
           <div className="nav__center">
                <ul className="nav__menu">
                    <li><a href="#">Ropa interior</a></li>
                    <li><a href="#">accesorios</a></li>
                    <li><a href="#">pijamas</a></li>
                </ul>
           </div>
           <div className="nav__right">
           <span><i className="far fa-user-circle"></i></span>
           <span><i className="fas fa-shopping-cart"></i></span>
           </div>
           

       </div>

   </nav>
   
   
   
   
    /*  <Container>
      <Wrapper>
        <Left>
          <Logo>-Dignity-</Logo>
        </Left>
        <Center>
          <Menu>
           
           <li>
              <Enlaces href="#">Home</Enlaces>
            </li>
            <li>
              <Enlaces href="#">Home</Enlaces>
            </li>
            <li>
              <Enlaces href="#">Home</Enlaces>
            </li>
            <li>
              <Enlaces href="#">Home</Enlaces>
            </li>
           
          </Menu>
        </Center>
        <Right>
          <h1>Right</h1>
        </Right>
      </Wrapper>
    </Container> */
  );
};

export default Navbar;
