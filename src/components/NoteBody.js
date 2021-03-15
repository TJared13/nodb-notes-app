import axios from 'axios';
import React, {Component} from 'react';

export default class NoteBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false,
            titleInput: '',
            bodyInput: '',
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.title !== prevProps.title){
            console.log('WORK', this.props.title)
            this.setState({titleInput: this.props.title, bodyInput: this.props.body})
        }
            
    };

    handleSave = () => {
        this.props.editNote(this.props.id, this.state.titleInput, this.state.bodyInput)
        this.setState({edit: false, titleInput: '', bodyInput:''})
    };

    render(){
        const {id, title, body, editNote} = this.props
        console.log(title, body)
        return (
            <section className='mainBody'>
                <div className='bodyBtn'>
                    <button className='navbtn' onClick={() => this.setState({edit: !this.state.edit})}>Edit</button>
                    <button className='navbtn' onClick={() => this.handleSave()} >Save</button>
                </div>
                {
                this.state.edit
                ?
                <div>
                <input value={this.state.titleInput} placeholder='Name your Title here...' className='title-input' onChange={(e) => this.setState({titleInput: e.target.value})}/>

                <textarea value={this.state.bodyInput} placeholder='Type your note here...' className='body-input' onChange={(e) => this.setState({bodyInput: e.target.value})} />
                </div>
                :
                <div className='static'>
                    <span>{title}</span>
                    <p>{body}</p>
                </div>    
                }
            </section>
        )
    }
}




