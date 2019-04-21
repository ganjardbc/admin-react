import React, { Component } from 'react'

class Percentage extends Component {
  render() {
    return (
      <div className="card">
                    
        <div className="padding-15px background-blue">
          Apps
        </div>

        <div className="padding-top-25px padding-bottom-25px">
          <div className="card-percentage border-50">
            <div className="percentage-info">
              <div className="percentage-title">
                  50%
              </div>
              <div className="percentage-subtitle">
                  Percentage
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Percentage