import React, { Component } from 'react';
import './styles.css';

const Search = props => (
    <input className="search" type="search" placeholder={props.placeholder} onChange={props.updateSearch} value={props.text} />
);

export default Search;