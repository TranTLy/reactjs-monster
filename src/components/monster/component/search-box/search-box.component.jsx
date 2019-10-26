import React, { Component } from 'react';

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div className="search">
            <input type="text" placeholder={placeholder} onChange={handleChange} />

        </div>
    )
}