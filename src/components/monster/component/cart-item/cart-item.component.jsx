import React, { Component } from 'react';
import './cart-item.component.scss'


export const CartItem = (props) => {
    return (
        <div className="card-container">
            <div>
                <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            </div>
            <div className="name">{props.monster.name}</div>
            <div className="email">{props.monster.email}</div>
        </div>
    )
}