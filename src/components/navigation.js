import React, { Component } from 'react';
import './Navigation.css'; 
import { Link } from 'gatsby';

class Navigation extends Component {
  render() {
    return (
        <React.Fragment>
            <div>
                <h3>Luna<br/>Photography</h3>
                <ul>
                    <li><Link to="/">Cityscapes</Link></li>
                    <li><Link to="/portraiture">Portraiture</Link></li> 
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </React.Fragment>
    );
  }
}

export default Navigation