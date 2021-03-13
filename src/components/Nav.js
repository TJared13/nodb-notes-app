import React, {Component} from 'react';

export default class Nav extends Component {
    render(){
        const {newNote} = this.props;
        return (
            <section className='navbar'>
                <div className='searchfield' >
                    <input type='text'/>
                    <button className ='navbtn'>Search</button>
                    <button className ='navbtn'>Clear</button>
                </div>
                <button className='newbtn' onClick={newNote}>+</button>
            </section>
        )
    }
}