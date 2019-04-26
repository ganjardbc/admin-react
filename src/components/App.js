import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, HashRouter } from "react-router-dom"

// components
import Login from './auth/Login'
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
      profileClass: 'app-menu-popup app-menu-popup-hide',
      smallProfileClass: 'app-small-profile',
      appsSubMenu: 'app-menu app-submenu',
      pagesSubMenu: 'app-menu app-submenu',
      appsClass: 'list',
      pagesClass: 'list',
    }
  }

  createList = () => {
    let dt = []

    for (let i = 0; i < 10; i++) {
      dt.push(
        <NavLink to={'/contents/'+i}>
          <li className="content" onClick={ this.opSlide }>
              <div className="list">
                <div className="icn">
                  <i className="fa fa-lg fa-th"></i>
                </div>
                <div className="ttl">
                  Components { i }
                </div>
              </div>
          </li>
        </NavLink>
      )
    }

    return dt
  }

  createSubMenu = (val, link) => {
    let dt = []

    for (let i = 0; i < 3; i++) {
      dt.push(
        <NavLink to={ link }>
          <li className="content">
            <div class="list">
              <div class="icn"></div>
              <div class="ttl">
                { val }
              </div>
              <div class="icn txt-site txt-right txt-12"></div>
            </div>
          </li>
        </NavLink>
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

  opProfile = () => {
    if (this.state.profileClass === 'app-menu-popup app-menu-popup-hide') {
      this.setState({profileClass: 'app-menu-popup'})
      this.setState({smallProfileClass: 'app-small-profile active'})
    } else {
      this.setState({profileClass: 'app-menu-popup app-menu-popup-hide'})
      this.setState({smallProfileClass: 'app-small-profile'})
    }
  }

  opAppsSubmenu = () => {
    if (this.state.appsSubMenu === 'app-menu app-submenu') {
      this.setState({appsSubMenu: 'app-menu'})
      this.setState({appsClass: 'list active'})
    } else {
      this.setState({appsSubMenu: 'app-menu app-submenu'})
      this.setState({appsClass: 'list'})
    }
  }

  opPagesSubmenu = () => {
    if (this.state.pagesSubMenu === 'app-menu app-submenu') {
      this.setState({pagesSubMenu: 'app-menu'})
      this.setState({pagesClass: 'list active'})
    } else {
      this.setState({pagesSubMenu: 'app-menu app-submenu'})
      this.setState({pagesClass: 'list'})
    }
  }

  render() {
    

    return (
      <HashRouter history={ Router.browserHistory }>
        <div className="app">

          {/* Side */}
          <div className={ this.state.slideClass }>
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

                  <NavLink to="/home">
                    <li className="content" onClick={ this.opSlide }>
                      <div className="list">
                        <div className="icn">
                          <i className="fa fa-lg fa-tachometer-alt"></i>
                        </div>
                        <div className="ttl">
                          Dashboard
                        </div>
                      </div>
                    </li>
                  </NavLink>

                  {/* <NavLink to="/apps"> */}
                    <li className="content">
                      <div 
                        className={ this.state.appsClass }
                        onClick={ this.opAppsSubmenu }>
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

                      <ul className={this.state.appsSubMenu}>
                        { this.createSubMenu('Apps submenu', '/apps') }
                      </ul>

                    </li>
                  {/* </NavLink> */}

                  {/* <NavLink to="/pages"> */}
                    <li className="content">
                      <div 
                        className={ this.state.pagesClass }
                        onClick={ this.opPagesSubmenu }>
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
                      
                      <ul className={this.state.pagesSubMenu}>
                        { this.createSubMenu('Pages submenu', '/pages') }
                      </ul>

                    </li>
                  {/* </NavLink> */}

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
                    className="btn btn-grey btn-radius app-mobile" 
                    onClick={ this.opSlide }>
                    <i 
                      className="fa fa-lg fa-bars" 
                      style={{marginRight: '10px'}}></i>
                    <span 
                      className="txt-site txt-14 txt-main-color txt-thin">
                      Menu
                    </span>
                  </button>

                  <form action="#" className="app-desktop">
                    <div className="input-group input-border">
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

                  <div 
                    onClick={this.opProfile}
                    className={this.state.smallProfileClass} 
                    style={ {float: 'right'} }>
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

                  <div
                    style={{top: "45px"}} 
                    className={this.state.profileClass}>
                    <ul>
                      <li onClick={this.opProfile}>
                        <i className="icn far fa-lw fa-user"></i>
                        Akun
                      </li>
                      <li onClick={this.opProfile} className="bdr-bottom">
                        <i className="icn fa fa-lw fa-cog"></i>
                        Pengaturan
                      </li>
                      <NavLink to="/">
                        <li onClick={this.opProfile}>
                          <i className="icn fa fa-lw fa-power-off"></i>
                          Logout
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                
                </div>

              </div>
            </div>

            {/* content */}
            <Route exact path="/" component={ Login }></Route>
            <Route exact path="/home" component={ Home }></Route>
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

      </HashRouter>

    )
  }

}

export default App;
