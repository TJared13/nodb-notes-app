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
        const {note, newNote, deleteNote} = this.props;
        return (
            <section className='sidebar'>
            <div>
                <h1 className='side-title'>myNotes</h1>
                <div className='searchfield' >
                    <input type='text' placeholder='Search your notes'className='search-box'/>
                    <button className ='navbtn'>Search</button>
                    <button className ='navbtn'>Clear</button>
                <button className='newbtn' onClick={newNote}>+</button>
                </div>
            </div>

            <div>
                {
                    note.map( (e) => {
                    return (
                    <div className='sidebar-notes'>
                        <button onClick={deleteNote}>Delete</button>
                        <h2>{e.title}</h2> 
                        <h3>{e.body}</h3>
                    </div>
                    )})
                }
            </div>
            </section>
            
        )
    }
}