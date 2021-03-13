import React, {Component} from 'react';

export default class NoteBody extends Component {
    render(){
        const {deleteNote} = this.props;
        return (
            <section className='mainBody'>
                <input type='text'  placeholder='Name your note here...' className='title-input' />
                <textarea type='text' placeholder='Type your note here...' className='body-input' />
            </section>
        )
    }
}




