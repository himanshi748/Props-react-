import React from "react";
import './App.css';
function Hello (props){
    return(
        <>
        <h1>Hello {props.name} {props.surname}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum vel, fuga neque minima ipsa id ducimus, unde adipisci aliquid commodi excepturi tempora! Quae autem commodi, voluptate tempore neque non.</p>
        <hr></hr>
        </>
    )
}
export default Hello;