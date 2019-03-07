import React from 'react';
import Fader from './Fader';
import swal from 'sweetalert';
import ReactDOM from 'react-dom';


class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.alreadyGuessed = this.alreadyGuessed.bind(this)
    }
  
    handleChange(ev) {
        this.props.onTextChange(ev.target.value)
    }

    //if user guesses the same person already
    alreadyGuessed() {
        let name = [].concat(this.props.alreadyGuessed())
        console.log(name.map(f => f.firstName))
    }


    handleSubmit(ev) {
        ev.preventDefault()
        let name = [].concat(this.props.chars.filter((character, index) => {
            if (character.firstName === this.props.text.toUpperCase().trim() || character.fullName === this.props.text.toUpperCase().trim()){
               return character.guessed = !character.guessed
            }
        }))
        if(name.length !== 0){
            this.props.handleSubmit(this.props.text)
        }else{
            swal(`Doh! ${this.props.text.toUpperCase()} doesn\'t exist!`)
        }
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Type here:
            <input type="text" onChange={this.handleChange} value={this.props.text} name="submittedName" placeholder="apu"/>
            </label>
            <input type="submit" onClick={this.alreadyGuessed}/>
        </form>
        )
    }
}



export default UserForm;