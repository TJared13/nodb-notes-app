import React, {Component} from 'react';

export default class Nav extends Component {
    constructor(){
        super();
        this.state = {
            text: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        this.setState({ text: e.target.value });
      };

    render(){
        const {text} = this.state;
        const {newNote} = this.props;
        console.log(text)
        return (
            <section className='navbar'>
                <div className='searchfield' >
                    <input type='text' onChange={this.handleChange}/>
                    <button className ='navbtn'>Search</button>
                    <button className ='navbtn'>Clear</button>
                </div>
                <button className='newbtn' onClick={newNote}>+</button>
            </section>
        )
    }
}