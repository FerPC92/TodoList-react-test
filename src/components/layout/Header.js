import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {


    render() {
        return (
            <header style={headerStyle}>
                <h1>TodoList</h1>
                <Link className="linkRoute" to="/">Home</Link> | <Link className="linkRoute" to="/about">About</Link>
                
            </header>
        )
    }

     
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
    