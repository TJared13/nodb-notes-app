import React, {Component} from 'react';
import axios from 'axios';
import Nav from './Nav';
import Note from './Note';

export default class NoteContainer extends Component {
    constructor(){
        super();
        this.state = {
            notes: [],
        };

        this.newNote = this.newNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    };

    // componentDidMount() {
    //     axios.get('/api/notes')
    //     .then( res => {
    //       this.setState({notes: res.data })
    //       .catch(err => console.log(err));
    //     });
    //   };

      newNote() {
        const {notes} = this.state;
          axios.post( ('/api/notes'), {notes} )
          .then( res => {
            this.setState({notes: [...notes, <Note/>]});
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
        const {notes} = this.state;
        return (
            <section>
                <Nav newNote={this.newNote}/>
                {
            //   this.state.notes.map( note => (
                <Note id={notes.id} key={notes.id } text={notes.text } edit={this.editMessage } deleteNote={this.deleteNote} />
            //   ))
            }
            </section>
        )
    }
}