//import libraries 
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  // Name of the default links, append it to the defaultLink variable
  defaultLink = e => {
    this.props.onClick(e.target.innerText);
    this.props.istrue(true);
  }

  render() {
    return (
      //create nav element and append NavLink's
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/rainbows" onClick={this.defaultLink}>Rainbows</NavLink></li>
          <li><NavLink to="/flowers" onClick={this.defaultLink}>Flowers</NavLink></li>
          <li><NavLink to="/dallascowboys" onClick={this.defaultLink}>Dallas Cowboys</NavLink></li>
        </ul>
      </nav>
    )
  }
}