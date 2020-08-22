import React from 'react';
import { monsterImage } from '../../constants/urls';
import './styles.css';

const Card = ({monster}) => (
    <div className="card">
        <img alt="Monster" src={monsterImage(monster.id)}/>
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
)

export default Card;