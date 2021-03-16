import React, {Component} from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import NoteEdit from './NoteEdit';

export default class NoteContainer extends Component {
    constructor(){
        super();
        this.state = {
            note: [],
            id: null,
            editMode: false,
            title: '',
            body: '',
        };

        this.newNote = this.newNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    };

    componentDidMount() {
        axios.get('/api/notes')
        .then( res => {
          this.setState({notes: res.data })
        })
        .catch(err => console.log(err))
      };

      onInputChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      };

    newNote() {
    const newNotePost = {title: 'Untitled', body: 'No text has been entered'}
        axios.post( ('/api/notes'), newNotePost)
        .then( res => {
            this.setState({note: res.data})
            console.log(res.data)
        })
        .catch(err => console.log(err));
    };

    viewNote = (id) => {
        axios.get(`/api/note/${id}`)
        .then( res => {
            console.log(res.data)
            const {id, title, body} = res.data;
            this.setState({id, title, body})
        })
        .catch(err => console.log(err))
    };

    searchNote = (title) => {
        axios.put(`/api/notes/${title}`)
        .then(res => this.setState({note: res.data}))
        .catch(err => console.log(err))
    };

    editNote = (id, title, body) => {
        axios.put(`/api/notes/${id}`, {title, body})
        .then(res => {
            this.setState({note: res.data})
        })
        .catch(err => console.log(err))
      }



    deleteNote(id) {
        console.log(id)
    axios.delete(`/api/notes/${id}`)
    .then( res => {
        this.setState({note: res.data });
        console.log(res.data)
    })
    .catch(err => console.log(err));
    }
    
    render(){
        return (
            <section className='mainContain'>
                <Sidebar 
                    note={this.state.note} 
                    title={this.state.title} 
                    body={this.state.body} 
                    newNote={this.newNote} 
                    viewNote={this.viewNote} 
                    editNote={this.editNote} 
                    deleteNote={this.deleteNote}
                    searchNote={this.searchNote} 
                    onInputChange={this.onInputChange}/>
                <NoteEdit 
                    id={this.state.id} 
                    title={this.state.title} 
                    body={this.state.body}
                    editNote={this.editNote} 
                    />
            </section> 
        )
    }
}