import React, {Component} from 'react';
import { firestore } from './firebase'
import '../../App.css';
import {useForm} from 'react-hook-form'

export default class findUs extends Component {

	state = {
		title: "",
		author: ""
  }
  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  addBook = event => {
    event.preventDefault()
    
    firestore.collection("books").add({
      title: this.state.title,
      author: this.state.author
    })
  
    this.setState({ title: "", author: "" })
  }
  
  render() {
    const { title, author } = this.state

    return (
        <div className='App'>
            <form onSubmit={this.addBook}>
                <input
                    type='text'
                    placeholder='Title of the Book?'
                    name='title'
                    onChange={this.updateInput}
                    value={title}
      />
    
                <input
                    type='text'
                    placeholder='Author of the Book?'
                    name='author'
                    onChange={this.updateInput}
                    value={author}
      />
    
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
    }
  }