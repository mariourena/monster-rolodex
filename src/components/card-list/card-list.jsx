import React from 'react';
import Card from '../card/card';
import './styles.css';

const CardList = props => (
    <div className="card-list">
        {props.monsters.map(m => <Card key={m.id} monster={m}/>)}
    </div>
)

export default CardList;