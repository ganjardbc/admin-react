import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Side extends Component {

  createList = () => {
    let dt = []

    for (let i = 0; i < 10; i++) {
      dt.push(
        <li className="content">
            <div className="list">
              <div className="icn">
                <i className="fa fa-lg fa-th"></i>
              </div>
              <div className="ttl">
								Components { i }
							</div>
            </div>
        </li>
      )
    }

    return dt
  }

  render() {
    return (
    <Router>
      <div className="slide-content background-blue change-scrollbar">

        <div className="padding-top-20px">
          <div className="grid grid-2x">
            <div className="col-1">
              <h1 className="txt-site txt-white txt-upp txt-bold post-center margin-left-10px">
                DDMS
              </h1>
            </div>
            <div className="col-2 content-right app-mobile">
              <button className="btn btn-black btn-circle">
                <i className="fa fa-lg fa-times"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="padding-10px">

          <div className="app-space">
            NAVIGATION
          </div>

          <ul className="app-menu">

            <Link to="/">
              <li className="content">
                <div className="list active">
                  <div className="icn">
                    <i className="fa fa-lg fa-tachometer-alt"></i>
                  </div>
                  <div className="ttl">
                    Dashboard
                  </div>
                </div>
              </li>
            </Link>

            <Link to="/apps">
            <li className="content">
              <div className="list">
								<div className="icn">
									<i className="fa fa-lg fa-th"></i>
								</div>
								<div className="ttl">
									Apps
								</div>
                <div className="icn txt-site txt-right txt-12">
									<i className="fa fa-lg fa-angle-right"></i>
								</div>
							</div>
            </li>
            </Link>

            <li className="content">
              <div className="list">
								<div className="icn">
									<i className="fa fa-lg fa-file"></i>
								</div>
								<div className="ttl">
									Pages
								</div>
                <div className="icn txt-site txt-right txt-12">
									<i className="fa fa-lg fa-angle-right"></i>
								</div>
							</div>
            </li>

          </ul>

          <div className="app-space">
            COMPONENTS
          </div>

          <ul className="app-menu">
            
            { this.createList() }

          </ul>

        </div>

      </div>
      </Router>
    )
  }
}

export default Side