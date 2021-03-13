import React, {Component} from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import NoteBody from './NoteBody';

export default class NoteContainer extends Component {
    constructor(){
        super();
        this.state = {
            note: [],
        };

        this.newNote = this.newNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    };

    componentDidMount() {
        axios.get('/api/notes')
        .then( res => {
          this.setState({notes: res.data })
        })
        .catch(err => console.log(err))
      };

    handleChange( event ) {
        this.setState({ text: event.target.value });
      };

    newNote() {
    // const note = this.state;
    const newNotePost = {text: 'Untitled', body: 'None'}
        axios.post( ('/api/notes'), {newNotePost})
        .then( res => {
        this.setState({note: res.data});
        })
        .catch(err => console.log(err));
    };

    deleteNote(id) {
    axios.delete(`/api/notes/:${id}`)
    .then( res => {
        this.setState({notes: res.data });
    })
    .catch(err => console.log(err));
    }
    


    render(){
        return (
            <section className='mainContain'>
                <Sidebar notes={this.state.notes} newNote={this.newNote}/>
                {
            //   this.state.notes.map( note => (
                <NoteBody />
            //   ))
            }
            </section>
        )
    }
}