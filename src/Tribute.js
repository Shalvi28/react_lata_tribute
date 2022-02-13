import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class Tribute extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <img src = {this.props.Images}/>  
                <h2>{this.props.Text}</h2>
                <h3>{this.props.biography}</h3>
            </div>
        )
    }
}

export default Tribute;
