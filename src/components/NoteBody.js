import React, {Component} from 'react';

export default class NoteBody extends Component {
    constructor(){
        super();
        this.state = {
            editing: false,
            title: '',
            body: '',
        }
        
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      };

    render(){
        return (
            <section className='mainBody'>
                <input name='title' value={this.state.title} type='text'  placeholder='Name your Title here...' className='title-input' onChange={this.onInputChange}/>
                <textarea name='body' value={this.state.body} type='text' placeholder='Type your note here...' className='body-input' onChange={this.onInputChange}/>
            </section>
        )
    }
}




