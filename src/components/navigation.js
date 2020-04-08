import React, { Component } from 'react';
import './navigation.css'; 
import { Link } from 'gatsby';

const activeStyles = {
  color: '#d100bc',
}

class Navigation extends Component {
  render() {
    return (
        <React.Fragment>
            <div>
                <h3>Luna<br/>Photography</h3>
                <ul>
                    <li><Link to="/" activeStyle={activeStyles}>Cityscapes</Link></li>
                    <li><Link to="/portraiture" activeStyle={activeStyles}>Portraiture</Link></li> 
                    <li><Link to="/product" activeStyle={activeStyles}>Product</Link></li>
                    <li><Link to="/about" activeStyle={activeStyles}>About</Link></li>
                </ul>
            </div>
        </React.Fragment>
    );
  }
}

export default Navigation