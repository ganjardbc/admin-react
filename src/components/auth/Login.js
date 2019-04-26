import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, HashRouter } from "react-router-dom"

class Login extends Component {
  render() {
    return (
      <HashRouter history={ Router.browserHistory }>
        <div className="main-content">
          <div className="app-login background-blue">

            <div className="login-content grid grid-2x grid-mobile-none">
              <div className="col-1">
                  <div className="padding-25px"></div>
                  <div className="image image-200px image-circle" style={{margin: "auto"}}></div>
                  <div className="padding-25px"></div>
              </div>
              <div className="col-2">
                <div className="txt-site txt-14 txt-bold txt-main txt-center margin-top-20px">
                    DDMS LOGIN
                </div>
                <div className="margin-20px">
                  <div className="margin-bottom-5px txt-site txt-11 txt-main">Username</div>
                  <input 
                    type="text" 
                    className="txt txt-primary-color"
                    placeholder="Username"></input>
                </div>
                <div className="margin-20px">
                  <div className="margin-bottom-5px txt-site txt-11 txt-main">Password</div>
                  <input 
                    type="password" 
                    className="txt txt-primary-color"
                    placeholder="Password"></input>
                </div>
                <div className="margin-20px">
                  <NavLink to="/home">
                    <input 
                      type="submit" 
                      className="btn btn-width-all background-blue"></input>
                  </NavLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Login