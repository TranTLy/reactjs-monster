import React, { Component } from 'react';
import './monster.style.scss';
import { CartList } from './component/cart-list/cart-list.component';
import { SearchBox } from './component/search-box/search-box.component';

class Monsters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json().then(monsters => {
            this.setState({ monsters: monsters });
        }))
    }

    clickbtn() {
        console.log("on click");
    }
    render() {
        const { monsters, searchField } = this.state;
        const filterMonsters = monsters.filter(item => item.name.toLowerCase().includes(searchField));
        return (
            <div className="monsters">
                <h1 className="monsters__name">Monster</h1>
                <div>
                    <SearchBox placeholder="Search name monster" handleChange={(e) => this.setState({ searchField: e.target.value.toLowerCase() })} />
                </div>
                <CartList monsters={filterMonsters} />

            </div>
        );
    }
}

export default Monsters;