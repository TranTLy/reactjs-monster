import React, { Component } from 'react';
import './cart-list.component.scss';
import { CartItem } from '../cart-item/cart-item.component';


export const CartList = props => {
    console.log("monster: ", props.monsters)
    return (
        <div className="card-list">
            {
                props.monsters.map((item, index) => <CartItem key={index} monster={item} />)
            }
        </div>);
}
