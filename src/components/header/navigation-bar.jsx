import React from 'react'
import "./navigation-bar.css";

export const NavigationBar = () => {
  return (
    <nav className="main-nav">
			<ul className="navigation">
				
				<li><a href="#about">About Me</a></li>
				<li><a href="#experience">Expereince</a></li>
				<li><a href="#education">Education</a></li>
				<li><a href="#testimonials">Testimonals</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
  )
}
