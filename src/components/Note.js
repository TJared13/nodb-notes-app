import React, {Component} from 'react';

export default class Note extends Component {
    render(){
        const {deleteNote} = this.props;
        return (
            <section className='notesAlign'>
                <div className='noteMain'>
                    <div className='noteTitle'>
                        <h2>Title</h2>
                    </div>

                    <div className='noteBtn'>
                        <button className='navBtn'>Edit</button>
                        <button className='naveBtn' onClick={deleteNote}>Delete</button>
                    </div>
                    <textarea className='noteInput' type='text'/>

                </div>
            </section>
        )
    }
}




