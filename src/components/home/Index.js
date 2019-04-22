import React, { Component } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import CardPercentage from '../cards/Percentage'
import CardStatistic from '../cards/Statistic'

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

class Home extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="padding-15px grid grid-2x grid-mobile-none">
          
          <div className="column-1">
            <div className="txt-site txt-18 txt-main-color txt-bold margin-top-5px margin-bottom-5px">
                Dashboard
            </div>
          </div>

          <div className="column-2 content-right display-flex">
            <form action="#" style={ {width: '100%'} }>
                <div className="input-group">
                    <input 
                      type="date" 
                      className="txt txt-main-color txt-trans-color" 
                      placeholder="Date"
                      required></input>
                    <button 
                      className="btn btn-no-radius btn-blue icn"
                      type="submit">
                      <i className="far fa-lg fa-calendar"></i>
                    </button>
                </div>
            </form>

            <div className="margin-left-5px margin-right-5px">
                <button className="btn btn-blue btn-qube icn">
                  <i className="fa fa-lg fa-print"></i>
                </button>
            </div>

            <div>
                <button className="btn btn-blue btn-qube icn" >
                  <i className="fa fa-lg fa-ellipsis-h"></i>
                </button>
            </div>
          </div>

        </div>

        <div className="display-flex-mobile">

          { this.cardStatistic(2) }
          { this.cardPercentage(2) }

        </div>

        <div className="display-flex-mobile" style={{width: '100%'}}>

          <table className="table">
              <thead className="background-blue">
                  <tr>
                    <th>No</th>
                    <th>Content 1</th>
                    <th>Content 2</th>
                    <th>Content 3</th>
                  </tr>
              </thead>
              <tbody>
                { this.createTableContents() }
              </tbody>
          </table>

          <div className="card">
            <div className="padding-15px background-blue">
              Diagram
            </div>
            <div className="card-mid">
              <div className="padding-10px txt-site txt-9">
              <ResponsiveContainer width='100%' aspect={4.0/2.8}>
                <AreaChart 
                  data={data}
                  margin={{
                    top: 0, right: 0, left: 0, bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="uv" 
                    stackId="1" 
                    stroke="#8884d8" 
                    fill="#8884d8" />
                  <Area 
                    type="monotone" 
                    dataKey="pv" 
                    stackId="1" 
                    stroke="#82ca9d" 
                    fill="#82ca9d" />
                  <Area 
                    type="monotone" 
                    dataKey="amt" 
                    stackId="1" 
                    stroke="#ffc658" 
                    fill="#ffc658" />
                </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }

  createTableContents = () => {
    let dt = []

    for (let i = 0; i < 7; i++) {
      dt.push(
        <tr>
          <td>
              <strong>{ i + 1 }</strong>
          </td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      )
    }

    return dt
  }

  cardPercentage = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardPercentage></CardPercentage>
      )
    }

    return dt
  }

  cardStatistic = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardStatistic></CardStatistic>
      )
    }

    return dt
  }

}

export default Home