import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/veronym-log.png'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation"  style={{ minHeight: '5.25rem', background: '#004d9b' }}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="Kaldi" style={{  height: '200px' }} />
        </Link>
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
      <div className="navbar-end has-text-centered">
        <Link className="navbar-item" to="/about"  style={{ color: '#fff' }}>
          What is Veronym
        </Link>
        <Link className="navbar-item" to="/products"  style={{ color: '#fff' }}>
          How it works
        </Link>
        <Link className="navbar-item" to="/contact"  style={{ color: '#fff' }} >
          Pricing
        </Link>
        <Link className="navbar-item" to="/contact/examples"  style={{ color: '#fff' }}>
          Sign in
        </Link>
        <Link className="navbar-item" to="localhost:3000/register"  style={{ color: '#fff', fontWeight: '900' }}>
          Start free Trial
        </Link>
      </div>

      </div>
    </div>
  </nav>
  )}
}

export default Navbar
