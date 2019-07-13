import React, { Component } from 'react'
import ValidationError from './ValidationError'

export default class RegistrationForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            repeatPassword: {
                value: '',
                touched: false
            },
        }
    }
    validateName(){
        const name = this.state.name.value.trim();
        if (name.length === 0) return 'Name is required'
        else if (name.length < 3) return 'Name must be at least 3 chars long'
    }
    validatePassword(){
        const password = this.state.password.value.trim();
        if (password.length === 0) return 'Password is required'
        else if (password.length < 6 || password > 72) return 'Password must be between 6 and 72 chars'
        else if (!password.match(/[0-9]/)) return 'Password must contain at least one number' 
    }
    validateRepeatPassword(){
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();
        if (repeatPassword !== password) return 'Passwords do not match'
    }
    handleSubmit(e){
        e.preventDefault()
        const { name, password, repeatPassword } = this.state
        console.log(name.value, password.value, repeatPassword.value)
    }
    updateName(name){
        this.setState({
            name: {
                value: name,
                touched: true
            }
        })
    }
    updatePassword(password){
        this.setState({
            password: {
                value: password,
                touched: true
            }
        })
    }
    updateRepeatPassword(repeatPassword){
        this.setState({
            repeatPassword: {
                value: repeatPassword,
                touched: true
            }
        })
    }
    render() {
        return (
            <form className="registration" onSubmit={e => this.handleSubmit(e)}>
                <h2>Register</h2>
                <div className="registration__hint">* required field</div>
                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className="registration__control" name="name" id="name"  onChange={e => this.updateName(e.target.value)} />
                    {this.state.name.touched && (<ValidationError message={this.validateName()} /> )}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <input type="password" className="registration__control" name="password" id="password" onChange={e => this.updatePassword(e.target.value)}/>
                    {this.state.password.touched && (<ValidationError message={this.validatePassword()} /> )}
                    <div className="registration__hint">6 to 72 characters, must include a number</div>
                </div>
                <div className="form-group">
                    <label htmlFor="repeatPassword">Repeat Password *</label>
                    <input type="password" className="registration__control" name="repeatPassword" id="repeatPassword" onChange={e => this.updateRepeatPassword(e.target.value)}/>
                    {this.state.repeatPassword.touched && (<ValidationError message={this.validateRepeatPassword()} /> )}
                </div>

                <div className="registration__button_group">
                    <button 
                        type="reset" 
                        className="registration__button"
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="registration__button"
                        disabled={
                            this.validateName() ||
                            this.validatePassword() ||
                            this.validateRepeatPassword() 
                        }
                    >
                        Save
                    </button>
                </div>
            </form>
        )
    }
}
