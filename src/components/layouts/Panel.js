import React, { Component } from 'react'

class Panel extends Component {

  render() {

    return (
      <div className="app-panel">
				<div className="panel-content">

          <div className="col-1">

            <button className="btn btn-grey app-mobile">
							<i className="fa fa-lg fa-bars" style={{'margin-right': '10px'}}></i>
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
    )
  }

}

export default Panel