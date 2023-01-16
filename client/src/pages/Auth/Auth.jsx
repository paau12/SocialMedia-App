import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'

const Auth = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authReducer.loading)
  const [isSignUp, setIsSignUp] = useState(true)
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  })

  const [confirmPass, setConfirmPass] = useState(true)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignUp) {
      data.password === data.confirmPassword ? dispatch(signUp(data)):
      setConfirmPass(false);
  }else{
    dispatch(logIn(data))
  }
}

  const resetForm = () => {
    setConfirmPass(true)
    setData({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
  }

  return (
    <div className="Auth">
      {/* LeftSide */}
      <div className="a-left">
        <img src={Logo} alt="LogoImg" />
        <div className="Webname">
          <h1>NANA Media</h1>
          <h6>Explore and meet many people from all the world.</h6>
        </div>
      </div>
      {/* RightSide  */}
      <div className="a-right">
        <form className="info-form authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? 'Sign up' : 'Login'}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="info-input"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
              />
              &nbsp;&nbsp;
              <input
                type="text"
                placeholder="Last Name"
                className="info-input"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}

              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Username"
              className="info-input"
              name="username"
              onChange={handleChange}
              value={data.username}

            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="info-input"
              name="password"
              onChange={handleChange}
              value={data.password}

            />

            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="info-input"
                name="confirmPassword"
                onChange={handleChange}
                value={data.confirmPassword}

              />
            )}
          </div>
          <div>
            <span
              style={{
                display: confirmPass ? 'none' : 'block',
                color: 'red',
                fontSize: '12px',
                alignSelf: 'flex-end',
                marginRight: '5px',
              }}
            >
              The password is not same
            </span>
          </div>

          <div>
            <span
              style={{ fontSize: '12px', cursor: 'pointer' }}
              onClick={() => {setIsSignUp((prev) => !prev); resetForm()}}
            >
              {isSignUp ? 'Already have an account' : 'Create an account'}
            </span>
          </div>

          <button className="button info-btn" type="submit" disabled={loading}>
            {loading? "Loading..." : isSignUp ? 'Sign up' : 'Log in'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Auth
