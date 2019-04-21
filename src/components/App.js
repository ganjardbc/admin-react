import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// components
// import Side from './layouts/Side'
// import Panel from './layouts/Panel'
import Home from './home/Index'
import Apps from './apps/Index'
import Pages from './pages/Index'
import Contents from './contents/Index'

// assets
// import logo from '../assets/img/logo.svg'
// import '../assets/css/App.css'

class App extends Component {

  constructor () {
    super()
    this.state = {
      slideClass: 'app-slide app-slide-mobile',
    }
  }

  createList = () => {
    let dt = []

    for (let i = 0; i < 10; i++) {
      dt.push(
        <Link to={'/contents/'+i}>
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
        </Link>
      )
    }

    return dt
  }

  opSlide = () => {
    if (this.state.slideClass === 'app-slide app-slide-mobile') {
      this.setState({slideClass: 'app-slide'})
    } else {
      this.setState({slideClass: 'app-slide app-slide-mobile'})
    }
  }

  render() {
    

    return (
      <Router>
        <div className="app">

          {/* Side */}
          <div className={ this.state.slideClass } onClick={ this.opSlide }>
            <div className="slide-content background-blue change-scrollbar">

              <div className="padding-top-20px">
                <div className="grid grid-2x">
                  <div className="col-1">
                    <h1 className="txt-site txt-white txt-upp txt-bold post-center margin-left-10px">
                      DDMS
                    </h1>
                  </div>
                  <div className="col-2 content-right app-mobile">
                    <button 
                      className="btn btn-black btn-circle" 
                      onClick={ this.opSlide }>
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
                      <div className="list">
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

                  <Link to="/pages">
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
                  </Link>

                </ul>

                <div className="app-space">
                  COMPONENTS
                </div>

                <ul className="app-menu">
                  
                  { this.createList() }

                </ul>

              </div>

            </div>
          </div>


          {/* main */}
          <div className="app-main">

            {/* panel */}
            <div className="app-panel">
              <div className="panel-content">

                <div className="col-1">

                  <button 
                    className="btn btn-grey app-mobile" 
                    onClick={ this.opSlide }>
                    <i 
                      className="fa fa-lg fa-bars" 
                      style={{marginRight: '10px'}}></i>
                    <span 
                      className="txt-site txt-14 txt-main-color txt-bold">
                      Menu
                    </span>
                  </button>

                  <form action="#" className="app-desktop">
                    <div className="input-group">
                      <input 
                        type="text" 
                        className="txt txt-main-color txt-trans-color" 
                        placeholder="Search .."
                        required></input>
                      <button 
                        className="btn btn-no-radius btn-blue icn"
                        type="submit">
                        <i className="fa fa-lg fa-search"></i>
                      </button>
                    </div>
                  </form>

                </div>

                <div className="col-2">

                  <button className="btn btn-grey btn-circle">
                    <span className="btn-notif">2</span>
                    <i className="far fa-lg fa-bell"></i>
                  </button>

                  <div className="app-small-profile" style={ {float: 'right'} }>
                      <div className="asp-col-1">
                        <div className="image image-circle image-30px"></div>
                      </div>
                      <div className="asp-col-2">
                        <div className="ttl">
                          <div className="txt-site txt-main txt-12">
                            Ganjar hadiatna
                          </div>
                        </div>
                      </div>
                  </div>
                
                </div>

              </div>
            </div>

            {/* content */}
            <Route exact path="/" component={ Home }></Route>
            <Route exact path="/apps" component={ Apps }></Route>
            <Route exact path="/pages" component={ Pages }></Route>
            <Route exact path="/contents/:id" component={ Contents }></Route>

            {/* footer */}
            <div className="app-footer">
              <div className="txt-site txt-11 txt-primary txt-thin">
                2018 - 2019 @ Bitozen - Themes
              </div>
            </div>

          </div>
          

        </div>
      </Router>

    )
  }

}

export default App;
