import axios from 'axios'
import { useRef } from 'react'
import { useHistory } from 'react-router'
import './register.css'

export default function Register() {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const history = useHistory()

  const handleClick = async (e) => {
    e.preventDefault()
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity('Passwords dont match!')
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }

      try {
        const res = await axios.post('/auth/register', user)
        const containerName = {
          id: res.data._id,
        }
        await axios.post('/storage/createContainer', containerName)
        history.push('/login')
      } catch (err) {
        console.log(err)
      }
    }
  }

  const handleLoginClick = () => {
    history.push('/login')
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">JoeBook</h3>
          <span className="loginDesc">
            Connect with friends and the world aroung you on JoeBook.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              type="text"
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              type="email"
              className="loginInput"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              minLength="6"
              type="password"
              className="loginInput"
            />
            <input
              placeholder="Re-enter Password"
              required
              ref={passwordAgain}
              minLength="6"
              type="password"
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton" onClick={handleLoginClick}>
              Log into account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
