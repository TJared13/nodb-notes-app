import React, {Component} from 'react';

export default class Sidebar extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        this.setState({ text: e.target.value });
      };

    render(){
        const {title, body} = this.state;
        const {newNote} = this.props;
        return (
            <section className='sidebar'>
                <h1 className='side-title'>myNotes</h1>
                <div className='searchfield' >
                    <input type='text' placeholder='Search your notes'className='search-box'/>
                    <button className ='navbtn'>Search</button>
                    <button className ='navbtn'>Clear</button>
                </div>
                <button className='newbtn' onClick={newNote}>+</button>
            </section>
        )
    }
}