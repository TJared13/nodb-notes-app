import React, {Component} from 'react';

export default class Nav extends Component {
    render(){
        return (
            <section className='navbar'>
                <div className='searchfield' >
                    <input type='text'/>
                    <button className ='navbtn'>Search</button>
                    <button className ='navbtn'>Clear</button>
                </div>
                <button className='newbtn'>+</button>
            </section>
        )
    }
}