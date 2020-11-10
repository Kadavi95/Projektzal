import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import { Button } from '../Button'

class Navmain extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="navitems">
                
                <h1 className="navlogo">Przychodnia VET</h1>
                <div className="navham" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'navmenuActive' : 'navMenu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key ={index}>
                                <a className={item.className} href={item.url}>
                                {item.title}</a>
                            </li>)
                    })}
                </ul>
           
            </nav>
        )
    }
}
export default Navmain