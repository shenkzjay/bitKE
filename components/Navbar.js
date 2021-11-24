// import link from next
import  Link  from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav,  Navbar} from "react-bootstrap";

//import react
import React from 'react'

//import styles from module
import { top, middle, bottom,  navbar, toggle, hamburger, title }  from "../styles/Navbar.module.css";

//function init
function Navigation() {
  

    return (
      <div>
          <Navbar bg="light" expand="lg" sticky="top">
  <Container>
    <Navbar.Brand href="/">BitKE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Link href="/Portfolio">Porfolio</Link>
        <Link href="#link">Partners</Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    );
}

export default Navigation;


// function Navbar() {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link href="/">
//             <a>Home</a>
//           </Link>
//         </li>

//         <li>
//           <Link href="/about">
//             <a>About</a>
//           </Link>
//         </li>

//         <li>
//           <Link href="/features">
//             <a>Features</a>
//           </Link>
//         </li>

//         <li>
//           <Link href="/contact">
//             <a>Contact</a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/admin_panel">
//             <a>panel</a>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }



