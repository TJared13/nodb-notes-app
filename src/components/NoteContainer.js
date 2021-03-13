import React, {Component} from 'react';
import axios from 'axios';
import Nav from './Nav';
import Note from './Note';

export default class NoteContainer extends Component {
    constructor(){
        super();
        this.state = {
            messages: [],
            text: '',
        };
    }


    render(){
        return (
            <section>
                <Nav />
                <Note />
            </section>
        )
    }
}