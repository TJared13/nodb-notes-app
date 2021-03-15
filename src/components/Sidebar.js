import React, {Component} from 'react';

export default class Sidebar extends Component {
    constructor(){
        super();
        this.state = {
            note: this.props,
            title: this.props,
            body: this.props,
            filteredNote: [],
            userInput: '',
        }
    }

    handleChange = (val) => {
        this.setState({userInput: val})
    };
    
    render(){
        const {note, newNote, viewNote, deleteNote, searchNote} = this.props;
        return (
            <section className='sidebar'>
            <div>
                <h1 className='side-title'>myNotes</h1>
                <div className='searchfield' >
                    <input type='text' placeholder='Search your notes'className='search-box' onChange={(e) => this.handleChange(e.target.value)}/>
                    <button className ='navbtn' onClick={searchNote} >Search</button>
                    <button className ='navbtn'>Clear</button>
                <button className='newbtn' onClick={newNote}>+</button>
                </div>
            </div>

            <div>
                {
                    note.map( (e) => {
                    return (
                    <div key={e.id} className='sidebar-notes' onClick={() => viewNote(e.id)}>
                        <button onClick={deleteNote} className="deleteBtn">X</button>
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