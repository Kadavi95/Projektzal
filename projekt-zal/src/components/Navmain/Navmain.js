import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import navmain from '../../sass/navmain.scss'
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
                <ul>
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