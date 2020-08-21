import React from 'react';
import './styles.css';

const CardList = (props) => {
    return <div className="card-list">{props.children}</div>
}

export default CardList;