import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
  }

  onChangeUserName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()

    const {password, userName} = this.state

    const url = 'https://apis.ccbp.in/login'

    const userDetails = {
      userName,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  render() {
    return (
      <div className="login-container">
        <img
          className="login-image"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />

        <form onSubmit={this.submitForm} className="form-container">
          <img
            className="website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
          />
          <label htmlFor="input1">USERNAME</label>
          <input
            onChange={this.onChangeUserName}
            className="input-1"
            id="input1"
            type="text"
            placeholder="Username"
          />
          <label htmlFor="input2">PASSWORD</label>
          <input
            onChange={this.onChangePassword}
            className="input-2"
            id="input2"
            type="password"
            placeholder="Password"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
